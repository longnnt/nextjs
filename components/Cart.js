import { Box, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  cartState,
  deleteCart,
  totalPriceState,
} from "../features/cartSlice";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector(cartState);
  const dispatch = useDispatch();
  const totalPrice = useSelector(totalPriceState);
  const [isShow, setIsShow] = useState(false);
  const handleAdd = () => {
    console.log(cart);
  };
  const handleHover = () => {};
  const handleOutHover = () => {};

  const handleDeleteCart = (productId) => {
    dispatch(deleteCart(productId));
  };
  return (
    <Box>
      <Icon
        as={FiShoppingCart}
        h={20}
        w={20}
        alignSelf={"center"}
        pt={10}
        cursor="pointer"
        onClick={handleAdd}
        onMouseOver={handleHover}
        onMouseOut={handleOutHover}
      />
      {cart &&
        cart.map((cartItem) => (
          <CartItem
            key={cartItem.productId}
            cartItem={cartItem}
            onHandleDeleteCart={handleDeleteCart}
          />
        ))}
      {totalPrice}
    </Box>
  );
}
