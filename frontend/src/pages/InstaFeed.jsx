import React from "react";
import "../pages/InstaFeed.css";
import insta1 from "../assets/instagram/instagram-1.jpg";
import insta2 from "../assets/instagram/instagram-2.jpg";
import insta3 from "../assets/instagram/instagram-3.jpg";
import insta4 from "../assets/instagram/instagram-4.jpg";
import insta5 from "../assets/instagram/instagram-5.jpg";
import insta6 from "../assets/instagram/instagram-6.jpg";

function InstaFeed() {
  const instagramimages = [insta1, insta2, insta3, insta4, insta5, insta6];
  return (
    <div className="container" id="instagram">
      
      <div className="row">
        <div className="col-md-8 col-12">
          <div className="instagram-pics">
            {instagramimages.map((item, index) => {
              return (
                <div className="insta-pic" style={{ backgroundImage: `url(${item})` }} key={index} >
                
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-4">
            <div className="insta_text">
                <h2>Instagram</h2>
                <p>Step into a world where fashion meets elegance.Discover your new favorite outfit today and embrace the unique you. Happy shopping! </p>
                <h4><a href="">#Bekuff</a></h4>
            </div>
          

        </div>

      </div>
    </div>
  );
}

export default InstaFeed;
