import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/product");
      setProducts(response.data);
    } catch (error) {
      throw new Response(
        error.response?.data?.errorMessage ||
          error.message ||
          "Failed to fetch products. Please try again.",
        { status: error.status || 500 }
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Explore Crazy Stickers!">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus
        aut laborum aliquam unde accusantium voluptates ipsam omnis reiciendis,
        impedit corrupti ad, error quibusdam earum neque temporibus repudiandae
        voluptate praesentium.
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}

export default Home;
