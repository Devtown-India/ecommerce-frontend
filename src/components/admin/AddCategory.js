import { Box, Heading,FormControl,Button,Input,FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/actions/category";

const AddCategory = () => {

    const [description,setDescription] = useState('')
    const [name,setName] = useState('')
    const dispatch = useDispatch()

    const handleAdd = ()=> dispatch(addCategory(name,description))

    return ( 
           <Box m={4}>
            <Heading>Add Category</Heading>
            <FormControl>
                <FormLabel>Category name</FormLabel>
                <Input onChange={(e) => { setName(e.target.value) }} type="text" />
                <FormLabel>Category description</FormLabel>
                <Input onChange={(e) => { setDescription(e.target.value) }} type="text" />
                <Button onClick={handleAdd} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>
            </FormControl>
        </Box >
     );
}
 
export default AddCategory;