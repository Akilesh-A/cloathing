import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './ShopDetails.css';

function ShopDetails({cartItems,setCartItems}) {
  const [product, setProduct] = useState(null);
  const [qty,setqty]=useState(1)
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCT_API+'/shop/'+id)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result.shop);
        console.log(result.shop);
      });
  }, [id]);
  const increaseQuantity=()=>{
   if(product.stock==qty){
    return
   }
   setqty((prestate)=>prestate+1)

  }
  const decreaseQuantity=()=>{
    if(qty<=1){
      return
    }
    setqty((prestate)=>prestate-1)

  }
  const addTocart=()=>{
    // let item={product,qty};
    // console.log(item);
  console.log(cartItems);

  const ifExist=cartItems.find((item)=>item.product._id===product._id);
  if(!ifExist){
    let newItem={product,qty}
    setCartItems([...cartItems,newItem])
  }
  
    
  }

  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  return (
   product&& <div className="container container-fluid">
      <div className="row whole_product">
        <div
          className="col-md-5 col-12 img-fluid animate__animated animate__bounceInLeft"
          id="product_image"
        >
          <img src={product.images[0].image} alt="Product" />
        </div>

        <div className="col-md-7 col-12 mt-5 animate__animated animate__bounceInRight">
          <h3>{product.name}</h3>
          <p id="product_id">
            Product ID: <br /> {product._id}
          </p>

          <hr />

          <div className="rating-outer">
            <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
          </div>

          <hr />

          <p id="product_price">
            <i className="fa fa-inr" aria-hidden="true"></i> {product.price}
          </p>
          <div className="stockCounter">
            <span className="btn btn-danger minus" onClick={decreaseQuantity}>-</span>
            <input
              type="number"
              className="form-control count"
              value={qty}
              readOnly
            />
            <span className="btn btn-primary plus" onClick={increaseQuantity}>+</span>
          </div>
          <button
            type="button" id="cart_btn" className="btn btn-secondary cartButton" onClick={addTocart}>
            Add to Cart
          </button>

          <hr />

          <div className="statusCheck">
            <p className="statusCheck">Status: </p>
            <span
              id="stock_status"
              className={product.stock > 0 ? "text-success" : "text-danger"}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <hr />

          <h4 className="mt-2">Description:</h4>
          <p>{product.description}</p>

          <hr />

          <p id="product_seller" className="mb-3">
            Sold by: <strong>{product.seller}</strong>
          </p>

          <div className="rating w-50">
            {/* This is where your rating component or rating display logic could go */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetails;
