import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/menujosmar.css";
import "../styles/nav.css";
import { logout } from "../redux/apiCalls/authApiCalls";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);
  const change = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  const closeSesion = (e) => {
    e.preventDefault();
    logout(dispatch);
    setOpen(!open);
  };
  const navegar = (e, url) => {
    e.preventDefault();
    navigate(url);
    setOpen(!open);
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
        <div className="menu-bar">
          <button
            onClick={(e) => {
              change(e);
            }}
            className="menu"
          >
            <img
              src={"https://res.cloudinary.com/dlitdzj3a/image/upload/v1665685440/pngegg_mmewkz.png"}
              alt=""
              className="menu-icon"
            />{" "}
          </button>
          <div
            id="menujosmar"
            className={open ? "see menu-list" : "no-see menu-list"}
          >
            {currentUser ? (
              <div className="content-menu-josmar">
                <div className="column">
                  <h4>Mi cuenta</h4>
                  <div className="info-perfil-menu">
                    <button
                      onClick={(e) => {
                        navegar(e, `/profile/${currentUser._id}`);
                      }}
                      id="link-to-img"
                    >
                      <img
                        src="https://res.cloudinary.com/dlitdzj3a/image/upload/v1665688836/user-p_el2yq1.png"
                        alt=""
                        className="img-perfil-menu"
                      />
                    </button>
                    <div className="name-andsig">
                      <h5>{`${currentUser.name} ${currentUser.last}`}</h5>
                      <div className="email-menu">
                        <div className="miniinfo">
                          <h6 className="email-large">» {currentUser.email}</h6>
                          <h6 className="email-short">
                            »{" "}
                            {currentUser.email.length > 23
                              ? `${currentUser.email.substring(0, 24)}...`
                              : currentUser.email}
                          </h6>

                          <button
                            className="menu-item-nav"
                            onClick={(e) => {
                              navegar(e, `/profile/${currentUser._id}`);
                            }}
                          >
                            » Ver perfil
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <h4 className="service-title">Servicios</h4>
                  <div className="services-nav">
                    <button
                      className="menu-item-services"
                      onClick={(e) => {
                        navegar(e, `/profile/${currentUser._id}`);
                      }}
                    >
                      <i class="bi bi-geo-alt-fill"></i> Mapas
                    </button>
                    <button
                      className="menu-item-services"
                      onClick={(e) => {
                        navegar(e, `/profile/${currentUser._id}`);
                      }}
                    >
                      <i class="bi bi-clock-fill"></i>  Horarios
                    </button>
                    <button
                      className="menu-item-services"
                      onClick={(e) => {
                        navegar(e, `/profile/${currentUser._id}`);
                      }}
                    >
                      <i class="bi bi-lightbulb-fill"></i> Ideas
                    </button>
                    <button
                      className="menu-item-services"
                      onClick={(e) => {
                        navegar(e, `/profile/${currentUser._id}`);
                      }}
                    >
                      <i class="bi bi-map-fill"></i> Planes
                    </button>
                    <button
                      className="menu-item-services"
                      onClick={(e) => {
                        navegar(e, `/profile/${currentUser._id}`);
                      }}
                    >
                      <i class="bi bi-info-circle-fill"></i> Informacion
                    </button>
                    <button
                      className="menu-item-services"
                      onClick={(e) => {
                        navegar(e, `/profile/${currentUser._id}`);
                      }}
                    >
                      <i class="bi bi-telephone-fill"></i> Contacto
                    </button>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    closeSesion(e);
                  }}
                  className="logout"
                >
                  Cerrar sesion
                </button>
              </div>
            ) : (
              <div
                id="load-menu"
                class="spinner-border text-secondary"
                role="status"
              />
            )}
          </div>
        </div>
      ) : null}

      {/*currentUser ? (
        <div className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            href="#"
            id="drop-menu-i"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://res.cloudinary.com/dlitdzj3a/image/upload/v1665614514/user-removebg-preview_en4kbw.png"
              alt=""
              className="img-top-nav"
            />
            <small className="name-nav">
              {currentUser.name && currentUser.last
                ? currentUser.name + " " + currentUser.last
                : "Desconocido"}
            </small>
          </div>
          <ul  className="dropdown-menu">
            <li>
              <NavLink to={"/perfil"} className="dropdown-item item-nav-options">
                Mi Cuenta
              </NavLink>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
            <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <button onClick={e=>{closeSesion(e)}} className="logout">Cerrar sesion</button>
            </li>
          </ul>
        </div>
      ) : null*/}
    </header>
  );
};

export default Nav;
