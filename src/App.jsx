import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/home.css";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Nav from "./components/Nav";
import SignUp from "./auth/SignUp";
import Signin from "./auth/SignIn"
import { useSelector } from "react-redux";
import SelectMaterial from "./views/SelectMaterial";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import Result from "./views/Result";

const App = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <BrowserRouter className="app">
    <Nav/>
    <div className="app-container container">
    
      <Routes>
        <Route path="/" element={currentUser?<Home />:<Signin/>} />
        <Route path="/signup/new" element={<SignUp/>}/>
        <Route path="/search/value/:value/mate/:material/price/:price/vk/:vk/vks/:vks" element={currentUser?<Result/>:<Signin/>}/>
        <Route path="/search/value/:value/price/:price" element={currentUser?<SelectMaterial/>:<Signin/>}/>
        <Route path="/places/near" element={currentUser?<Maps/>:<Signin/>}/> 
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;