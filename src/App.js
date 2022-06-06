import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/404/NotFound";
import AddProducts from "./Pages/AddProducts/AddProducts";

import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import MyItems from "./Pages/MyItems/MyItems";
import Product from "./Pages/Product/Product";
import Register from "./Pages/Register/Register";
import RequireAuth from "./RequireAuth";
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
        <Route path="/add" element={<RequireAuth><AddProducts></AddProducts></RequireAuth>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/product/:id" element={
          <RequireAuth>
            <Product></Product>
          </RequireAuth>
        }>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        
        <Route path="/myItems" element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
