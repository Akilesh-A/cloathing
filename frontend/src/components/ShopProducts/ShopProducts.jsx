import React from 'react';
import '../ShopProducts/ShopProducts.css'
import { Link } from 'react-router-dom';

function ShopProducts({shopProduct}) {
  return (
   
      <div   className="col-md-4 my-3">
      <div className="card cards_container ">
        <a href="">
          <img
            className="card-img-top mx-auto"
            src={shopProduct.images[0].image}
          />
        </a>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={'/shop/'+shopProduct._id}>{shopProduct.name}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div className="rating-inner"style={{width:`${shopProduct.ratings/5 *100}%`}}></div>
            </div>
          </div>
          <p className="card-text">
            <i class="fa fa-inr" aria-hidden="true"></i>
               {shopProduct.price}
          </p>
          <Link  to={'/shop/'+shopProduct._id} id="view_btn" className="btn btn-block">
            View Details
          </Link>
         
        </div>
      </div>
     
    </div>
      
    
  )
}

export default ShopProducts
