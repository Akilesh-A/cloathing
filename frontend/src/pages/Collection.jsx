import React from "react";
import "../pages/Collection.css";
import imagee1 from "../assets/collections/collection-1.jpg";
import imagee2 from "../assets/collections/collection-2.jpg";
import imagee3 from "../assets/collections/collection-3.jpg";

function Collection() {
  const collectionArr = [
    {
      title: "Summer Collection",
      text: "starting at 108",
      images: imagee1,
      btn: "Shop Now",
    },
    {
      title: "What’s New?",
      text: "Get the glow",
      images: imagee2,
      btn: "Discover Now",
    },
    {
      title: "Buy 1 Get 1",
      text: "Starting at $7.99",
      images: imagee3,
      btn: "Discover Now",
    },
  ];

  return (
    <div className="collection">
      <div className="container-fluid" id="collection">
        <ul className="collection-list row">
          {collectionArr.map((item, index) => {
            return (
              <li key={index} className="col-md-4 col-12">
                <div className="collection-card"  style={{ backgroundImage: `url(${item.images})` }}>
                  <h2 className="card-title">{item.title}</h2>
                  <p className="card-text">{item.text}</p>
                  <a href="#" className="btn-link">
                    <span className="span">{item.btn}</span>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Collection;
