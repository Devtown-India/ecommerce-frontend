import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react'


const ProductCard = ({ product }) => {
    const { image, stickerPrice, markedPrice, name, color } = product
    return (
        <Box
            role={'group'}
            p={6}
            m={6}
            maxW={'350px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${image})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                }}>
                <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={image}
                />
            </Box>
            <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    +plus
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    {`${name}, ${color}`}
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text color={'gray.700'} fontWeight={800} fontSize={'xl'}>
                        {stickerPrice}
                    </Text>
                    <Text textDecoration={'line-through'} color={'gray.600'}>
                        {markedPrice}
                    </Text>
                </Stack>
            </Stack>
        </Box>
    );
}

export default ProductCard;