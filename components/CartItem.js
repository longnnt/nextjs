import { Box, Button, Flex, Image, Text, Divider } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";

export default function CartItem({ cartItem, onHandleDeleteCart }) {
  return (
    <>
      <Flex alignItems={"center"}>
        <Image src={cartItem.image} alt="Picture" w="80px" h="80px" m={5} />
        <Box w="280px" mr={5}>
          <Text
            fontSize="md"
            whiteSpace={"nowrap"}
            overflow="hidden"
            textOverflow={"ellipsis"}
          >
            Title: {cartItem.title}
          </Text>
          <Text fontSize="md">Quantity: {cartItem.quantity}</Text>
        </Box>
        <Button onClick={() => onHandleDeleteCart(cartItem.productId)}>
          <AiOutlineDelete />
        </Button>
      </Flex>
      <Divider />
    </>
  );
}
