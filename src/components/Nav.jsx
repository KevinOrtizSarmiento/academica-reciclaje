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
          "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664749101/logo-r-removebg-preview_tczx01.png"
        }
        alt=""
        id="imagen"
      />
      <NavLink id="academica" className="navbar-brand " to={"/"}>
        Academica
      </NavLink>
      {currentUser ? (
        <button
          onClick={(e) => {
            closeSesion(e);
          }}
          id="logout"
        >
          Cerrar sesion
        </button>
      ) : null}
    </header>
  );
};

export default Nav;
