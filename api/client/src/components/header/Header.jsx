/* eslint-disable no-unused-vars */
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import s from "./Header.module.scss";

import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  let date1 = dates[0].startDate;
  let date1L = date1.toString().split(" ")[2];
  let toNumber1 = Number(date1L);
  //
  //
  //
  let date2 = dates[0].endDate;
  let date2L = date2.toString().split(" ")[2];
  let toNumber2 = Number(date2L);
  // console.log(toNumber2);

  localStorage.setItem("startDate", toNumber1 || null);
  localStorage.setItem("endDate", toNumber2 || null);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, dates, options },
    });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <div className={`${s.under} `}>
              <div className={s.container}>
                <div className={s.left}>
                  <h1 className={s.title}>
                    Enjoy Your <br /> Dream Vacation
                  </h1>
                  <p className={s.text}>
                    A lifetime of discounts? It's Genius.
                  </p>

                  {/* / */}
                  {/* / */}

                  <div className={s.formParent}>
                    <div className={s.parL}>
                      <p>Hotels</p>
                      <div className={s.line}></div>
                      <input
                        type="text"
                        placeholder="Enter City"
                        onChange={(e) => setDestination(e.target.value)}
                        onKeyPress={handleKeypress}
                      />
                    </div>

                    <button className={s.parR} onClick={handleSearch}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
