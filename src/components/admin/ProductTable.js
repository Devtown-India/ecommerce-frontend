import {
  Table,
  TableContainer,
  Tr,
  Th,
  Td,
  Tfoot,
  TableCaption,
  Thead,
  Tbody,
  Button,
  ButtonGroup,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/product";

const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="purple">
        <TableCaption>Products</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.length === 0
            ? "No products"
            : products.map(({ name, description }) => (
                <Tr>
                  <Td>{name}</Td>
                  <Td>{description}</Td>
                  <Td isNumeric>
                    <Stack spacing={4} direction="row" align="center">
                      <Button colorScheme="yellow" size="sm">
                        Edit
                      </Button>
                      <Button colorScheme="red" size="sm">
                        Delete
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
