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
  const reset = (e) => {
    e.preventDefault();
    setValor("");
  };
  const conditions = [".", ",", "e", "-", "+"];
  return (
    <div id="home" className="global">
      {currentUser ? (
        <div id="ecological">
          <div id="home-page" className="ecological-var-padding">
            <div id="content-principal">
              <h1 className="title-principal">
                Bienvenido{" "}
                {currentUser ? currentUser.name.split(" ")[0] : "de nuevo"}
              </h1>
              <h5 className="word-content">
                Ecological es una aplicación creada con el propósito de dar
                solución a un gran problema en nuestra sociedad y es la
                desinformación; muchos pereiranos no conocen siquiera como
                deben reciclar después de la Resolución No. 2184 de 2019 expedido por el
                Ministerio del medio ambiente donde replantea completamente la forma
                de separar los residuos. Con esta aplicación buscamos lograr que
                todos los ciudadanos aprendan a reciclar e incentivarlos a
                hacerlo.
              </h5>
              <div className="input-and-question">
                <h5>¿Cuanto dinero necesitas?</h5>
                <div className="question-button">
                  <input
                    autoComplete="false"
                    value={valor}
                    disabled={
                      conditions.some((e) => valor.includes(e)) ? "true" : ""
                    }
                    onChange={(e) => {
                      setValor(e.target.value);
                      if (valor.length > 14) {
                        setValor(valor.slice(0, -1));
                      }
                    }}
                    id="heart"
                    type="number"
                    placeholder="Ingrese unicamente numeros"
                    className="input-home-page"
                  />
                  {!conditions.some((e) => valor.includes(e)) &&
                  valor.length >= 4 &&
                  valor.length <= 15 ? (
                    <NavLink
                      id="buton-con"
                      className="button-consult"
                      to={
                        "/search/value/" +
                        valor +
                        "/price/" +
                        formatterPeso.format(valor)
                      }
                    >
                      Consultar
                    </NavLink>
                  ) : (
                    <button id="i-dont-know" className="button-consult">
                      Consultar
                    </button>
                  )}

                  <button
                    id="reset-buton"
                    onClick={(e) => reset(e)}
                    className="button-consult"
                  >
                    Reiniciar
                  </button>
                </div>
                <h3 id="valor-formateado">
                  {valor && !conditions.some((e) => valor.includes(e))
                    ? formatterPeso.format(valor)
                    : conditions.some((e) => valor.includes(e))
                    ? "Error!!"
                    : "$"}
                </h3>
                {conditions.some((e) => valor.includes(e))
                  ? "No puedes ingresar caracteres no validos"
                  : ""}{" "}
              </div>
            </div>
            {/*<img
            src={url.toString()}
            alt=""
            className="img-principal"
              />*/}
          </div>
          <div className="next-content ecological-var-padding">
            <img
              src="https://res.cloudinary.com/dlitdzj3a/image/upload/v1665618421/istockphoto-1160952367-170667a-removebg-preview_r1ffyy.png"
              alt=""
              className="img-principal"
            />
            <div className="content-text-add">
              <h1 className="text-title">Bolsa Blanca</h1>
              <h5 className="text-content-add">
                En la bolsa blanca se debe depositar los residuos aprovechables
                como plástico, botellas, latas, vidrio, metales, papel y cartón
                para reutilizarlos u reciclarlos y darles otro tipo de uso como
                por ejemplo las botellas de vidrio, se pueden emplear de muchas
                formas, por ejemplo: podemos usarlas de nuevo como botellas o
                convertirlas en jarrones, lámparas, velas, copas de vidrio
                incluso en dispensadores de jabón.
              </h5>
            </div>
          </div>
          <div
            id="next-content-two"
            className="next-content ecological-var-padding"
          >
            <div className="content-text-add">
              <h1 className="text-title">Bolsa Negra</h1>
              <h5 className="text-content-add">
                En la bolsa negra sirve para depositar residuos no aprovechables
                como el papel higiénico, servilletas, papeles y cartones
                contaminados con comida y papeles metalizados para lograr
                reutilizarlos u reciclarlos y darles otro tipo de uso como hacer
                cajas de cartón nuevas y de mejor calidad; también se usan estos
                desechos para hacer papel de impresora y papel común.
              </h5>
            </div>
            <img
              src="https://res.cloudinary.com/dlitdzj3a/image/upload/v1665618592/istockphoto-1152616838-170667a-removebg-preview_azckps.png"
              alt=""
              className="img-principal"
            />
          </div>
          <div className="next-content ecological-var-padding">
            <img
              src="https://res.cloudinary.com/dlitdzj3a/image/upload/v1665619809/verdee_rjfrfc.png"
              alt=""
              className="img-principal"
            />
            <div className="content-text-add">
              <h1 className="text-title">Bolsa Verde</h1>
              <h5 className="text-content-add">
                En la bolsa verde se debe depositar los residuos orgánicos
                aprovechables, como algunos restos de comida y desechos
                agrícolas para poder reutilizarlos y crear otro tipo de desechos
                como por ejemplo el abono que con ayuda de biodigestores es
                posible transformar residuos orgánicos en energía lo que hace
                posible la descomposición de esta materia en ambientes sin
                presencia de oxígeno.
              </h5>
            </div>
          </div>
          <div className="participants-group ecological-var-padding">
            <h1 className="title-group">Equipo de Trabajo</h1>
            <div className="participants">
              <div className="participant">
                <img
                  src="https://res.cloudinary.com/dlitdzj3a/image/upload/v1665614514/user-removebg-preview_en4kbw.png"
                  alt=""
                  className="img-participant"
                />
                <div className="info-participant">
                  <h4 className="name-participant">Kevin Ortiz</h4>
                  <h6>( Programador )</h6>
                  <h6 className="info-description">
                    Soy estudiante de grado once, me apasiona la computacion y
                    quiero ser ingeniero en sistemas
                  </h6>
                </div>
              </div>
              <div className="participant">
                <img
                  src="https://res.cloudinary.com/dlitdzj3a/image/upload/v1665614514/user-removebg-preview_en4kbw.png"
                  alt=""
                  className="img-participant"
                />
                <div className="info-participant">
                  <h4 className="name-participant">Josmar Mejia</h4>
                  <h6>( Diseñadora UI/UX )</h6>
                  <h6 className="info-description">
                    Soy estudiante de grado once, me gusta mucho el ingles y
                    quiero convertirme en una asafata
                  </h6>
                </div>
              </div>
              <div className="participant">
                <img
                  src="https://res.cloudinary.com/dlitdzj3a/image/upload/v1665614514/user-removebg-preview_en4kbw.png"
                  alt=""
                  className="img-participant"
                />
                <div className="info-participant">
                  <h4 className="name-participant">Hugo Franco</h4>
                  <h6>( Diseñador Grafico )</h6>
                  <h6 className="info-description">
                    Soy estudiante de grado once, soy bueno redactando textos y
                    quiero llegar a ser un abogado
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
