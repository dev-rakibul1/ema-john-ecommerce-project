import React from "react";

const Summary = (props) => {
  const len = props.card.length;
  const price = props.card;

  // Total price
  const totalPrice = price.reduce((prev, current) => prev + current.price, 0);

  // Shipping charge
  let shippingCharge = 0;
  if (totalPrice === 0) {
    shippingCharge = 0;
  } else if (totalPrice > 1000 && totalPrice < 2000) {
    shippingCharge = 100;
  } else if (totalPrice > 2000 && totalPrice < 5000) {
    shippingCharge = 200;
  } else if (totalPrice > 5000) {
    shippingCharge = 500;
  } else {
    shippingCharge = 10;
  }

  // tex amount
  // grandWithTax = TOTAL * ((100 + TAX PERCENTAGE) / 100);

  const tax = (totalPrice / 100) * 1.2;
  const totalTax = parseFloat(tax.toFixed(2));

  // Grand Total
  const grandTotal = [totalPrice, totalTax, shippingCharge];
  const grandTotalPrice = grandTotal.reduce(
    (prev, current) => prev + current,
    0
  );

  return (
    <div className="">
      <h4 className="text-center font-semibold text-xl mt-2 mb-5">
        Order Summary
      </h4>
      <p className="leading-8 flex justify-between">
        <strong>Selected Items:</strong> <span>{len}</span>
      </p>
      <p className="leading-8 flex justify-between">
        <strong>Total price: </strong> <span>$ {totalPrice}</span>
      </p>
      <p className="leading-8 flex justify-between">
        <strong>Shipping Charge: </strong> <span>$ {shippingCharge}</span>
      </p>
      <p className="leading-8 flex justify-between">
        <strong>Tax: </strong> <span>$ {totalTax}</span>
      </p>
      <p className="leading-8 flex justify-between">
        <strong>Grand Total: </strong> <span></span>$ {grandTotalPrice}
      </p>

      <button className="bg-sky-900 w-full py-2 px-4 mt-5 rounded text-white">
        Order confirm
      </button>
    </div>
  );
};

export default Summary;
