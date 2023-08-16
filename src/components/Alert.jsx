import React from "react";
import "../assets/css/Alert.css"

function Alert({error, color}) {


    return(

    <div className="error" style={{backgroundColor: color}} >
        <p>{error}</p>
    </div>
    )
    
}

export default Alert;