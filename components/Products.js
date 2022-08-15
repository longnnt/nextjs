import { Flex, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import ProductItem from "./ProductItem";

export default function Products({ products }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const handleAddToCart = ({ productId, image, title, price }) => {
    dispatch(addToCart({ productId, image, title, price }));
    toast({
      title: "Sản phẩm đã thêm thành công vào giỏ hàng",
      description: "",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
          onHandleAddToCart={handleAddToCart}
        />
      ))}
    </Flex>
  );
}
