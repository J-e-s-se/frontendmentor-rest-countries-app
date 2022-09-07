import { Link } from 'react-router-dom'
import { CountryDetail } from './types'
const CountriesDetail = ({
  countryDetail,
  getCountryName,
}: {
  countryDetail: CountryDetail | undefined
  getCountryName: (a3code: string) => string
}) => {
  if (!countryDetail) {
    return null
  }
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    languages,
    currencies,
    borders,
  } = countryDetail
  return (
    <div className="my-3 sm:my-8 ">
      <Link
        to="/"
        className="flex w-36 bg-white dark:bg-dark-blue h-12 items-center rounded-md shadow-md justify-between px-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 stroke-black dark:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        Back
      </Link>

      <div className="mt-16 sm:mt-20 lg:flex lg:flex-wrap justify-between">
        <div className="lg:w-[45%]">
          <img src={flag} alt={`flag of ${name}`} />
        </div>
        <div className="lg:w-[47%] pt-10 sm:pt-12">
          <h2 className="text-[28px] font-[800]">{name}</h2>
          <div className="sm:flex flex-wrap lg:whitespace-nowrap mt-2 sm:mt-4">
            <div className="flex-1">
              <div className="flex leading-9 mr-">
                <div className="font-semibold mr-2 ">Native Name: </div>
                {nativeName}
              </div>
              <div className="flex leading-9">
                <div className="font-semibold mr-2">Population: </div>
                {population}
              </div>
              <div className="flex leading-9">
                <div className="font-semibold mr-2">Region: </div>
                {region}
              </div>
              <div className="flex leading-9">
                <div className="font-semibold mr-2">Sub Region: </div>
                {subregion}
              </div>
              <div className="flex leading-9">
                <div className="font-semibold mr-2">Capital: </div>
                {capital}
              </div>
            </div>

            <div className="flex-1 mt-6 sm:mt-0">
              <div className="flex leading-9">
                <div className="font-semibold mr-2">Top Level Domain: </div>
                {topLevelDomain}
              </div>
              <div className="flex leading-9">
                <div className="font-semibold mr-2">Currencies: </div>
                {currencies?.map((c) => c.name).join(', ')}
              </div>
              <div className="flex leading-9">
                <div className="font-semibold mr-2">Languages: </div>
                {languages?.map((l) => l.name).join(', ')}
              </div>
            </div>
          </div>

          <div className="flex mt-6 sm:mt-12 md:mt-14 flex-wrap ">
            <div className="font-semibold flex whitespace-nowrap mr-4">
              Border Countries:{' '}
            </div>
            <div className="flex text-sm flex-wrap gap-1">
              {borders?.map((b) => (
                <Link
                  to={`/details/${b.toLowerCase()}`}
                  className="rounded shadow px-6 py-2 whitespace-nowrap  bg-white dark:bg-dark-blue flex"
                  key={b}
                >
                  {getCountryName(b)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountriesDetail
