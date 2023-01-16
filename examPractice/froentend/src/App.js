import logo from './logo.svg';
import './App.css';
import DisplayData from './components/DisplayProducts';
import InsertData from './components/InsertProduct';
import DeleteProduct from './components/DeleteProduct';
import UpdateData from './components/UpdateProduct';

function App() {
  return (
    <div >
      <InsertData></InsertData>
      <DisplayData></DisplayData>
      <DeleteProduct></DeleteProduct>
      <UpdateData></UpdateData>
    </div>
  );
}

export default App;
