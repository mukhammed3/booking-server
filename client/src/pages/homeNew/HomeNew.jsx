import React from "react";
import s from "./homeNew.module.scss";

const HomeNew = () => {
  return (
    <>
      <div className={`${s.under} `}>
        <div className={s.container}>
          <div className={s.left}>
            <h1 className={s.title}>
              Enjoy Your <br /> Dream Vacation
            </h1>
            <p className={s.text}>A lifetime of discounts? It's Genius.</p>

            {/* / */}
            {/* / */}

            <div className={s.formParent}>
              <div className={s.parL}>
                <p>Hotels</p>
                <div className={s.line}></div>
                <input type="text" placeholder="Enter City" />
              </div>

              <button className={s.parR}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNew;
