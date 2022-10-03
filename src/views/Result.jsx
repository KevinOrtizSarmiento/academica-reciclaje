import axios from "axios";
import React,{ useState, useEffect } from "react";
import { useParams } from "react-router";
import "../styles/result.css";

const REACT_APP_HOST = process.env.REACT_APP_HOST

const Result = () => {
  const { material } = useParams();
  const [data, setData] = useState({src:"Cargando...",description:"Cargando..."});
  const getInfo = async () => {
    await axios.get(REACT_APP_HOST+"/material/materials/getMaterial", {material:material}).then(res=>{
        setData(res.data);
    }).catch(error => {
        console.log(error);
    });
  };

  useEffect(() => {
    getInfo();
  }, [])
  
  return (
    <div className="global">
      <div className="result-material">
        <img
          src={data.src}
          className="img-material-result"
          alt={material}
        />
        <div className="des-material-result">
          <h3 className="text-result-material">{material}</h3>
          <h5 className="description-material-result">{data.description}</h5>
        </div>
      </div>
    </div>
  );
};

export default Result;
