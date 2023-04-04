 import {FaMapMarkedAlt} from 'react-icons/fa'

const Detail = ({ countryInfo, backBtnHandler }) => {
  let currencyKey = Object.keys(countryInfo.currencies)[0];
  let languages = Object.values(countryInfo.languages);
  return (
    <section className="px-6 md:px-12 w-full mb-12">
      <button
        className="outline-none bg-transparent py-3 px-8 border-2 rounded-md border-zinc-950 shadow-sm mb-12 hover:shadow-lg"
        onClick={backBtnHandler}
      >
        Back
      </button>
      <main className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-8 md:space-y-0">
        <img src={countryInfo.flags.svg} alt="" className="w-full md:w-1/2" />
        <div className="flex flex-col space-y-6 md:w-1/2">
          <header className='flex items-center space-x-4'>
          <h2 className="text-4xl text-zinc-950 font-bold">
          {countryInfo.name.common} ,
          </h2>
            <a href={countryInfo.maps.googleMaps} className="text-base font-bold text-zinc-700 hover:text-zinc-900 cursor-pointer flex items-center space-x-3 border-b-2 border-b-zinc-600" target="_blank">
              See Map 
              <FaMapMarkedAlt className='text-lg text-zinc-900'/>
            </a>
          </header>
          <article className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4">
            <ul className="space-y-2 md:w-1/2">
              <li className="text-lg text-zinc-950">
                <b>Official Name :</b> {countryInfo.name.official}
              </li>
              <li className="text-lg text-zinc-950">
                <b>Population :</b> {countryInfo.population}
              </li>
              <li className="text-lg text-zinc-950">
                <b>Region :</b>
                {countryInfo.region}
              </li>
              <li className="text-lg text-zinc-950">
                <b>Sub-region :</b> {countryInfo.subregion}
              </li>
              <li className="text-lg text-zinc-950">
                <b>Capital :</b> {countryInfo.capital[0]}
              </li>
            </ul>

            <ul className="space-y-2 md:w-1/2">
              <li className="text-lg text-zinc-950">
                <b>Time-zone :</b> {countryInfo.timezones[0]}
              </li>
              <li className="text-lg text-zinc-950">
                <b>Currency :</b> {countryInfo.currencies[currencyKey].name}
              </li>
              <li className="text-lg text-zinc-950">
                <b>Languages :</b> {languages.join(", ")}
              </li>
            </ul>
          </article>
        </div>
      </main>
    </section>
  );
};

export default Detail;
