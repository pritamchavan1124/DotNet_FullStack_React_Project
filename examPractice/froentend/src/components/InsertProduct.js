import { useState } from "react";
import axios from 'axios';

const InsertData=(props)=>{

    const [array,setarray]=useState({prodTitle:"",prodCategory:"",prodDesc:"",prodPrice:"",prodQty:""});

    // const Insert=(event)=>{
    //     event.preventDefault();
    //     console.log("inside axios")
    //     axios.post("http://localhost:5275/api/products",array)
        
    //     .then((resp)=>{
    //         console.log(resp.data)
    //     }).catch(()=>{})
        
    // }

    // const handleChange=(event)=>{
    //     let {name,value}=event.target;
    //     setarray({...array,[name]:value})
    //     console.log(array)
    // }

    return(
        <div>
            <br></br>
            <h4>Add new Product in the list</h4>
            <form method="POST">
                <input type="text" id="titl" for="titl" name="titl" value={array.prodTitle} onChange={(e)=>setarray({...array,prodTitle:e.target.value})} placeholder="Enter product Title"></input>
                <input type="text" id="cate" for="cate" name="cate" value={array.prodCategory} onChange={(e)=>setarray({...array,prodCategory:e.target.value})} placeholder="Enter product Category"></input>
                <input type="text" id="desc" for="desc" name="desc" value={array.prodDesc} onChange={(e)=>setarray({...array,prodDesc:e.target.value})} placeholder="Enter product Description"></input>
                
                <input type="text" id="price" for="price" name="price" value={array.prodPrice} onChange={(e)=>setarray({...array,prodPrice:e.target.value})} placeholder="Enter product Price"></input>
                <input type="text" id="qty" for="qty" name="qty" value={array.prodQty} onChange={(e)=>setarray({...array,prodQty:e.target.value})} placeholder="Enter product Quantity"></input>
                <button type="submit" name="btn" id="btn" onClick={(e)=>{
                    e.preventDefault();
                    axios.post("http://localhost:5275/api/products",array)
                    .then((resp)=>{
                        console.log(resp.data)
                    }).catch(()=>{})
                }}>Submit data</button>
            </form>

        </div>
    );
}
export default InsertData;
