import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  faArrowLeft,
  faShoppingCart,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../store/cart-context";

export default function ProductDetail() {
  const location = useLocation();
  const product = location.state?.product;
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleViewCart = () => navigate("/cart");
  const { addToCart } = useCart();

  return (
    <div className="min-h-[500px] flex items-center justify-center px-3 py-2 font-primary bg-normalbg dark:bg-darkbg">
      <div className="max-w-2xl w-full mx-auto flex flex-col md:flex-row md:space-x-4 px-3 p-2">
        {/* Product Image with Zoom Effect */}
        <div
          className="w-full md:w-1/2 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg overflow-hidden bg-cover"
          style={{
            backgroundImage: `url(${product.imageUrl})`,
          }}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full opacity-0"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col space-y-3 mt-4 md:mt-0">
          <Link
            to="/home"
            className="inline-flex items-center text-primary dark:text-light font-medium hover:text-dark dark:hover:text-lighter"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back To All Products
          </Link>

          <div>
            <h1 className="text-xl font-extrabold text-primary dark:text-light mb-2">
              {product.name}
            </h1>
            <p className="text-md text-dark dark:text-lighter mb-2">
              {product.description}
            </p>
            <div className="text-xl font-bold text-primary dark:text-light">
              ${product.price}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {/* Quantity Input */}
            <div className="flex items-center space-x-2">
              <label
                htmlFor="quantity"
                className="text-primary dark:text-light"
              >
                Qty:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-16 px-2 py-1 border rounded-md focus:ring focus:ring-light dark:focus:ring-gray-600 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product, quantity)}
              className="w-full px-2 py-1 bg-primary dark:bg-light text-white dark:text-black
               rounded-md text-md font-semibold hover:bg-dark dark:hover:bg-lighter transition hover:cursor-pointer"
            >
              Add to Cart
              <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
            </button>

            {/* View Cart Button */}
            <button
              onClick={handleViewCart}
              className="w-full px-2 py-1 bg-primary dark:bg-light text-white dark:text-black
               rounded-md text-md font-semibold hover:bg-dark dark:hover:bg-lighter transition hover:cursor-pointer"
            >
              View Cart
              <FontAwesomeIcon icon={faShoppingBasket} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
