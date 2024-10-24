import React from "react";

const Contactinfo = () => {
  return (
    <section className="md:p-10 md:w-1/2 p-4 pb-10">
      <div className="space-y-6">
        <h3 className="text-sm font-semibold">CONTACT INFO</h3>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-100 text-sm border border-gray-300"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 bg-gray-100 text-sm border border-gray-300"
          />
        </div>
        <h3 className="text-sm font-semibold">SHIPPING ADDRESS</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 bg-gray-100 text-sm border border-gray-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 bg-gray-100 text-sm border border-gray-300"
          />
        </div>
        <select className="w-full p-3 bg-gray-100  text-sm border border-gray-300">
          <option>Country</option>
        </select>
        <input
          type="text"
          placeholder="State / Region"
          className="w-full p-3 bg-gray-100 text-sm border border-gray-300"
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full p-3 bg-gray-100 text-sm border border-gray-300"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="w-full p-3 bg-gray-100 text-sm border border-gray-300"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="w-full p-3 bg-gray-100 text-sm border border-gray-300"
          />
        </div>
        <a href="https://superlative-paletas-430349.netlify.app/">
          <div className="md:grid grid-cols-1 justify-items-end gap-4 hidden">
            <button className="w-1/2 flex justify-between bg-[#D9D9D9] hover:bg-gray-500 py-3 lg:px-5 px-2 items-center font-semibold text-base font-beatrice mt-4">
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
      </div>
    </section>
  );
};

export default Contactinfo;
