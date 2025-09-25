import PageHeading from "./PageHeading";
import products from "../data/products";
import ProductListings from "./ProductListings";

function Home() {
  return (
    <div className="home-container">
      <h1 className="text-3xl font-bold underline">TailWind CSS</h1>
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
