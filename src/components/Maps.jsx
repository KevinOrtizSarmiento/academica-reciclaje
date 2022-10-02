import React, {useState, useEffect} from 'react'
import {Auth, Signer, Amplify} from "aws-amplify"
import ReactMapGL, {NavigationControl, MapRequest, ViewportProps} from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import Location from "aws-sdk/clients/location"
import "../styles/maps.css"
import awsconfig from "../aws-exports"

Amplify.configure(awsconfig);
const mapName = "myRecicleApp"

const transformRequest = (credentials) => (url, resourceType) => {
    console.log(credentials);
    console.log(url);
    console.log(resourceType);
    if (resourceType==="Style" && !url?.includes("://")){
        url = `https://maps.geo.${awsconfig.aws_project_region}.amazonaws.com/maps/v0/maps/${url}/style-descriptor`;
    }
    if(url?.includes("amazonaws.com")){
        return {
            url: Signer.signUrl(url, {
                access_key: credentials.accessKeyId,
                secret_key: credentials.secretAccessKey,
                session_token: credentials.sessionToken,
            }),
        };
    }
    return {url:url || ""}
};
    

const Maps = () => {
    const [credentials, setCredentials] = useState(null);
    const [viewport, setViewport] = useState({
        longitude: -75.6860895,
        latitude: 4.8096432,
        zoom:15
    })
    const [client, setClient] = useState(null);

    useEffect(() => {
        const fetchCredentials = async () => {
            setCredentials(await Auth.currentCredentials());
        }
        fetchCredentials();
    }, []);
    
  return (
    <div className="global">
    <div className='maps'>
        {credentials?
        <ReactMapGL
        {...viewport}
        width="50%"
        height="500px"
        style={{margin:"auto"}}
        transformRequest={transformRequest(credentials)}
        mapStyle={mapName}
        onViewportChange={e=>{setViewport(e)}}
        >
            <div style={{position:"absolute", left:20, top:20}}>
                <NavigationControl showCompass={false} />
            </div>

        </ReactMapGL>

            
        :<h3>Cargando...</h3>}
    </div>
    </div>
  )
}

export default Maps