import React, { useEffect, useState } from "react";
import './Shop.css';
import ShopProducts from "../components/ShopProducts/ShopProducts";
import Sidebar from "../components/ShopSidebar/Sidebar";
import { useSearchParams } from "react-router-dom";

function Shop() {
  const [shopProduct, setShopProduct] = useState([]);
  const [searchParams,setsearchParams] = useSearchParams();
  console.log(searchParams);

  useEffect(() => {
    const category = searchParams.get("category") || "";
    console.log(category);
    fetch(`${process.env.REACT_APP_PRODUCT_API}/shops?category=${category}`)
    // fetch(process.env.REACT_APP_PRODUCT_API +"/shops?"+searchParams)
      .then((response) => response.json())
      .then((res) => {
        setShopProduct(res.shops);
      });
  }, [searchParams]);
  const category = searchParams.get("category") || "";

  return (
    <div className="container-fluid" id="shop_container">
      <div className="product_header">
        <h6>Total Products : <span>{shopProduct.length}</span></h6>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 row">
          {shopProduct.length>0?(shopProduct.map((product) => (
            <ShopProducts shopProduct={product} key={product.name} />
          ))
        ):
        (
          <div className="col-md-12">
          <h1>No items found in category: {category}</h1>
        </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
