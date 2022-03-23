function Product({ productParams }) {
  const { title, id, price, description, category, image } = productParams;
  return <div>{title}</div>;
}

export default Product;
