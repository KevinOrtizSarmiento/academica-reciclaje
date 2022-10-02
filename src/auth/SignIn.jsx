import React, { useState } from "react";
import { login } from "../redux/apiCalls/authApiCalls";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "../styles/signin.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, currentUser, isFetching } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vacio, setVoid] = useState(false);
  const user = { email: email, password: password };
  const iniciarSesion = (e) => {
    e.preventDefault();
    if (email.trim().length > 1 && password.trim().length > 1) {
      login(dispatch, user);
      setVoid(false);
    } else {
      setVoid(true);
    }
  };
  const goToRegister = (e) => {
    e.preventDefault();
    navigate("/signup/new")
  }
  return (
    <div className="global" id="login">
      {!currentUser?
      <div className="form-login">
        <h4 className="sesion-text">
          Apoyemos a nuestro planeta
          <img
            src="data:image/png;base64,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"
            className="icon-planet"
            alt="Plantea Tierra"
          />
          <i class="bi h-i bi-heart-fill" />!
        </h4>
        <form autoComplete="false" className="form-login-content">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electronico"
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="login-input"
          />
          <small className="void">
            {vacio
              ? "Debes completar todos los campos"
              : error
              ? "Correo o contraseña incorrectos"
              : ""}
          </small>
          <button
          disabled={isFetching?"true":""}
            onClick={(e) => {
              iniciarSesion(e);
            }}
            type="submit"
            className="btn-login"
          >
            {isFetching?<div class="spinner-border" role="status"></div>:"Iniciar sesion"}
          </button>
          <small className="o">ó</small>
          <button onClick={(e)=>{goToRegister(e)}} className="register-to">Crear una nueva cuenta</button>
        </form>
      </div>:null}
    </div>
  );
};

export default SignIn;
