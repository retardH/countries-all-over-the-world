import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

const Inputs = ({
  regionOptionHandler,
  countryInputHandler,
  countrySearchHandler,
  region,
  country,
  regionFilterHandler,
}) => {
  return (
    <div className="inputs-container flex md:flex-row flex-col space-y-6 md:space-y-0 md:items-center md:justify-between w-full px-6 md:px-12 mb-12">
      <div className="search-country flex items-center space-x-4 bg-white px-6 py-4 w-full md:w-1/2 rounded-md shadow-lg">
        <FaSearch
          className="text-slate-400 hover:text-slate-900 text-lg cursor-pointer"
          onClick={countrySearchHandler}
        />
        <input
          type="text"
          className="outline-none flex-1 text-slate-400"
          placeholder="Search for a country"
          value={country}
          onChange={(e) => countryInputHandler(e.target.value)}
          onKeyUp={(e) => {
            if(e.key === 'Enter') {
              countrySearchHandler();
            }
          }}
        />
      </div>
      <div className="flex items-center justify-between md:space-x-4 rounded-md bg-white shadow-lg pr-2">
        <select
          name="region"
          id="region"
          placeholder="Filter by Region"
          className="py-4 px-2 rounded-md text-slate-400 outline-none"
          value={region}
          onChange={(e) => regionOptionHandler(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="europe">Europe</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
        </select>
        <FiFilter
          className="text-slate-400 hover:text-slate-900 cursor-pointer text-lg"
          onClick={regionFilterHandler}
        />
      </div>
    </div>
  );
};

export default Inputs;
