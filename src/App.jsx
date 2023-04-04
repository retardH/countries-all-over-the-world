import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Inputs from "./Components/Inputs";
import CountryCard from "./Components/CountryCard";
import Pending from "./Components/Pending";
import Error from "./Components/Error";
import Detail from "./Components/CountryDetail";
import { nanoid } from "nanoid";
import "../css/main.css";

function App() {
  const [isWorking, setIsWorking] = useState(true);
  const [isPending, setIsPending] = useState(true);
  const [isDetailClicked, setIsDetailClicked] = useState(false);
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [countryId, setCountryId] = useState(null);
  const [fetchedData, setFetchedData] = useState([]);
  const [defaultURL, setDefaultURL] = useState(
    "https://restcountries.com/v3.1/all"
  );

  let regionFetchText = `https://restcountries.com/v3.1/region/${region}`;
  let countryFetchText = `https://restcountries.com/v3.1/name/${country}`;

  useEffect(() => {
    fetch(`${defaultURL}`)
      .then((res) => {
        if (!res.ok) {
          setIsWorking(false);
          console.log("Error");
          throw Error("NO RESPOND FROM THE SERVER");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setIsWorking(true);
        setIsPending(false);
        setFetchedData(data);
      })
      .catch((error) => {
        setIsWorking(false);
        setIsPending(false);
        console.log(error);
      });
  }, [defaultURL]);

  function regionOptionHandler(reg) {
    setRegion(reg);
  }

  function regionFilterHandler() {
    setDefaultURL(regionFetchText);
    setRegion('none');
  }

  function countrySearchHandler() {
    setDefaultURL(countryFetchText);
    setCountry('');
  }

  function countryInputHandler(c) {
    setCountry(c);
  }

  function countryCardHandler(id) {
    setCountryId(id);
    setIsDetailClicked(true);
  }

  function backBtnHandler() {
    setIsDetailClicked(false);
    setCountryId(null);
  }
  return (
    <div className="top-container">
      <Navbar />
      {!isDetailClicked ? (
        <>
          <Inputs
            regionOptionHandler={regionOptionHandler}
            countryInputHandler={countryInputHandler}
            countrySearchHandler={countrySearchHandler}
            regionFilterHandler={regionFilterHandler}
            region={region}
            country={country}
          />
          {isPending && <Pending />}
          {!isWorking && <Error />}
          <div
            className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-12 w-full mb-12 gap-12"
          >
            {isWorking &&
              !isPending &&
              fetchedData.map((country, id) => (
                <CountryCard
                  countryInfo={country}
                  key={nanoid()}
                  countryId={id}
                  idHandler={countryCardHandler}
                />
              ))}
          </div>
        </>
      ) : (
        <Detail
          countryInfo={fetchedData[countryId]}
          backBtnHandler={backBtnHandler}
        />
      )}
    </div>
  );
}

export default App;
