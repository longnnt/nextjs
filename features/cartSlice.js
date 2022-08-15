import { StatArrow, StatLabel } from "@chakra-ui/react";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { cart: [], totalPrice: 0, totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existProduct = state.cart.find(
        (product) => product.productId === action.payload.productId
      );

      const indexOfExistProduct = state.cart.indexOf(existProduct);
      if (existProduct === undefined) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        state.cart.splice(indexOfExistProduct, 1, {
          ...action.payload,
          quantity: existProduct?.quantity + 1,
        });
      }

      const totalPrice = state.cart.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.price * currentValue.quantity,
        0
      );

      state.totalPrice = totalPrice.toFixed(2);
      state.totalQuantity = state.cart.length;
    },
    deleteCart: (state, action) => {
      const cartDelete = state.cart.find(
        (product) => product.productId === action.payload
      );
      const indexOfCartDelete = state.cart.indexOf(cartDelete);

      state.cart.splice(indexOfCartDelete, 1);

      state.totalPrice = (
        state.totalPrice -
        cartDelete.price * cartDelete.quantity
      ).toFixed(2);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, deleteCart } = cartSlice.actions;

export const cartState = (state) => state.cart.cart;
export const totalPriceState = (state) => state.cart.totalPrice;
