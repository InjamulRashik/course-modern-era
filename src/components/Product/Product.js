import React from "react";
import "../Product/Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  return (
    <div className="product">
      <div className="img-div">
        <img src={props.product.image} alt="" />
      </div>
      <div className="product-info">
        <h5 className="product-name">{props.product.name}</h5>
        <br />
        <p>
          <small>By : {props.product.instructor}</small>
        </p>
        <br />
        <p>
          <b>Price : ${props.product.price}</b>
        </p>
        <br />
        <br />
        <button
          className="add-button"
          onClick={() => {
            props.handleAddProduct(props.product);
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faBook} />
          Enroll Now!
        </button>
      </div>
    </div>
  );
};

export default Product;
