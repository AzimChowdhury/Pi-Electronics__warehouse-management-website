import { Route, Routes } from "react-router-dom";
import AddProducts from "./Pages/AddProducts/AddProducts";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/add" element={<AddProducts></AddProducts>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/product/:id" element={<Product></Product>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
