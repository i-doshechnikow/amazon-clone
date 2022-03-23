import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      {products.map((productParams, id) => {
        return <Product productParams={productParams} key={id} />;
      })}
    </div>
  );
}

export default ProductFeed;
