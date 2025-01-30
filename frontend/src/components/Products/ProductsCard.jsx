import React from "react";
import "../Products/ProductCard.css";
import { Link } from 'react-router-dom';

function ProductsCard({ Cardproduct }) {
  if (!Cardproduct || !Cardproduct.images || Cardproduct.images.length === 0) {
    return null; // Or return a fallback UI if necessary
  }

  return (
    <div className="col-md-3 my-3">
      <div className="card cards_container ">
        <a href="">
          <img
            className="card-img-top mx-auto"
            src={Cardproduct.images[0].image}  // Now we can safely access images[0].image
            alt={Cardproduct.name || "Product Image"}  // Add alt text for accessibility
          />
        </a>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={'/product/' + Cardproduct._id}>{Cardproduct.name}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div className="rating-inner" style={{ width: `${(Cardproduct.ratings / 5) * 100}%` }}></div>
            </div>
          </div>
          <p className="card-text">
            <i className="fa fa-inr" aria-hidden="true"></i>
            {Cardproduct.price}
          </p>
          <Link to={'/product/' + Cardproduct._id} id="view_btn" className="btn btn-block">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
