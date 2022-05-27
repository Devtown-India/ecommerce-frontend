import { Box, Heading,FormControl,Button,Input,FormLabel,Select } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/product";
// import { addCategory } from "../../redux/actions/category";

const AddProduct = () => {

    const [categories,setCategories] = useState([])

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [color, setColor] = useState('')
    const [stickerPrice, setStickerPrice] = useState('')
    const [markedPrice, setMarkedPrice] = useState('')
    const [stock, setStock] = useState(0)
    const [compatibleWith,setCompatibleWith] = useState('')


    const dispatch = useDispatch()

    const getCategories = async () => {
        const {data:response} = await axios.get('http://localhost:8080/category/all')
        const {categories} = response.data
        // const { categories, message } = res.data
        setCategories(categories)
    }

    useEffect(()=>{
        getCategories()
    },[])

    const handleAdd = ()=>{
        console.log({
            name,image,description,category,color,stickerPrice,markedPrice,stock,compatibleWith
        })
        dispatch(addProduct({
            name,image,description,category,color,stickerPrice,markedPrice,stock,compatibleWith
        }))
    }

    return ( 
           <Box m={4}>
            <Heading>Add Product</Heading>
            <FormControl>
                <FormLabel>Product name</FormLabel>
                <Input onChange={(e) => { setName(e.target.value) }} type="text" />
                <FormLabel>Image URL </FormLabel>
                <Input onChange={(e) => { setImage(e.target.value) }} type="text" />
                <FormLabel>Product description</FormLabel>
                <Input onChange={(e) => { setDescription(e.target.value) }} type="text" />
                <FormLabel>Category</FormLabel>
                <Select onChange={(e) => {
                    console.log(e.target.value)
                    // const { _id } = categories.find(category => category.name == e.target.value)
                    // setCategory(_id)
                }} placeholder="Select product's category">
                    {
                        categories && categories.map(category => {
                            return <option id={category._id} >{category.name}</option>
                        })
                    }
                </Select>
                   <FormLabel>Compatible With</FormLabel>
                <Select onChange={(e) => setCompatibleWith(e.target.value)} placeholder="Select compatible with">
                     <option id={'iPhone'} >iPhone</option>
                     <option id={'iPad'} >iPad</option>
                     <option id={'iMac'} >iMac</option>
                </Select>
                <FormLabel>Product color</FormLabel>
                <Input onChange={(e) => { setColor(e.target.value) }} type="text" />
                <FormLabel> Actual Price</FormLabel>
                <Input onChange={(e) => { setStickerPrice(e.target.value) }} type="number" />
                <FormLabel> Listing Price</FormLabel>
                <Input onChange={(e) => { setMarkedPrice(e.target.value) }} type="number" />
                <FormLabel> Stock</FormLabel>
                <Input onChange={(e) => { setStock(e.target.value) }} type="number" />
                <Button onClick={handleAdd} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>
            </FormControl>
        </Box >
     );
}
 
export default AddProduct;