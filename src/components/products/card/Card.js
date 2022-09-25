import React from "react";

const Card = (props) => {
  const { name, price, seller, ratings, img, category } = props.product;
  //   console.log(props);

  return (
    <div
      className="card card-compact w-full rounded-xl  bg-base-100 border h-[100%] relative
      "
    >
      <figure>
        <img src={img} className="max-w-full" alt="Shoes" />
      </figure>
      <div className="card-body">
        {/* product information */}
        <article>
          <h2 className="card-title">{name}</h2>
          <p>Category : {category}</p>
          <strong>
            <p>Price: $ {price}</p>
          </strong>
          <p>Manufacturer : {seller}</p>
          <p>Rating: {ratings} stars</p>
        </article>
      </div>
      {/* card btn */}
      <div className="card-actions justify-end mt-10">
        <button
          className="bg-sky-900 py-2 px-4 rounded text-white w-full mt-5 absolute bottom-0 block uppercase"
          onClick={() => props.addToProductsCounter(props.product)}
        >
          add to card
        </button>
      </div>
    </div>
  );
};

export default Card;
