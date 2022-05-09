import { Route, Routes } from "react-router";
import Loader from "./layout/Loader";
import Home from './components/Home'

const App = () => {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<Home/>}  />
      </Routes>
    </div>
   );
}
 
export default App;