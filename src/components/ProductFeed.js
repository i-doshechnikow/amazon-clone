import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.map((productParams, id) => {
        return <Product productParams={productParams} key={id} />;
      })}
    </div>
  );
}

export default ProductFeed;
