import Select from 'react-select'

interface FilterProps {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
  getRegions: () => string[]
  computeShownCountries: (filterString?: string, searchString?: string) => void
}
const Filter = ({
  filter,
  setFilter,
  getRegions,
  computeShownCountries,
}: FilterProps) => {
  const options = getRegions().map((region) => ({
    value: region,
    label: region,
  }))

  return (
    <div className=" w-[200px] mt-10 sm:mt-0 sm:absolute group top-0 right-0 bg-white  font-[500]">
      <Select
        defaultInputValue={filter}
        options={options}
        onChange={(newValue) => {
          const value = newValue?.value ? newValue.value : ''
          setFilter(value)
          computeShownCountries(value)
        }}
        isClearable={true}
      />
    </div>
  )
}

export default Filter
