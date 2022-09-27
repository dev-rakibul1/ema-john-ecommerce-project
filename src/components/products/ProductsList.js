import React, { useEffect, useState } from "react";
import { addToDb, getStoredData } from "../../utilities/fakedb";
import Card from "./card/Card";
import Summary from "./summary/Summary";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);

  // data load from API
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // local storage data get as object
  useEffect(() => {
    const storedCard = getStoredData();
    const saveCard = [];
    for (let id in storedCard) {
      const getId = products.find((product) => product.id === id);

      if (getId) {
        const quantity = storedCard[id];
        getId.quantity = quantity;
        saveCard.push(getId);
        // console.log(quantity);
      }
    }
    setCard(saveCard);
  }, [products]);

  // console.log(products);
  // console.log(card);

  // add to button handler
  const addToProductsCounter = (selectedProducts) => {
    // console.log(selectedProducts);
    let newCard = [];
    const exists = products.find(
      (product) => product.id === selectedProducts.id
    );
    if (!exists) {
      selectedProducts.quantity = 1;
      newCard = [...card, selectedProducts];
    } else {
      const rest = products.filter(
        (product) => product.id !== selectedProducts.id
      );
      exists.quantity = exists.quantity + 1;
      newCard = [...rest, exists];
    }

    setCard(newCard);
    addToDb(selectedProducts.id);
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
