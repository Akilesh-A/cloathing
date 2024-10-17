import React, { useState } from "react";
import "../ShopSidebar/Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const changeCategory = (e) => {
    const newCategory = e.target.innerHTML;
    setCategory(newCategory);
    navigate("/shops?category=" + newCategory);
  };

  return (
    <div className="aside">
      <h2>Categories</h2>
      <div className="shop_categories" onClick={changeCategory}>
        <p>Accessories</p>
        <p>Bags</p>
        <p>Woman</p>
        <p>Men</p>
        <p>Jewelry</p>
      </div>
    </div>
  );
}

export default Sidebar;
