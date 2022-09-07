import CountriesList from './Home/CountriesList'
import Heading from './Heading'
import { Routes, Route, useMatch } from 'react-router-dom'
import CountriesDetail from './Home/CountriesDetail'
import MainContainer from './Home/components/MainContainer'
import useCountries from './Home/useCountries'
import useTheme from './Home/useTheme'
const App = () => {
  const {
    search,
    computeShownCountries,
    setSearch,
    shownCountries,
    filter,
    setFilter,
    getRegions,
    countries,
    getCountryName,
  } = useCountries()
  const { theme, switchTheme } = useTheme()
  const match = useMatch('/details/:code')
  const codeString = match?.params.code
  const countryDetail = codeString
    ? countries.find((c) => c.alpha3Code === codeString.toUpperCase())
    : undefined
  console.log('codeString', codeString)
  console.log('countryDetail', countryDetail)
  return (
    <div data-theme={theme}>
      <div className="font-nunito text-vdarkbluet dark:text-white bg-light-gray dark:bg-verydarkbluebg font-normal min-h-screen antialiased min-w-[320px]">
        <Heading switchTheme={switchTheme} />
        <MainContainer>
          <Routes>
            <Route
              path="/"
              element={
                <CountriesList
                  search={search}
                  computeShownCountries={computeShownCountries}
                  setSearch={setSearch}
                  shownCountries={shownCountries}
                  filter={filter}
                  setFilter={setFilter}
                  getRegions={getRegions}
                />
              }
            />
            <Route
              path="/details/:code"
              element={
                <CountriesDetail
                  countryDetail={countryDetail}
                  getCountryName={getCountryName}
                />
              }
            />
          </Routes>
        </MainContainer>
      </div>
    </div>
  )
}

export default App
