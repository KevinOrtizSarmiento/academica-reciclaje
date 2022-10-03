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
        <h3 className="login-text">Inicie sesion</h3>
        <small className="sesion-text">
          Apoyemos a nuestro planeta
          <img
            src="https://res.cloudinary.com/dlitdzj3a/image/upload/v1664767014/el-planeta-tierra_r3ngua.png"
            className="icon-planet"
            alt="Plantea Tierra"
          />
        </small>
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
