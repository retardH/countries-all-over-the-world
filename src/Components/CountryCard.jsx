const CountryCard = ({ countryInfo, countryId, idHandler }) => {
  return (
    <div className="card flex flex-col items-start rounded-md shadow-md bg-slate-50 dark:bg-slate-800">
      <img
        src={countryInfo.flags.png}
        alt=""
        className="rounded-md object-cover object-center w-full max-h-60 sm:h-44"
      />

      <article className="flex flex-col space-y-3 pt-6 pb-6 px-4">
        <h2 className="text-xl text-zinc-950 dark:text-white font-bold">
          {countryInfo.name.common}
        </h2>
        <h4 className="text-base font-bold text-zinc-950 dark:text-white">
          Population:{" "}
          <span className="text-base text-zinc-500 dark:text-slate-200">
            {countryInfo.population}
          </span>
        </h4>
        <h4 className="text-base font-bold text-zinc-950 dark:text-white">
          Region:{" "}
          <span className="text-base text-zinc-500 dark:text-slate-200">
            {countryInfo.region}
          </span>
        </h4>
        <h4 className="text-base font-bold text-zinc-950 dark:text-white">
          Capital:{" "}
          <span className="text-base text-zinc-500 dark:text-slate-200">
            {countryInfo.capital}
          </span>
        </h4>
      </article>
      <div className="mb-12 text-center w-full">
        <button
          className="py-2 px-6 font-bold bg-transparent border-2 border-zinc-950 dark:border-slate-50 rounded-md shadow-sm cursor-pointer hover:shadow-lg dark:text-slate-50"
          onClick={() => idHandler(countryId)}
        >
          See Detail..
        </button>
      </div>
    </div>
  );
};

export default CountryCard;
