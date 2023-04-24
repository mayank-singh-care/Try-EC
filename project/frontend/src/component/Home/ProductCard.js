import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Product = ({ product }) => {
  const options = {
    edit: false,
    activeColor: "rgb(195,62,130)",
    size: 20,
    value:product.rating,
    isHalf:true
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img className="card_img" src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} /> {" "}
         <span>({product.numOfReviews} Reviews)</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default Product;