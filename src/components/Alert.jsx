import React from "react";
import "../assets/css/Alert.css"

function Alert({error, color}) {


    return(

    <div className="error" style={{backgroundColor: color}} >
        <p className="text-center">{error}</p>
    </div>
    )
    
}

export default Alert;