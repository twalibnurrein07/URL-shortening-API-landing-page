import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";
import Image from "./components/Image";


function App() {
  return (
    <><section id="section1">
      <div className="container">
        <Navbar />   
        <Image src="./image/illustration-working.svg" classNaming="illustration" alt="illustration-working.svg" />
        <div className="content">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
          <Button />
        </div>

        <div className="form">
          <form class="row g-2">
            <div class="col-lg-8 sm-12">
              <label for="inputPassword2" class="visually-hidden">Password</label>
              <input type="password" class="form-control" id="inputPassword2" placeholder="Shorten your link here" />
            </div>
            <div class="col-lg-4 sm-12">
             <div class="d-grid ">
             <button class="btn btn-primary" type="button">Shorten it</button>
              </div>
  
            </div>
          </form>

        </div>

      </div>
    </section><section  id="section2">
      <div className="container">
      <div className="statistics">
          <h3>Advanced Statistics</h3>
          <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>
        <div className="reviews">
          <Card />
        </div>
      </div>

      </section>


      <section id="section3">
      <div className="container">
      <div className="start">
        <h4>Boost your links today</h4>
        <Button/>
      </div>

      </div>
      
        
      </section>
      
      <section id="section4">
      <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <h1>Shortly</h1>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4">
              <h6>Features</h6>
              <ul>
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
            
          </ul>
            </div>
            <div className="col-sm-4">
            <h6>Resources</h6>
            <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
            </div>
            <div className="col-sm-4">
            <h6>Company</h6>
            <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-3 fonticons">
          <Image src="./image/icon-facebook.svg" classNaming="facebook svg" alt="icon-facebook"/>
          <Image src="./image/icon-twitter.svg" classNaming="twitter svg " alt="icon-twitter"/>
          <Image src="./image/icon-pinterest.svg" classNaming="pinterest svg " alt="icon-pinterest"/>
          <Image src="./image/icon-instagram.svg" classNaming="instagram svg" alt="icon-instagram"/>
        </div>
      </div>

      </div>
    

      </section></>

      
  )
}

export default App;
