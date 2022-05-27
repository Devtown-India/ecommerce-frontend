import { CloseButton, Flex, Link, Select, SelectProps, useColorModeValue } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useDispatch } from 'react-redux'
import { modifyQuantity, deleteItem } from '../../redux/actions/cart'


const QuantitySelect = (props) => {
    return (
        <Select
            maxW="64px"
            aria-label="Select quantity"
            focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            {...props}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </Select>
    )
}

export const CartItem = (props) => {
    const {
        isGiftWrapping,
        name,
        description,
        quantity,
        image,
        currency,
        stickerPrice:price,
        markedPrice:listPrice,
        onChangeQuantity,
        onClickDelete,
        setcartData,
        item,
        _id
    } = props

    const dispatch = useDispatch()

    return (
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <CartProductMeta
                name={name}
                description={description}
                image={image}
                isGiftWrapping={isGiftWrapping}
            />

            {/* Desktop */}
            <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
                <QuantitySelect
                    value={quantity}
                    onChange={(e) => {
                        onChangeQuantity?.(+e.currentTarget.value)
                        dispatch(modifyQuantity(item, e.currentTarget.value))

                    }}
                />
                <PriceTag price={listPrice}
                    currency={
                        currency} />
                <strike><PriceTag price={price} currency={currency} /></strike>
                <CloseButton aria-label={`Delete ${name} from cart`} onClick={() => {
                   dispatch(deleteItem(item))
                }} />
            </Flex>

            {/* Mobile */}
            <Flex
                mt="4"
                align="center"
                width="full"
                justify="space-between"
                display={{ base: 'flex', md: 'none' }}
            >
                <Link fontSize="sm" textDecor="underline">
                    Delete
                </Link>
                <QuantitySelect
                    value={quantity}
                    onChange={(e) => {
                        onChangeQuantity?.(+e.currentTarget.value)
                    }}
                />
                <PriceTag price={listPrice} currency={currency} />
                <strike><PriceTag price={price} currency={currency} /></strike>
            </Flex>
        </Flex>)

}
