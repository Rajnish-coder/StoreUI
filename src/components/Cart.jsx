import React from "react";
import PageTitle from "./PageTitle";
import emptyCartImage from "../assets/utils/emptycart.png";

export default function Cart() {
  return (
    <div className="min-h-[852px] py-6 bg-normalbg dark:bg-darkbg font-primary">
      <div className="max-w-4xl mx-auto px-4">
        <PageTitle title="Your Cart" />
        <div className="text-center text-gray-600 dark:text-lighter flex flex-col items-center">
          <p className="max-w-[576px] px-2 mx-auto text-base mb-4">
            Oops... Your cart is empty. Continue shopping
          </p>
          <img
            src={emptyCartImage}
            alt="Empty Cart"
            className="max-w-[200px] mx-auto mb-3 dark:bg-light dark:rounded-md"
          />
          <button
            onClick={() => {}}
            className="py-1 px-2 bg-primary dark:bg-light text-white dark:text-black text-sm font-semibold rounded-sm flex justify-center items-center hover:bg-dark dark:hover:bg-lighter transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}
