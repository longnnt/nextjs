import axios from "axios";
import Products from "../../components/Products";
export default function HomeProduct({ products }) {
  return (
    <>
      List of Products
      <Products products={products} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      products: data,
      message: "something is wrong",
    },
  };
}
