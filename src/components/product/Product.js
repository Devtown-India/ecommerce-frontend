import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
    IoColorFilterOutline,
    IoScanOutline,
    IoShieldCheckmarkOutline,
    IoCartOutline
} from 'react-icons/io5';
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Values from '../Values';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
// import { addToCart } from '../../actions/cart';


const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function Product() {
    const [selectedProduct, setSelectedproduct] = useState(null)
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.product)
    const { id } = useParams()
    const fetchProduct = (productId) => {
        const product = products.find(product => product._id == productId)
        setSelectedproduct(product)
    }
    useEffect(() => {
        fetchProduct(id)
    }, [products])

    return (
        <Container maxW={'7xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            selectedProduct && selectedProduct.image
                        }
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        {selectedProduct && selectedProduct.category.name}
                    </Text>
                    <Heading>{selectedProduct && selectedProduct.name}</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        {selectedProduct && selectedProduct.description}
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={

                                <Icon as={IoScanOutline} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={`For : ${selectedProduct && selectedProduct.compatibleWith}`}
                        />

                        <Feature
                            icon={
                                <Icon as={IoColorFilterOutline} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={`Color : ${selectedProduct && selectedProduct.color}`}
                        />
                        <Feature
                            icon={<Icon as={IoShieldCheckmarkOutline} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'12 Months Warranty'}
                        />
                    </Stack>
                    <Flex justifyContent={'space-between'} spacing={10} pt={2}>
                        <Button
                            onClick={() => {
                                dispatch(addToCart(selectedProduct))
                            }}
                            flexGrow={'4'}
                            loadingText="Submitting"
                            size="lg"
                            bg={'gray.900'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.400',
                            }}>
                            Add To Cart &nbsp; &nbsp; <IoCartOutline size={30} />
                        </Button>
                        <Heading color={'gray.900'} textAlign={'center'} borderRadius={'10px'} flexGrow={'2'} background={'gray.100'}> ₹ {selectedProduct && selectedProduct.markedPrice}</Heading>
                    </Flex>
                </Stack>

            </SimpleGrid>
            <Values/>
            {/* <Details /> */}
        </Container >
    );
}