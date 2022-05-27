import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem.js'
import { CartOrderSummary } from './CartOrderSummary'
// import { cartData } from './data'

const Cart = () => {
    const { cartItems, total } = useSelector(state => state.cart)
    const [cartData, setcartData] = useState([])
    // const [total, setTotal] = useState(0)
    const [totalPrice, settotalPrice] = useState(0)

    useEffect(() => {
        setcartData(cartItems)
        let price = 0
        cartItems.forEach(i => {
            price += i.markedPrice * i.quantity
        })
        settotalPrice(price)
    }, [cartItems])

    // console.log(totalItems)

    return (
        <Box
            maxW={{ base: '3xl', lg: '7xl' }}
            mx="auto"
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}
        >
            {cartData?.length > 0 ? <Stack
                direction={{ base: 'column', lg: 'row' }}
                align={{ lg: 'flex-start' }}
                spacing={{ base: '8', md: '16' }}
            >
                <Stack spacing={{ base: '8', md: '10' }} flex="2">
                    <Heading fontSize="2xl" fontWeight="extrabold">
                        Shopping Cart ({total} Items)
                    </Heading>

                    <Stack spacing="6">
                        {cartData.map((item) => (
                            <CartItem item={item} setcartData={setcartData} key={item._id} {...item} />
                        ))}
                    </Stack>
                </Stack>

                <Flex direction="column" align="center" flex="1">
                    <CartOrderSummary total={totalPrice} />
                    <HStack mt="6" fontWeight="semibold">
                        <p>or</p>
                        <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
                    </HStack>
                </Flex>
            </Stack> : "Nothing in the cart yet"}
        </Box>
    )
}

export default Cart