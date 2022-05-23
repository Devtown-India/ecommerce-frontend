import { Box, Heading, Flex, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Link as lee } from 'react-router-dom'

const Products = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <Box w="100%" color="gray.600">
      <Flex justifyContent={"center"} flexDirection={"row"}>
        <Heading>Showing All Products...</Heading>
        {/* <Filters /> */}
      </Flex>
      <Flex justifyContent={"center"} flexWrap={"wrap"}>
        {products.map((product) => (
          <Link to={`/shop/${product._id}`} as={lee}><ProductCard product={product} /></Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Products;
