import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styles/select-material.css";

const SelectMaterial = () => {
  const {value, price} = useParams();
  
  const material = [
    {
      material: "Papel",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664755795/papelera_cp9xvi.png",
      vk:1500,
      vks:"$ 1.500"
    },
    {
      material: "Plastico",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664755799/el-plastico_o5dvta.png",
      vk:3000,
      vks:"$ 3.000"
    },
    {
      material: "Aluminio",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664755799/metal_ygv3dk.png",
      vk:5000,
      vks:"$ 5.000"
    },
    {
      material: "Vidrio",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664755799/contenedor-de-vidrio_vazhjg.png",
      vk:1800,
      vks:"$ 1.800"
    },
    {
      material: "Electrodomesticos",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664755794/residuos-electronicos_qu2etq.png",
      vk:8000,
      vks:"$ 8.000"
    },
    {
      material: "Otros",
      src: "https://res.cloudinary.com/dlitdzj3a/image/upload/v1664756319/organico_fbs31f.png",
      vk:100,
      vks:"$100"
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
              to={`/search/value/${value}/mate/${i.material}/price/${price}/vk/${i.vk}/vks/${i.vks}`}
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
