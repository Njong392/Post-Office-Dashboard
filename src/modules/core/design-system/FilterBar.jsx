/* eslint-disable react/prop-types */
import NewPackageButton from "./NewPackageButton";

// eslint-disable-next-line react/prop-types
const FilterBar = ({setTimeFrame, searchQuery, setSearchQuery}) => {
  return (
    <div className="flex items-center justify-between gap-2 mt-16">
      <form className="max-w-lg flex-grow">
        <div className="flex">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-25 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            onChange={(e) => setTimeFrame(e.target.value)}
          >
            <option value="thisMonth">This month</option>
            <option value="lastMonth">Last Month</option>
            <option value="lastYear">Last year</option>
          </select>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search packages based on recipient name"
              required
              onChange={e => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>


      <div>
        <NewPackageButton />
      </div>
    </div>
  );
};

export default FilterBar;
