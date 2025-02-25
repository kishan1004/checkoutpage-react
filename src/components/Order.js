import React, { useState } from "react";
import Product1 from "../images/product1.jpeg";
import Product2 from "../images/product2.jpeg";

const Order = () => {
  const [order] = useState([
    {
      name: "Basic Heavy T-Shirt",
      size: "L",
      color: "Black",
      price: 99,
      img: Product1,
      count: 2,
    },
    {
      name: "Basic Fit T-Shirt",
      size: "L",
      color: "Black",
      price: 99,
      img: Product2,
      count: 1,
    },
  ]);

  const subtotal = order.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const totalCount = order.reduce((acc, item) => acc + item.count, 0);

  return (
    <section className="p-4 md:pr-10 lg:mx-20 mt-10 font-beatrice">
      <div className="px-4 py-10 border-2 md:px-6 relative">
        <div className="absolute bg-white text-[#000E8A] top-0 right-0 h-10 w-10 flex items-center justify-center">
          <p>({totalCount})</p>
        </div>
        <h3 className="text-base font-medium">YOUR ORDER</h3>
        <div className="space-y-6 mt-6">
          {order.map((item, index) => (
            <div key={index} className="flex items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-28 h-36 object-cover border-2 mr-4"
              />
              <div className="grid grid-cols-2 md:gap-10 gap-5 place-content-between">
                <div className="flex flex-col">
                  <p className="font-medium text-base xl:w-52">{item.name}</p>
                  <p className="text-xs text-gray-600">
                    {item.color}/{item.size}
                  </p>
                </div>
                <div>
                  <button className="text-sm">
                    <u>Change</u>
                  </button>
                </div>
                <div className="text-[#000E8A]">
                  <p>({item.count})</p>
                </div>
                <div>
                  <p className="font-medium">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-2 mt-6 pt-4">
          <div className="flex justify-between">
            <p className="font-medium">Subtotal</p>
            <p className="font-medium text-base">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-medium">Shipping</p>
            <p className="font-medium text-xs text-[#8A8A8A]">
              Calculated at next step
            </p>
          </div>
          <div className="flex justify-between mt-6 border-t-2 pt-4">
            <p className="text-base font-medium">Total</p>
            <p className="text-base font-medium">${subtotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <a href="https://superlative-paletas-430349.netlify.app/">
        <div className="grid grid-cols-1 justify-items-end gap-4 md:hidden pb-20">
          <button className="w-1/2 flex justify-between bg-[#D9D9D9] hover:bg-gray-600 py-3 lg:px-5 px-2 items-center font-semibold text-base font-beatrice mt-4">
            Shipping
            <svg
              width="50"
              height="14"
              viewBox="0 0 50 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H48.5M48.5 7L42.5 1M48.5 7L42.5 13"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </a>
    </section>
  );
};

export default Order;
