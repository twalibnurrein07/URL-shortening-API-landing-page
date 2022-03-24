import React from "react";
import ImageWithDiv from "./ImageWithDiv";

function Card(){
    return(
        <div class="row cards">
  <div class="col-sm-4 lg-12">
    <div class="card brand">
      <div class="card-body ">
      <ImageWithDiv src="./image/icon-brand-recognition.svg" className="branding icon" classNaming="brand1 pic" alt="icon-brand-recognition"/>
        <h5 class="card-title">Brand Recognition</h5>
        <p class="card-text">Boost your brand recognition with each click.Generic links don't 
        mean a thing.Branded links helps help instil confidence in your content</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4 lg-12">
    <div class="card records">
      <div class="card-body ">
      <ImageWithDiv src="./image/icon-detailed-records.svg" className="detailed-records icon" classNaming="records1 pic" alt="icon-detailed-records"/>
        <h5 class="card-title">Detailed Records</h5>
        <p class="card-text">Gain insights into who is clicking your links.Knowing when and where people
        engage with your content helps inform better decisons</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 lg-12">
    <div class="card customize">
      <div class="card-body ">
      <ImageWithDiv src="./image/icon-fully-customizable.svg" className="fully-customizable icon" classNaming="customizable1 pic" alt="icon-fully-customizable"/>
        <h5 class="card-title">Fully Customizable</h5>
        <p class="card-text">Improve brand awareness and content discoverability through customizable 
        links,supercharging audience engagement</p>
        
      </div>
    </div>
  </div>
  <hr></hr>
</div>
    )
}

export default Card;