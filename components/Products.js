import { Flex } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import ProductItem from "./ProductItem";

export default function Products({ products }) {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Flex>
  );
}
