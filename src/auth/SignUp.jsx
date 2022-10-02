import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { NavLink, useNavigate } from "react-router-dom";
import {register} from "../redux/apiCalls/authApiCalls"
import "../styles/signup.css";
import { useSelector, useDispatch } from "react-redux";

const SignUp = () => {
  const { errors, currentUser, isFetchingRegister, registrado} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false)
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPasword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const back = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const user = { name: name.trim(), last: lastName.trim(),tel:tel, email: email.trim(), password: password.trim() };
  const conditionNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const emailsValidos = ["gmail", "hotmail", "yahoo", "outlook"];
  const conditionsText = [
    "   ",
    ".",
    "<",
    ">",
    ",",
    "*",
    "¨",
    ":",
    ";",
    "!",
    "#",
    "$",
    "%",
    "&",
    "~",
    "´",
    "?",
    "¡",
    "¿",
    "/",
    "(",
    ")",
    "=",
    "'",
    '"',
    "{",
    "}",
    "[",
    "]",
    "^",
    "°",
    "|",
    "¬",
    "-",
    "+",
  ];

  // Funciones

  const change = (e) => {
    e.preventDefault();
    setOpenOne(!openOne);
  };
  const changetwo = (e) => {
    e.preventDefault();
    setOpenTwo(!openTwo);
  };
  const registro = (e) => {
    e.preventDefault();
    if (
      name.length > 0 &&
      name.length <= 25 &&
      !conditionsText.some((c) => name.includes(c)) &&
      !conditionNumber.some((c) => name.includes(c)) &&
      lastName.length > 0 &&
      lastName.length <= 25 &&
      !conditionsText.some((c) => lastName.includes(c)) &&
      !conditionNumber.some((c) => lastName.includes(c)) &&
      email.length > 2 &&
      email.includes("@")&&
      emailsValidos.some((c) => email.includes(c))&&
      password.length>=8&&
      password.length<=99&&
      confirmPassword===password
    ) {
      register(dispatch, user);
      setError(false)
    } else {
      setError(true)
    }
  };
  useEffect(() => {
    if(registrado){
      navigate("/")
    }
  }, [isFetchingRegister])
  
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);
  return (

    <div id="signup" className="global">
      {!currentUser?<>
      <div id="register-content">
        <div className="top-info-register">
          <NavLink className="back-top" to="/">
            <i id="arrow-back" className="bi bi-arrow-left" />
          </NavLink>
          <h6 className="info-top"><strong>Nuevo Usuario</strong> <small className="err">{error?"Ups! Debes completar los campos correctamente":""}</small></h6>
        </div>

        <form id="register-form" autoComplete="off">
          <div className="content-input">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              autoCapitalize
              type="text"
              className={
                name.length > 25 ||error||
                conditionsText.some((c) => name.includes(c)) ||
                conditionNumber.some((c) => name.includes(c))
                  ? "error-input form-control-reciclaje"
                  : "form-control-reciclaje"
              }
              placeholder="Nombre"
            />
            <small>
              {name.length > 25
                ? "Maximo 25 carcateres"
                : name.length < 1
                ? "Este campo es obligatorio"
                : conditionsText.some((c) => name.includes(c))
                ? "No se permiten caracteres no validos"
                : conditionNumber.some((c) => name.includes(c))
                ? "No se permiten numeros"
                : ""}
            </small>
          </div>

          <div className="content-input">
            <input
            autoCapitalize
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              className={
                lastName.length > 25 ||error||
                conditionsText.some((c) => lastName.includes(c)) ||
                conditionNumber.some((c) => lastName.includes(c))
                  ? "error-input form-control-reciclaje"
                  : "form-control-reciclaje"
              }
              placeholder="Apellido"
            />
            <small>
              {lastName.length > 25
                ? "Maximo 25 carcateres"
                : lastName.length < 1
                ? "Este campo es obligatorio"
                : conditionsText.some((c) => lastName.includes(c))
                ? "No se permiten caracteres no validos"
                : conditionNumber.some((c) => lastName.includes(c))
                ? "No se permiten numeros"
                : ""}
            </small>
          </div>

          <div className="content-input">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className={
                email.includes(" ")||error
                  ? "error-input form-control-reciclaje"
                  : "form-control-reciclaje"
              }
              placeholder="Correo electronico"
            />
            <small>
              {email.includes(" ")
                ? "No se permiten espacios"
                :errors?"Este correo ya esta registrado": email.includes("@") &&
                  !emailsValidos.some((c) => email.includes(c))
                ? "Debe contener: gmail - hotmail - outlook o yahoo"
                : email.length < 1
                ? "Este campo es obligatorio"
                : !email.includes("@") && email.length > 2
                ? "El correo debe contener @"
                : ""}
            </small>
          </div>

          <div className="content-input">
            <PhoneInput
              addInternationalOption={false}
              defaultCountry="CO"
              placeholder="Numero (opcional)"
              value={tel}
              onChange={setTel}
              className="form-control-reciclaje"
            />
          </div>

          <div className="add-button-password">
            <div id="ecept" className="content-input">
              <input
                value={password}
                onChange={(e) => {
                  setPasword(e.target.value);
                }}
                type={openOne ? "text" : "password"}
                className={
                  password.length > 99 ||error||
                  (password.length > 2 && password.length < 8)
                    ? "error-input form-control-reciclaje"
                    : "form-control-reciclaje"
                }
                placeholder="Contraseña"
              />
              <small>
                {password.length > 99
                  ? "La contraseña es demasiada larga"
                  : password.length < 1
                  ? "Este campo es obligatorio"
                  : password.length > 2 && password.length < 8
                  ? "La contraseña debe contener al menos 8 carcateres"
                  : ""}
              </small>
            </div>
            <button
              onClick={(e) => {
                change(e);
              }}
              className="add-button"
            >
              {openOne ? (
                <i className="bi size-icon-pass bi-eye-slash" />
              ) : (
                <i className="bi size-icon-pass bi-eye" />
              )}
            </button>
          </div>

          <div className="add-button-password">
            <div id="ecept" className="content-input">
              <input
                value={confirmPassword}
                onChange={(e) => {
                  e.preventDefault();
                  setConfirmPassword(e.target.value);
                }}
                type={openTwo ? "text" : "password"}
                className={
                  confirmPassword.length > 99 ||error||
                  (confirmPassword.length > 1 && confirmPassword !== password)
                    ? "error-input form-control-reciclaje"
                    : "form-control-reciclaje"
                }
                placeholder="confirmar contraseña"
              />
              <small>
                {confirmPassword.length > 99
                  ? "La contraseña es demasiada larga"
                  : confirmPassword.length < 1
                  ? "Este campo es obligatorio"
                  : confirmPassword.length > 1 && confirmPassword !== password
                  ? "Las contraseñas no coinciden"
                  : ""}
              </small>
            </div>
            <button
              onClick={(e) => {
                changetwo(e);
              }}
              className="add-button"
            >
              {openTwo ? (
                <i className="bi size-icon-pass bi-eye-slash" />
              ) : (
                <i className="bi size-icon-pass bi-eye" />
              )}
            </button>
          </div>
        </form>
        <div className="but-final-page">
          <button
            onClick={(e) => {
              back(e);
            }}
            id="enviar-register"
          >
            Cancelar
          </button>
          <button
            disabled={isFetchingRegister ? "true" : ""}
            onClick={(e) => {
              registro(e);
            }}
            type="submit"
            id="enviar-register"
          >
            {isFetchingRegister ? (
              <div class="spinner-border" role="status"></div>
            ) : (
              "Registrarme"
            )}
          </button>
        </div>
      </div>
      </>:null}
    </div>
    
  );
};

export default SignUp;
