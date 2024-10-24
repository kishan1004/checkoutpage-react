import React from "react";

const Header = () => {
  return (
    <section className="md:px-10 px-3">
      <h1 className="font-beatrice font-extrabold text-4xl pb-7">CHECKOUT</h1>
      <div className="flex md:space-x-8 space-x-4">
        <h3 className="font-medium text-base">
          <a href="/">INFORMATION</a>
        </h3>
        <h3 className="font-normal text-base text-[#8A8A8A]">
          <a href="/">SHIPPING</a>
        </h3>
        <h3 className="font-normal text-base text-[#8A8A8A]">
          <a href="/">PAYMENT</a>
        </h3>
      </div>
    </section>
  );
};

export default Header;
