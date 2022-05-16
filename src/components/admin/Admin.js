import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AddCategory from "./AddCategory";
import CategoryTable from "./CategoryTable";

const Admin = () => {

    // const {user:{role},isLoaded} = useSelector(state=>state.auth)
    // const navigate = useNavigate()

    // useEffect(()=>{
    //     if(isLoaded&&role<1){
    //         navigate('/')
    //         toast.error("Access Denied")
    //     }   
    // },[role])

  return (
    <Box p={4}>
      <Heading textAlign={"center"}>ADMIN</Heading>
       <Box p={4}>
           <AddCategory/>
       </Box>
         <Box p={4}>
           <CategoryTable/>
       </Box>
    </Box>
  );
};

export default Admin;
