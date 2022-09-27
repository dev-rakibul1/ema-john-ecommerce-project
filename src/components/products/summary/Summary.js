import React from "react";

const Summary = (props) => {
  const len = props.card.length;
  const price = props.card;

  // product quantity
  let quantity = 0;
  let totalPrice = 0;
  // let shipping = 0;
  for (let product of price) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    // shipping = shipping + product.shipping;
  }

  // Shipping charge
  let shipping = 0;
  if (totalPrice === 0) {
    shipping = 0;
  } else if (totalPrice > 1000 && totalPrice < 2000) {
    shipping = 100;
  } else if (totalPrice > 2000 && totalPrice < 5000) {
    shipping = 200;
  } else if (totalPrice > 5000) {
    shipping = 500;
  } else {
    shipping = 10;
  }

  // tex amount
  // grandWithTax = TOTAL * ((100 + TAX PERCENTAGE) / 100);
  const tax = (totalPrice / 100) * 1.2;
  const totalTax = parseFloat(tax.toFixed(2));
  // console.log(typeof totalTax);

  // Grand Total
  const grandTotal = [totalPrice, totalTax, shipping];
  const grandTotalPrice = grandTotal.reduce(
    (prev, current) => prev + current,
    0
  );

  return (
    <div className="sticky top-0 p-2">
      <h4 className="text-center font-semibold text-xl mt-2 mb-5">
        Order Summary
      </h4>
      <p className="leading-8 flex justify-between">
        <strong>Selected Items:</strong> <span>{quantity}</span>
      </p>
      <p className="leading-8 flex justify-between">
        <strong>Total price: </strong> <span>$ {totalPrice}</span>
      </p>
      <p className="leading-8 flex justify-between">
        <strong>Shipping Charge: </strong> <span>$ {shipping}</span>
      </p>
      <p className="leading-8 flex justify-between">
        <strong>Tax: </strong> <span>$ {totalTax}</span>
      </p>
      <p className="leading-8 flex justify-between">
        <strong>Grand Total: </strong> <span></span>${" "}
        {grandTotalPrice.toFixed(2)}
      </p>

      <button className="bg-sky-900 w-full py-2 px-4 mt-5 rounded text-white">
        Order confirm
      </button>
    </div>
  );
};

export default Summary;
