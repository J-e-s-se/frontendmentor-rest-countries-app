import { useEffect, useState } from 'react'
import axios from 'axios'
import { CountryDetail } from './types'

const useCountries = () => {
  const [countries, setCountries] = useState<CountryDetail[]>([])
  const [filter, setFilter] = useState<string>('')
  const [search, setSearch] = useState<string>('')

  const [shownCountries, setShownCountries] = useState<CountryDetail[]>([])
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data: countryFromApi } = await axios.get<CountryDetail[]>(
          'https://restcountries.com/v2/all'
        )
        setCountries(countryFromApi)
        setShownCountries(countryFromApi)
        console.log('Countries fetched')
      } catch (e) {
        console.log('error', e)
      }
    }
    fetchCountries()
  }, [])

  const computeShownCountries = (
    filterString = filter,
    searchString = search
  ) => {
    console.log('filterString', filterString, '\nsearch', search)
    const filterResult = filterString
      ? countries.filter((c) => c.region === filterString)
      : countries

    const searchResult = filterResult.filter((f) =>
      f.name.toLowerCase().includes(searchString.toLowerCase())
    )
    console.log('\nfilterResult', filterResult, '\nsearchResult', searchResult)
    setShownCountries(searchResult)
  }

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

    getRegions,
    shownCountries,
    computeShownCountries,
    getCountryName,
  }
}

export default useCountries
