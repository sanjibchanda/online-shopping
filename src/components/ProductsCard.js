import React from "react";

const ProductsCard = (props) => {
  const { prodData } = props;
  const { title, price, category, image, rating } = prodData;

  return (
    <div className="product-card">
      <img src={image} alt="images" className="card-img" />
      <div className="prod-details">
        <h3 className="title">{title}</h3>
        <p className="category">{category}</p>
        <p className="price">${price}</p>
        <div className="review">
          <p>
            <i className="fa-solid fa-star"></i>
            {rating.rate} Stars
          </p>
          <p>{rating.count} Review</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
