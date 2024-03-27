import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from './store/store';
import DetailCart from "./pages/DetailCart";
import AddProduct from "./components/AddProduct";


function App(){
    return(
        <div className="App">
         <Provider store={store}>
         <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/productss" element={<DetailCart/>}></Route>
                <Route path="/add-product" element={<AddProduct/>}></Route>
            </Routes>
            </BrowserRouter>
         </Provider>

        </div>
    )
}
export default App;