import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.slice(0, 4).map((productParams, id) => {
        if (id === 4) {
          return (
            <>
              <img
                className="md:col-span-full"
                src="https://links.papareact.com/dyz"
                alt=""
              />
              <div className="md:col-span-2">
                {products.slice(4, 5).map((productParams, id) => {
                  return <Product productParams={productParams} key={id} />;
                })}
              </div>
            </>
          );
        }
        return <Product productParams={productParams} key={id} />;
      })}
    </div>
  );
}

export default ProductFeed;
