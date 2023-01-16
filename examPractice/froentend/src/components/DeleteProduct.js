import { useState } from "react";
import axios from "axios";

const DeleteProduct=(props)=>{

    const [obj,setobj]=useState({prodid:""});

    return(
        <div>
            <h2>Enter Product id is deleted...</h2>
            <form method="DELETE">
            <input type="text" id="pid" for="pid" name="pid" value={obj.prodid} onChange={(e)=>setobj({...obj,prodid:e.target.value})} placeholder="Enter product ID"></input>
            <button type="submit" name="btn" id="btn" onClick={(e)=>{
                    e.preventDefault();
                    axios.delete(`http://localhost:5275/api/products/${obj.prodid}`)
                    .then((resp)=>{
                        console.log(resp.data)
                    }).catch(()=>{})
                }}>Delete data</button>
            </form>
        </div>
    )
}
export default DeleteProduct;