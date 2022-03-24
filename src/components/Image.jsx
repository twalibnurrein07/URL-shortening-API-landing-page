import React from "react";

function Image(props){
    return(
        
        <img src={props.src}  alt={props.alt} className={props.classNaming}/>
        
        
    )
}
export default Image;