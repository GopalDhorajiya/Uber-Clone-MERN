import GetRide from "./Getride";
import React, { use, useEffect } from 'react';


function Ride() {
    const [finalfromLocation, setfinalfromLocation] = React.useState({ name: "", details: "" });
    const [finaltoLocation, setfinaltoLocation] = React.useState({ name: "", details: "" });

    useEffect(() => {
        console.log("Final Location:", finalfromLocation);
    }, [finalfromLocation]);
    
    useEffect(() => {
        console.log("Final To Location:", finaltoLocation);
    }, [finaltoLocation]);
    return ( 
        <>
            <GetRide 
                setfinalLocation={setfinalfromLocation}/>
            <GetRide 
                setfinalLocation={setfinaltoLocation}/>
        </>
     );
}

export default Ride;