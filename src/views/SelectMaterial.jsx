import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styles/select-material.css";

const SelectMaterial = () => {
  const {value} = useParams();
  const material = [
    {
      material: "Papel",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664755795/papelera_cp9xvi.png",
    },
    {
      material: "Plastico",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664755799/el-plastico_o5dvta.png",
    },
    {
      material: "Aluminio",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664755799/metal_ygv3dk.png",
    },
    {
      material: "Vidiro",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664755799/contenedor-de-vidrio_vazhjg.png",
    },
    {
      material: "Electrodomesticos",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664755794/residuos-electronicos_qu2etq.png",
    },
    {
      material: "Otros",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664756319/organico_fbs31f.png",
    }
  ];
  return (
    <div className="global" id="select-mate">
      <div id="select-material">
        <h4 className="info-top-select">Seleccione el material que desea reciclar</h4>
        <div className="content-slect">
        {material.map((i) => {
          return (
            <NavLink
              className="nav-reciclaje"
              key={i.material}
              to={`/search/value/${value}/mate/${i.material}`}
            >
              <img className="img-reci" src={i.src} alt={i.src} />
              <small className="info-material">{i.material}</small>
            </NavLink>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default SelectMaterial;
