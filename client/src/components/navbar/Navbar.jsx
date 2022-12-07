/* eslint-disable no-unused-vars */
import s from "./navbar.module.scss";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  const logoutUser = () => {
    dispatch({ type: "LOGOUT" });
  };

  const toLoginPage = () => {
    navigate("/login");
  };
  const toRegPage = () => {
    navigate("/register");
  };

  return (
    <>
      <div className={`${s.under} `}>
        <div className={s.container}>
          <div className={s.childs}>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className={`${s.nav} `}
            >
              MyHotels
            </Link>

            {user ? (
              <>
                <div className="loginnedUser">
                  <p>
                    Loginned as a <b>{user.details?.username}&nbsp;</b>
                  </p>
                  <button onClick={logoutUser}>LOGOUT</button>
                </div>
              </>
            ) : (
              <div className={s.reg}>
                <button onClick={toLoginPage}>SIGN IN</button>
                <button onClick={toRegPage}>SIGN UP</button>
              </div>
            )}
          </div>
          <div className={s.lineH}></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
