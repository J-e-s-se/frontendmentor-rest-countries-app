import useLocalStorage from 'use-local-storage'

const useTheme = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return {
    theme,
    switchTheme,
  }
}

export default useTheme
