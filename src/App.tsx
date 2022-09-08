import CountriesList from './pages/CountriesList'
import Heading from './components/Heading'
import { Routes, Route, useMatch } from 'react-router-dom'
import CountriesDetail from './pages/CountriesDetail'
import MainContainer from './components/MainContainer'
import { useCountries, useTheme } from './hooks'
const App = () => {
  const {
    search,
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
