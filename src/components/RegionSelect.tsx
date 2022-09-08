import { useState } from 'react'

interface SelectProps {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
  getRegions: () => string[]
}

const RegionSelect = ({ filter, setFilter, getRegions }: SelectProps) => {
  const regions = getRegions()
  const [view, setView] = useState<boolean>(false)

  const handleSelected = (value: string) => {
    const val = value === filter ? '' : value
    console.log('filter', value)
    setFilter(val)
  }

  return (
    <div className="dark:bg-verydarkbluebg relative w-[200px] mt-10 sm:mt-0 sm:absolute group top-0 right-0 bg-white  font-[500]">
      <div
        onClick={() => setView((oldView) => !oldView)}
        className="h-[50px] dark:bg-dark-blue items-center flex rounded shadow justify-around cursor-default"
      >
        <div>Filter by Region</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {view ? (
        <div className="dark:bg-dark-blue mt-1 py-4 rounded absolute w-full shadow bg-white">
          {regions.map((r) => (
            <div
              className={`leading-9 pl-6 cursor-default ${
                filter === r && 'font-semibold bg-neutral-100 dark:bg-blue-500'
              }`}
              onClick={() => handleSelected(r)}
              key={r}
            >
              {r}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default RegionSelect
