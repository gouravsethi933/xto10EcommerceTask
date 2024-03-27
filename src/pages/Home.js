import React from "react";
import Products from "../components/Products";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div>
            <h2 className="heading">Welcome to the  Store</h2>
            <section>
                <h3>Products</h3>
                <Products/>
                <Link to="/add-product">Add Product</Link>
            </section>
        </div>
    )
}
export default Home;