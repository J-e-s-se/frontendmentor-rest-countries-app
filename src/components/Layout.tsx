import { Outlet } from 'react-router-dom'
import Heading from './Heading'
import Hero from './Hero'
const Layout = ({ switchTheme }: { switchTheme: () => void }) => {
  return (
    <div>
      <Heading switchTheme={switchTheme} />
      <Hero>
        <Outlet />
      </Hero>
    </div>
  )
}

export default Layout
