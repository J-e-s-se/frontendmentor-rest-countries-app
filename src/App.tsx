import CountriesList from './pages/CountriesList'
import { Routes, Route, useMatch } from 'react-router-dom'
import CountriesDetail from './pages/CountriesDetail'
import { useCountries, useTheme } from './hooks'
import Layout from './components/Layout'
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
  const match = useMatch('frontendmentor-rest-countries-app/details/:code')
  const codeString = match?.params.code
  const countryDetail = codeString
    ? countries.find((c) => c.alpha3Code === codeString.toUpperCase())
    : undefined
  console.log('codeString', codeString)
  console.log('countryDetail', countryDetail)
  return (
    <div data-theme={theme}>
      <div className="font-nunito text-vdarkbluet dark:text-white bg-light-gray dark:bg-verydarkbluebg font-normal min-h-screen antialiased min-w-[320px]">
        <Routes>
          <Route
            path="/frontendmentor-rest-countries-app/"
            element={<Layout switchTheme={switchTheme} />}
          >
            <Route
              path=""
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
              path="details/:code"
              element={
                <CountriesDetail
                  countryDetail={countryDetail}
                  getCountryName={getCountryName}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
