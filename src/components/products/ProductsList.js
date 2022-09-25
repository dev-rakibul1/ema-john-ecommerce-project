import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import Summary from "./summary/Summary";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // add to button handler
  const addToProductsCounter = (prod) => {
    const newCard = [...card, prod];
    setCard(newCard);
  };

  return (
    <div className=" md:flex w-[90%] mx-auto gap-5 mt-14">
      <div className=" md:w-[80%] shrink-[9] grid sm:grid-cols-1 md:grid-cols-3 lg:gird-cols-3 gap-4 xl:gird-cols-4 border rounded-xl  p-5">
        {products.map((product) => (
          <Card
            product={product}
            key={product.id}
            addToProductsCounter={addToProductsCounter}
          ></Card>
        ))}
      </div>
      <div className="shrink-[3] md:w-[20%]  border rounded-xl ">
        <Summary card={card}></Summary>
      </div>
    </div>
  );
};

export default ProductsList;
