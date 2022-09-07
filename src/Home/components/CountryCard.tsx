import { Country } from '../types'
import { Link } from 'react-router-dom'

const CountryCard = ({
  name,
  capital,
  flag,
  population,
  region,
  alpha3Code,
}: Country) => {
  flag
  return (
    <Link
      to={`/details/${alpha3Code.toLowerCase()}`}
      className="w-full max-w-[280px] shadow-lg rounded-lg bg-white dark:bg-dark-blue text-vdarkbluet dark:text-light-gray sm:w-[266px] h-[366px]"
    >
      <img
        className="w-full h-[45%] rounded-t-lg object-cover"
        src={flag}
        alt={`flag of ${name}`}
      />
      <div className="py-4 px-6 pb-10">
        <h4 className="text-lg font-[800] my-2">{name}</h4>
        <p className="my-1">
          <strong className="font-[600] ">Population:</strong> {population}
        </p>
        <p className="my-1">
          <strong className="font-[600] my-2">Region:</strong> {region}
        </p>
        <p className="my-1">
          <strong className="font-[600] my-2">Capital:</strong> {capital}
        </p>
      </div>
    </Link>
  )
}

export default CountryCard
