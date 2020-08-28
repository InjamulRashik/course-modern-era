import React, { useState } from "react";
import "./Course.css";
import Product from "../Product/Product";

import { courseData } from "../../fakeData/courseData";
import Cart from "../Cart/Cart";

const Course = () => {
  const first5 = courseData.slice(0, 15);
  const [products, setProducts] = useState(first5);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="course-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            handleAddProduct={handleAddProduct}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Course;
