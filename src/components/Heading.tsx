const Heading = ({ switchTheme }: { switchTheme: () => void }) => {
  return (
    <div className="shadow-bottom">
      <div className="mx-auto container h-20 flex items-center justify-between">
        <h2 className="font-[800] sm:text-2xl">Where in the world?</h2>
        <div
          className="font-[600] text-sm sm:text-base flex items-center cursor-pointer"
          onClick={() => switchTheme()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mx-2 stroke-vdarkbluet dark:stroke-white dark:fill-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          Dark Mode
        </div>
      </div>
    </div>
  )
}

export default Heading
