const CountryCard = ({ countryInfo, countryId, idHandler }) => {
  return (
    <div
      className="card flex flex-col items-start rounded-md shadow-md bg-slate-50"
    >
      <img
        src={countryInfo.flags.png}
        alt=""
        className="rounded-md object-cover object-center w-full max-h-60 sm:h-44"
      />

      <article className="flex flex-col space-y-3 pt-6 pb-6 px-4">
        <h2 className="text-xl text-zinc-950 font-bold">
          {countryInfo.name.common}
        </h2>
        <h4 className="text-base font-bold text-zinc-950">
          Population:{" "}
          <span className="text-base text-zinc-500">
            {countryInfo.population}
          </span>
        </h4>
        <h4 className="text-base font-bold text-zinc-950">
          Region:{" "}
          <span className="text-base text-zinc-500">{countryInfo.region}</span>
        </h4>
        <h4 className="text-base font-bold text-zinc-950">
          Capital:{" "}
          <span className="text-base text-zinc-500">{countryInfo.capital}</span>
        </h4>
      </article>
      <div className="mb-12 text-center w-full">
      <button 
        className="py-2 px-6 font-bold bg-transparent border-2 border-zinc-950 rounded-md shadow-sm cursor-pointer hover:shadow-lg"
        onClick={() => idHandler(countryId)}
      >See Detail..</button>
      </div>
    </div>
  );
};

export default CountryCard;
