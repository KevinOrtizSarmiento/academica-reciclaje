import React from "react";
import { useParams } from "react-router";
import "../styles/consulta.css";
const Consulta = () => {
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const { value, price } = useParams();
  const materiales = [
    {
      material: "Carton",
      preciog: 2,
      preciok: 2000,
      preciot: 2000000,
      pricekf: "$2.000",
    },
    {
      material: "Papel",
      preciog: 0.5,
      preciok: 500,
      preciot: 500000,
      pricekf: "$500",
    },
    {
      material: "Plastico",
      preciog: 1.5,
      preciok: 1500,
      preciot: 1500000,
      pricekf: "$1.500",
    },
    {
      material: "Cobre",
      preciog: 5,
      preciok: 5000,
      preciot: 5000000,
      pricekf: "$5.000",
    },
    {
      material: "Electrodomesticos",
      preciog: 9.5,
      preciok: 9500,
      preciot: 9500000,
      pricekf: "$9.500",
    },
    {
      material: "Aluminio",
      preciog: 6,
      preciok: 6000,
      preciot: 6000000,
      pricekf: "$6.000",
    },
  ];
  const priceFor = [
    { peso: "Gramos" },
    { peso: "Kilogramos" },
    { peso: "Toneladas" },
  ];
  return (
    <div id="consulta" className="global">
      <div id="consulta-result">
        <div className="result-consul">
          <h4 className="info-top-consult">
            <strong>Dinero que esperas conseguir: </strong>
            {price}
          </h4>
          <table id="table-consult" className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Material</th>
                {priceFor.map((i) => {
                  return (
                    <th scope="col" key={i.peso}>
                      {i.peso}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {materiales.map((i) => {
                return (
                  <tr>
                    <th scope="row">{i.material} </th>
                    <td>
                      {formatterPeso.format(
                        parseInt(parseInt(value) / i.preciog)
                      )
                        ? formatterPeso.format(
                            parseInt(parseInt(value) / i.preciog)
                          )
                        : "cargando..."}{" "}
                      G
                    </td>
                    <td>
                      {formatterPeso.format(
                        parseInt(parseInt(value) / i.preciok)
                      )
                        ? formatterPeso.format(
                            parseInt(parseInt(value) / i.preciok)
                          )
                        : "cargando..."}{" "}
                      Kg
                    </td>
                    <td>
                      {formatterPeso.format(
                        parseFloat(parseInt(value) / i.preciot).toFixed(6)
                      )
                        ? formatterPeso.format(
                            parseFloat(parseInt(value) / i.preciot).toFixed(6)
                          )
                        : "cargando..."}{" "}
                      T
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Consulta;