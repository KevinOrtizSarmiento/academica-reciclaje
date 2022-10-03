import React, { useState, useEffect } from "react";
import { Auth, Signer, Amplify } from "aws-amplify";
import ReactMapGL, {
  NavigationControl,
  MapRequest,
  ViewportProps,
  Marker,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Location from "aws-sdk/clients/location";
import "../styles/maps.css";
import awsconfig from "../aws-exports";
import Pin from "./Pin";

Amplify.configure(awsconfig);
const mapName = "myRecicleApp";
const indexName = "reciclyPlace";

const transformRequest = (credentials) => (url, resourceType) => {
  console.log(credentials);
  console.log(url);
  console.log(resourceType);
  if (resourceType === "Style" && !url?.includes("://")) {
    url = `https://maps.geo.${awsconfig.aws_project_region}.amazonaws.com/maps/v0/maps/${url}/style-descriptor`;
  }
  if (url?.includes("amazonaws.com")) {
    return {
      url: Signer.signUrl(url, {
        access_key: credentials.accessKeyId,
        secret_key: credentials.secretAccessKey,
        session_token: credentials.sessionToken,
      }),
    };
  }
  return { url: url || "" };
};

const Maps = () => {
  const [credentials, setCredentials] = useState(null);
  const marks = [
    { longitude: -75.7080308, latitude: 4.8136061, name:"Reciclajes la 35" },
    { longitude: -75.7101731, latitude: 4.8157931, name:"Reciclaje Fernandez" },
    { longitude: -75.7050234, latitude: 4.8076432, name:"Reciclajes de Occidente" },
    { longitude: -75.6889202, latitude: 4.8112023, name:"Reciclajes El Sobrino" },
    { longitude: -75.6878723, latitude: 4.812953, name:"Chatatarreria Arroyave" },
    { longitude: -75.6881608, latitude: 4.8102559, name:"Chatarrería Comercial S.A.S" }
  ];
  const [viewport, setViewport] = useState({
    longitude: -75.6860895,
    latitude: 4.8096432,
    zoom: 13,
  });
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchCredentials = async () => {
      setCredentials(await Auth.currentUserCredentials());
    };
    fetchCredentials();
  }, []);

  return (
    <div className="global">
      <div className="maps">
        <h4 className="info-top-map">Recicladoras mas cercanas</h4>
        {credentials ? (
          <ReactMapGL
            {...viewport}
            className="mapp"
            width="90%"
            height="400px"
            style={{ margin: "auto"}}
            transformRequest={transformRequest(credentials)}
            mapStyle={mapName}
            onViewportChange={(e) => {
              setViewport(e);
            }}
          >
            {marks.map((i) => {
              return (
                <Marker
                  longitude={i.longitude}
                  latitude={i.latitude}
                  offsetTop={-20}
                  offsetLeft={-10}
                >
                  <Pin size={40} />
                  <small className="info-text-map-name">{i.name}</small>
                </Marker>
              );
            })}
            <div style={{ position: "absolute", left: 20, top: 20 }}>
              <NavigationControl showCompass={false} />
            </div>
          </ReactMapGL>
        ) : (
          <div className="maps-load"></div>
        )}
      </div>
    </div>
  );
};

export default Maps;
