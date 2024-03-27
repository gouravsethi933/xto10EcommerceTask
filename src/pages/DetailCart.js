import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { select_Product } from "../store/cartSlice";


function DetailCart(){
    const dispatch = useDispatch()
    const products = useSelector(state=>state.productss);

    const handleShowDetails = (productId)=>{
        dispatch(select_Product(productId));
    }

    return(
        <div>
            <h1>Dtails of product</h1>
            
            <div className="">
                {
                   products.map(product=>(
                       <div>
                           <section className="section1">
                           <img src={product.image} alt="" onClick={()=>handleShowDetails(product)} />
                           </section>
                           <section className="section2">
                           <h5>{product.title}</h5>
                           <h5>{product.price}</h5>
                           </section>
                          
                           
                       </div>
                   ))

                }
            </div>
        </div>
    )
}
export default DetailCart;