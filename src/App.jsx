import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/home.css";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Nav from "./components/Nav";
import Consulta from "./views/Consulta";
import SignUp from "./auth/SignUp";
import Signin from "./auth/SignIn"
import { useSelector } from "react-redux";
import SelectMaterial from "./views/SelectMaterial";
import Maps from "./components/Maps";

const App = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <BrowserRouter className="app">
    <Nav/>
    <div className="app-container container">
    
      <Routes>
        <Route path="/" element={currentUser?<Home />:<Signin/>} />
        <Route path="/signup/new" element={<SignUp/>}/>
        <Route path="/search/value/:value" element={currentUser?<SelectMaterial/>:<Signin/>}/>
        <Route path="/maps" element={currentUser?<Maps/>:<Signin/>}/> 
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;