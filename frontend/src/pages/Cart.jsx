import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Cart.css";
import { toast } from "react-toastify";

function Cart({ cartItems, setCartItems }) {
  const [complete,setcomplete]=useState(false)
  const deleteCartItem = (singleDataId) => {
    // Use setcartItems to update cartItems by filtering out the item with the matching singleDataId
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cItem) => cItem.product._id !== singleDataId)
    );
    toast.success("Item removed from cart");
  };

  const increaseQuantity = (item) => {
    if (item.qty < item.product.stock) {
      const updatedCart = cartItems.map((i)=>{
        if(i.product._id==item.product._id){
          i.qty++
        }
        return i
      })
      setCartItems(updatedCart);
    } else {
      toast.error("No stock  for this item");
    }
  };

  const decreaseQuantity = (item) => {
    if (item.qty > 1) {
      const updatedCart = cartItems.map((i)=>{
        if(i.product._id==item.product._id){
          i.qty--
        }
        return i
      })
      setCartItems(updatedCart);
    }
  };
console.log(JSON.stringify(cartItems));
  const addtocart = async () => {
    console.log('Place Order clicked');
    try {
      const response = await fetch(process.env.REACT_APP_PRODUCT_API + "/orders", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems)
      });
      
      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      // Clear cart items after successful order placement
      setCartItems([]);
      setcomplete(true)
      toast.success('Order placed successfully');
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order');
    }
  };

  console.log(cartItems);

  return (
    cartItems.length > 0 ?
      <Fragment>
        <div className="container cartContainer">
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} Item</b>
          </h2>
  
          <div className="row">
            <div className="col-12 col-md-8">
              {cartItems.map((item) => (
                <Fragment key={item.product._id}>
                  <div className="cart-item cartContent">
                    <div className="row">
                      <div className="col-4 col-md-3 cartImages">
                        <img
                          src={item.product.images[0].image}
                          alt={item.product.name}
                        />
                      </div>
  
                      <div className="col-5 col-md-3 cartLinks">
                        <Link to={"/product/" + item.product._id}>
                          {item.product.name}
                        </Link>
                      </div>
  
                      <div className="col-4 col-md-2 mt-4 mt-lg-0 cartPrice">
                        <p id="card_item_price"><i className="fa fa-inr" aria-hidden="true"></i>{item.product.price}</p>
                      </div>
  
                      <div className="col-4 col-lg-3 mt-4 mt-lg-0 cartInput">
                        <div className="stockCounter ">
                          <span
                            className="btn btn-danger minus"
                            onClick={() => decreaseQuantity(item)}
                          >
                            -
                          </span>
                          <input
                            type="number"
                            className="form-control count"
                            value={item.qty}
                            readOnly
                          />
                          <span
                            className="btn btn-primary plus"
                            onClick={() => increaseQuantity(item)}
                          >
                            +
                          </span>
                        </div>
                      </div>
  
                      <div className="col-4 col-lg-1 mt-4 mt-lg-0 cartDelete">
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                          onClick={() => deleteCartItem(item.product._id)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
  
            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
  
                <p>
                  Subtotal:{" "}
                  <span className="order-summary-values">{cartItems.reduce((acc, item) => (acc + item.qty), 0)} (Units)</span>
                </p>
                <p>
                  Est. total:{" "}
                  <span className="order-summary-values"><i className="fa fa-inr" aria-hidden="true"></i>{cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)}</span>
                </p>
  
                <button id="checkout_btn" className="btn btn-primary btn-block" onClick={addtocart}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      :
      (
        !complete ? (
          <div>
            <h1>Cart is empty</h1>
            <p>Add products to your cart</p>
          </div>
        ) : (
          <div>
            <h1>Order placed successfully</h1>
            <p>Thank you for your patience</p>
          </div>
        )
      )
  )}
  

export default Cart;
