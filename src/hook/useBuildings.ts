import { useEffect, useState } from 'react'
import { Gebouw } from '../interfaces/Building'
import { get } from '../utils/data-acces'

export const useBuildings = () => {
  const [buildingsData, setBuildingsData] = useState<Gebouw[]>([])

  function getBuildings() {
    get(
      `https://api.airtable.com/v0/appS16VafPZAqBNVV/Gebouwen?fields%5B%5D=id&fields%5B%5D=naam&fields%5B%5D=categorie&fields%5B%5D=building_id&fields%5B%5D=volgorde`,
    )
      .then((data) => {
        //console.log('Succes:', data)
        const tempArray: Gebouw[] = []

        data.records.forEach((record: { fields: any }) => {
          tempArray.push(record.fields)
        })

        setBuildingsData(tempArray)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    getBuildings()
  }, [])

  return [buildingsData]
}
