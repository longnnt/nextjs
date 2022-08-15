import { Breadcrumb, BreadcrumbItem, Link, Flex, Icon } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import NextLink from "next/link";
import CartItem from "./CartItem";
import Cart from "./Cart";
export default function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Breadcrumb separator="|">
        <BreadcrumbItem>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NextLink href="/products" passHref>
            <Link>Product</Link>
          </NextLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NextLink href="/products/category" passHref>
            <Link>Category</Link>
          </NextLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Cart />
    </Flex>
  );
}
