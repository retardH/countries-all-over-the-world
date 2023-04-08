 import {FaMapMarkedAlt} from 'react-icons/fa'

const Detail = ({ countryInfo, backBtnHandler }) => {
  let currencyKey = Object.keys(countryInfo.currencies)[0];
  let languages = Object.values(countryInfo.languages);
  return (
    <section className="px-6 md:px-12 w-full mb-12">
      <button
        className="outline-none bg-transparent py-3 px-8 border-2 rounded-md border-zinc-950 dark:border-slate-50 dark:text-slate-50 shadow-sm mb-12 hover:shadow-lg"
        onClick={backBtnHandler}
      >
        Back
      </button>
      <main className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-8 md:space-y-0 mb-6">
        <img src={countryInfo.flags.svg} alt="" className="w-full md:w-1/2" />
        <div className="flex flex-col space-y-6 md:w-1/2">
          <header className='flex items-center space-x-4'>
          <h2 className="text-4xl text-zinc-950 dark:text-white font-bold">
          {countryInfo.name.common} ,
          </h2>
            <a href={countryInfo.maps.googleMaps} className="text-base font-bold text-zinc-700 dark:text-slate-200 hover:text-zinc-900 cursor-pointer flex items-center space-x-3 border-b-2 dark:border-b-slate-300 border-b-zinc-900" target="_blank">
              See Map 
              <FaMapMarkedAlt className='ml-2 text-lg text-zinc-900 dark:text-slate-100'/>
            </a>
          </header>
          <article className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4">
            <ul className="space-y-2 md:w-1/2">
              <li className="text-lg text-zinc-950 dark:text-white">
                <b>Official Name :</b> {countryInfo.name.official}
              </li>
              <li className="text-lg text-zinc-950 dark:text-white">
                <b>Population :</b> {countryInfo.population}
              </li>
              <li className="text-lg text-zinc-950 dark:text-white">
                <b>Region :</b>
                {countryInfo.region}
              </li>
              <li className="text-lg text-zinc-950 dark:text-white">
                <b>Sub-region :</b> {countryInfo.subregion}
              </li>
              <li className="text-lg text-zinc-950 dark:text-white">
                <b>Capital :</b> {countryInfo.capital[0]}
              </li>
            </ul>

            <ul className="space-y-2 md:w-1/2">
              <li className="text-lg text-zinc-950 dark:text-white">
                <b>Time-zone :</b> {countryInfo.timezones[0]}
              </li>
              <li className="text-lg text-zinc-950 dark:text-white">
                <b>Currency :</b> {countryInfo.currencies[currencyKey].name}
              </li>
              <li className="text-lg text-zinc-950 dark:text-white">
                <b>Languages :</b> {languages.join(", ")}
              </li>
            </ul>
          </article>
        </div>
      </main>
      <footer className='space-y-4 md:flex md:flex-row md:space-x-4 md:space-y-0 items-center'>
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
          Border Countries:
        </h2>
        <div className="country-group flex items-center space-x-3">
            {
              countryInfo.borders.map((border, idx) => (
                <div key={idx} className='dark:text-white py-2 px-6 rounded-sm shadow-md dark:shadow-white dark:shadow-sm'> {border} </div>
              ))
            }
        </div>
      </footer>
    </section>
  );
};

export default Detail;
