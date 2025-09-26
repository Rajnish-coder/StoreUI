import PageHeading from "./PageHeading";
import products from "../data/products";
import ProductListings from "./ProductListings";

function Home() {
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
