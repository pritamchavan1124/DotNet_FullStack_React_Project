import {useEffect,useState} from "react";
import axios from 'axios';

const DisplayData=(props)=>{
    const [arr,setarr]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5275/api/products")
        .then(response=>{
            setarr(response.data)
        });
    })

    var tablestructure=arr.map(obj=>{
        return(
            <tr>
                <td>{obj.prodId}</td>
                <td>{obj.prodTitle}</td>
                <td>{obj.prodCategory}</td>
                <td>{obj.prodDesc}</td>
                <td>{obj.prodPrice}</td>
                <td>{obj.prodQty}</td>
            </tr>
        );
    });
    return (
        <>
        <br></br>
        <table id="myid1">
            <tr>
                <td>ProdId</td>
                <td>ProdTitle</td>
                <td>ProdCategory</td>
                <td>ProdDesc</td>
                <td>ProdPrice</td>
                <td>ProdQty</td>
            </tr>
                {tablestructure}
        </table>
        </>
    );
}
export default DisplayData;