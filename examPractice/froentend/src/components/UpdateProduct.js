import { useState } from "react";
import axios from 'axios';

const UpdateData=(props)=>{

    const [newobj,setnewobj]=useState({prodid:"",prodTitle:"",prodCategory:"",prodDesc:"",prodPrice:"",prodQty:""})

    return(
        <div>
            <form method="PUT">
            <input type="text" id="pid" for="pid" name="pid" value={newobj.prodid} onChange={(e)=>setnewobj({...newobj,prodid:e.target.value})} placeholder="Enter product id"></input>
            <input type="text" id="titl" for="titl" name="titl" value={newobj.prodTitle} onChange={(e)=>setnewobj({...newobj,prodTitle:e.target.value})} placeholder="Enter product Title"></input>
                <input type="text" id="cate" for="cate" name="cate" value={newobj.prodCategory} onChange={(e)=>setnewobj({...newobj,prodCategory:e.target.value})} placeholder="Enter product Category"></input>
                <input type="text" id="desc" for="desc" name="desc" value={newobj.prodDesc} onChange={(e)=>setnewobj({...newobj,prodDesc:e.target.value})} placeholder="Enter product Description"></input>
                
                <input type="text" id="price" for="price" name="price" value={newobj.prodPrice} onChange={(e)=>setnewobj({...newobj,prodPrice:e.target.value})} placeholder="Enter product Price"></input>
                <input type="text" id="qty" for="qty" name="qty" value={newobj.prodQty} onChange={(e)=>setnewobj({...newobj,prodQty:e.target.value})} placeholder="Enter product Quantity"></input>
                <button type="submit" name="btn" id="btn" onClick={(e)=>{
                    e.preventDefault();
                    axios.put("http://localhost:5275/api/products",newobj)
                    .then((resp)=>{
                        console.log(resp.data)
                    }).catch(()=>{})
                }}>Update data</button>

            </form>
        </div>
    )
}
export default UpdateData;