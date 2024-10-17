import React, { useEffect, useState } from "react";
import ProductsCard from "../components/Products/ProductsCard";
import "../pages/Home.css";
import Slider from "./Slider";
import Search from "../components/Search/Search";
import Collection from "./Collection";
import InstaFeed from "./InstaFeed";
import { useSearchParams } from "react-router-dom";
// import Modal from "../components/Modal/Modal"; 
// import Signup from "../pages/Signup"

function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCT_API + "/products?" + searchParams)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProducts(res.products);
        console.log(res.products);
      });
  }, [searchParams]);



  return (
    <div>
      <Slider />

      <div className="container-fluid">
        <Search />
      </div>

      <section id="products" className="container-fluid mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductsCard Cardproduct={product} key={product.name} />
          ))}
        </div>
      </section>
      <Collection />
      <InstaFeed />
      
   
    </div>
  );
}

export default Home;
