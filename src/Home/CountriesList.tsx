import CountryCard from './components/CountryCard'
import { CountryDetail } from './types'
import Filter from './components/Filter'
import React from 'react'

interface CountriesListProps {
  search: string
  computeShownCountries: (filterString?: string, searchString?: string) => void
  setSearch: React.Dispatch<React.SetStateAction<string>>
  shownCountries: CountryDetail[]
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
  getRegions: () => string[]
}
const CountriesList = ({
  search,
  computeShownCountries,
  setSearch,
  setFilter,
  filter,
  getRegions,
  shownCountries,
}: CountriesListProps) => {
  return (
    <div>
      <div className="relative">
        <div className="bg-white dark:bg-dark-blue max-w-[350px] lg:max-w-[500px] flex items-center rounded shadow h-[58px] py-2 pl-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-[#848484] dark:stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className=" appearance-none bg-white dark:bg-dark-blue dark:placeholder:text-white placeholder:text-dark-gray focus:outline-none focus:shadow-outline mx-6 w-full font-[500]"
            id="search"
            type="text"
            value={search}
            onChange={({ target }) => {
              setSearch(target.value)
              computeShownCountries(undefined, target.value)
            }}
            placeholder="Search for a country..."
          />
        </div>
        <Filter
          filter={filter}
          setFilter={setFilter}
          getRegions={getRegions}
          computeShownCountries={computeShownCountries}
        />
      </div>
      <div className="flex flex-wrap mt-14 gap-[35px] justify-center sm:justify-start">
        {shownCountries.map((c) => (
          <CountryCard key={c.name} {...c} />
        ))}
      </div>
    </div>
  )
}

export default CountriesList
