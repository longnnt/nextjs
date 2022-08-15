import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

function Rating({ rating, numReviews }) {
  return (
    <Flex alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Flex>
  );
}

function ProductItem({ product, onHandleAddToCart }) {
  return (
    <Flex alignItems="center" justifyContent="center" pb={20}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {product.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={product.image}
          alt={`Picture of ${product.title}`}
          roundedTop="lg"
          m="auto"
          w="300"
          h="400"
        />

        <Box p="6" w="400px">
          <Box d="flex" alignItems="baseline">
            {product.category && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                {product.category.toUpperCase()}
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace={"nowrap"}
            >
              {product.title}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating
              rating={product.rating.rate}
              numReviews={product.rating.count}
            />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                £
              </Box>
              {product.price.toFixed(2)}
            </Box>
          </Flex>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"bottom"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a display={"flex"}>
              <Icon
                as={FiShoppingCart}
                h={20}
                w={20}
                alignSelf={"center"}
                m="0 auto"
                pt={10}
                cursor="pointer"
                onClick={() =>
                  onHandleAddToCart({
                    productId: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                  })
                }
              />
            </chakra.a>
          </Tooltip>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductItem;
