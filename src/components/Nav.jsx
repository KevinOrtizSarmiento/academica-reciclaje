import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/apiCalls/authApiCalls";
import { useNavigate } from "react-router";
import "../styles/nav.css";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);

  const closeSesion = (e) => {
    e.preventDefault();
    logout(dispatch);
  };
  return (
    <header id="nav-reciclaje">
      <img
        src={
          "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664754956/reciclar_bridro.png"
        }
        alt=""
        id="imagen"
      />
      <NavLink id="academica" className="navbar-brand " to={"/"}>
        Ecological <small className="addon-s">/ reciclaje</small>
      </NavLink>
      {currentUser ? (
        <div id="logout-box">
          <button
          onClick={(e) => {
            closeSesion(e);
          }}
          id="logout"
        >
          Cerrar sesion
        </button>
        </div>
      ) : null}
    </header>
  );
};

export default Nav;
