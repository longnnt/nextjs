import axios from "axios";

export default function ProductListByCategory({ category, products }) {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {products &&
        products.map((article) => <div key={article.id}>{article.title}</div>)}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await axios.get(
    `http://localhost/products?category=${category}`
  );

  // ** response.data **
  return {
    props: {
      products: response.data,
      category,
    },
  };
}
