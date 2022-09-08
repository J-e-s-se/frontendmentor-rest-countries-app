import { useEffect, useState } from 'react'
import axios from 'axios'
import { Country } from '../types'

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [filter, setFilter] = useState<string>('')
  const [search, setSearch] = useState<string>('')

  const [shownCountries, setShownCountries] = useState<Country[]>([])
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data: countryFromApi } = await axios.get<Country[]>(
          'https://restcountries.com/v2/all'
        )
        setCountries(countryFromApi)
        setShownCountries(countryFromApi)
        // console.log('Countries fetched')
      } catch (e) {
        console.log('error', e)
      }
    }
    fetchCountries()
  }, [])

  useEffect(() => {
    const filterResult = filter
      ? countries.filter((c) => c.region === filter)
      : countries

    const searchResult = filterResult.filter((f) =>
      f.name.toLowerCase().includes(search.toLowerCase())
    )
    setShownCountries(searchResult)
  }, [filter, search])

  const getRegions = () => {
    return countries.reduce((regions: string[], country) => {
      return regions.includes(country.region)
        ? regions
        : regions.concat(country.region)
    }, [])
  }

  const getCountryName = (a3code: string) => {
    const country = countries.find((c) => c.alpha3Code === a3code)
    return country ? country.name : ''
  }

  return {
    countries,

    setSearch,
    search,

    filter,
    setFilter,

    shownCountries,
    getRegions,
    getCountryName,
  }
}
