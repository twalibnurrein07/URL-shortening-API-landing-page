import React from "react";
import Image from "./Image";

function ImageWithDiv(prop){
    return(
        <div className={prop.className}>
            <Image src={prop.src} alt={prop.alt} classNaming={prop.classNaming}/>
        </div>
    )
}
export default ImageWithDiv;