import { Database, Factory, FileText, Info } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter'
import Logo from './Logo'

export default ({
  title = 'Transfo',
  categorie = [],
}: {
  title?: string
  categorie?: string[]
}) => {
  return (
    <nav className=" grid grid-cols-layout">
      <Logo />
      <div className="relative flex flex-1 items-center">
        <div className="ml-4 flex flex-col justify-center">
          <h1 className="font-roboto text-2xl font-bold text-black">
            {capitalizeFirstLetter(title)}
          </h1>
          <h2 className="font-roboto text-base">{categorie.join(' - ')}</h2>
        </div>

        {title != 'Transfo' ? (
          <ul className="absolute left-2/4 right-2/4 flex h-16 justify-center gap-12">
            <li>
              <NavLink
                to={`info`}
                className={({ isActive }) =>
                  'text-md flex h-full w-16 flex-col items-center justify-center font-roboto ' +
                  (isActive ? 'border-b-4 border-verbruik-72' : '')
                }
              >
                <Info size={20} />
                Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`data`}
                className={({ isActive }) =>
                  'flex h-full w-16 flex-col items-center justify-center font-roboto ' +
                  (isActive ? 'border-b-4 border-verbruik-72' : '')
                }
              >
                <Database size={20} />
                Data
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`quiz`}
                className={({ isActive }) =>
                  'flex h-full w-16 flex-col items-center justify-center font-roboto ' +
                  (isActive ? 'border-b-4 border-verbruik-72' : '')
                }
              >
                <FileText size={20} />
                Quiz
              </NavLink>
            </li>
          </ul>
        ) : (
          ''
        )}
      </div>
      <button className="flex items-center justify-center">
        <Link to={'/'} className="flex flex-col items-center">
          <Factory size={20} />
          Home
        </Link>
      </button>
    </nav>
  )
}
