import React, {useState} from "react";
import axios from "axios";

const Productscreating=() => {
    const [Productscreating, updateproductscreating] = useState([]); 

    const getProductsResults = () => {
        const url= "https://dummyjson.com/products"

        axios.get(url)
        .then((Response) =>{
            updateproductscreating(Response.data.products);
         })
         .catch((error) =>{
            console.error(error);
         })
    }

    const productList = Productscreating.map((value,index) => {
        
        
    })
    return(
        <div>
            <h2>product user account</h2>
            <button onClick={()=> Productscreating()}> view the details</button>
        </div>
    )



}

export default Productscreating;