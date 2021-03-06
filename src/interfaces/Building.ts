interface large {
  url: string
}

interface thumbnails {
  large: large
}

interface profielfoto {
  url: string
  thumbnails: thumbnails
}

export interface Gebouw {
  id: string
  naam: string
  influx_naam: string
  building_id: number | undefined
  categorie: string[]
  profielfoto: profielfoto[]
  info: string
  volgorde: number
  quiz: string[]
  weetjes: string[]
  hashtags: string[]
}
