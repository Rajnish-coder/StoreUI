import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Header from "./Header";
import PageTitle from "./PageTitle";
import Footer from "./footer/Footer";
import errorImage from "../assets/utils/error.png";

export default function ErrorPage() {
  const routeError = useRouteError();
  let errorTitle = "Oops! Something went wrong";
  let errorMessage = "An unexpected error occurred. Please try again later.";
  if (routeError) {
    errorTitle = routeError.status;
    errorMessage = routeError.data;
  }
  return (
    <div className="flex flex-col min-h-[980px]">
      <Header />
      {/* Main Content */}
      <main className="flex-grow">
        <div className="py-3 bg-normalbg dark:bg-darkbg font-primary">
          <div className="max-w-4xl mx-auto px-4">
            <PageTitle title={errorTitle} />
          </div>
          <div className="text-center text-gray-600 dark:text-lighter flex flex-col items-center">
            <p className="max-w-[576px] px-2 mx-auto leading-6 mb-2">
              {errorMessage}
            </p>
            <img
              src={errorImage}
              alt="Error"
              className="w-full max-w-[276px] mx-auto mb-3"
            />
            <Link
              to="/home"
              className="py-2 px-4 text-white dark:text-black text-md rounded-md transition duration-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
