import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const [valor, setValor] = useState("");
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const reset = () => {
    setValor("");
  };
  const conditions = [".", ",", "e", "-", "+"];
  return (
    <div id="home" className="global">
      {currentUser ? (
        <div id="form-reciclaje" className="center">
          <div id="content-form-reciclaje">
            <small className="name">
              Bienvenid@ {currentUser.name ? currentUser.name : "!"}
            </small>
            <h5 id="pregunta-reciclaje">¿Cuanto dinero necesitas?</h5>
            <p className="limit">
              {valor.length > 14
                ? "Ups! Haz alcanzado el limite permitido"
                : ""}
            </p>
            <input
            
              value={valor}
              disabled={conditions.some((e) => valor.includes(e)) ? "true" : ""}
              onChange={(e) => {
                setValor(e.target.value);
                if (valor.length > 14) {
                  setValor(valor.slice(0, -1));
                }
              }}
              id="heart"
              type="number"
              placeholder="Ej: $10.000"
              className="size-bet"
            />
            <h3 id="valor-formateado">
              {valor && !conditions.some((e) => valor.includes(e))
                ? formatterPeso.format(valor)
                : conditions.some((e) => valor.includes(e))
                ? "Error!!"
                : "$0"}
            </h3>
            <h6>
              {conditions.some((e) => valor.includes(e))
                ? "No puedes ingresar caracteres no validos"
                : ""}{" "}
            </h6>
            {conditions.some((e) => valor.includes(e)) ? (
              <button onClick={() => reset()} id="boton-reset-reciclaje">
                Reiniciar
              </button>
            ) : (
              ""
            )}
            {!conditions.some((e) => valor.includes(e)) &&
            valor.length >= 4 &&
            valor.length <= 15 ? (
              <NavLink
                id="search-reciclaje"
                to={
                  "/search/value/" +
                  valor 
                }
              >
                Consultar
              </NavLink>
            ) : (
              <button disabled id="boton-consultar-reciclaje">
                Consultar
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
