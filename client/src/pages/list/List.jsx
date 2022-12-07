/* eslint-disable no-unused-vars */
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/footer/Footer";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const destinationToLowerCase = destination.toLowerCase();

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destinationToLowerCase}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input
                  placeholder={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  type="text"
                />
              </div>
              {/* <div className="lsItem">
                <label>Check-in Date</label>
                <span onClick={() => setOpenDate(false)}>{`${format(
                  dates[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDates([item.selection])}
                    minDate={new Date()}
                    ranges={dates}
                  />
                )}
              </div> */}
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMin(e.currentTarget.value)}
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMax(e.currentTarget.value)}
                      className="lsOptionInput"
                    />
                  </div>
                </div>
              </div>
              <button onClick={handleClick}>Search</button>
            </div>
            <div className="listResult">
              {loading ? (
                "Loading"
              ) : (
                <>
                  {data.map((i) => (
                    <SearchItem i={i} key={i._id} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default List;
