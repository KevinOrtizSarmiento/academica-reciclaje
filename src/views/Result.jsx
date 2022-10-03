import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "../styles/result.css";

const REACT_APP_HOST = process.env.REACT_APP_HOST;

const Result = () => {
  const { value, material, vk, vks, price } = useParams();
  const [data, setData] = useState();
  const getInfo = async () => {
    await axios
      .get(REACT_APP_HOST + "/material/materials/getMaterial/" + material)
      .then((res) => {
        setData({ src: res.data.src, description: res.data.description });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    currency: "COP",
    minimumFractionDigits: 1,
  });

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="global">
      <div className="result-material">
        <div className="img-and-info">
          {data ? (
            <img
              src={data ? data.src : ""}
              className="img-material-result"
              alt={material}
            />
          ) : (
            <div className="img-for-load"></div>
          )}
          <div className="info-about-material">
            <h3 className="info-info-result">Valor de {material} por Kilo:</h3>
            <h3 id="thes" className=" info-info-result">{vks}</h3>
            <h3 className="info-info-result">Ncesitas <h3 id="thes" className="info-info-result">{formatterPeso.format(
                        parseInt(parseInt(value) / vk).toFixed(2)
                      )} Kg</h3> de {material} para obtener</h3>
                      <h3 id="thes" className="info-info-result">{price}</h3>
          </div>
        </div>
        <div className="des-material-result">
          <h1 className="text-result-material">{material}</h1>
          <h6 className="description-material-result">
            {data ? data.description : "Cargando..."}
          </h6>
          {material === "Otros" ? (
            <button className="generate-plan">
              <i class="bi bi-exclamation-circle cmo" />
              Mas Informacion...
            </button>
          ) : (
            <NavLink to="/places/near" id="near-places" className="generate-plan">
              <i class="bi bi-recycle cmo" />
              Comenzar a Reciclar
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
