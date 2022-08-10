import axios from "axios";
import Products from "../../components/Products";
export default function products({ products }) {
  return (
    <>
      List of Products
      <Products products={products} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost/products");
  return {
    props: {
      products: data,
      message: "something is wrong",
    },
  };
}
