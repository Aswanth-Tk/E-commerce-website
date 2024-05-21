import './App.css';
import Cards from './Cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Cart';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const samplecontext = createContext();

function App() {

  const [addcard, setaddcard] = useState([])
  const [product, setproduct] = useState([])
  const [count, setcount] = useState([])
  const [hide, sethide] = useState(true)
  useEffect(() => {
    const products = 'https://dummyjson.com/products'
    axios.get(products).then((arg) => console.log(arg.data.products))
    axios.get(products).then((arg) => setproduct(arg.data.products))
  }, [])

  return (
    <div >
      <samplecontext.Provider value={{
        addcard, setaddcard,
        product, setproduct,
        count, setcount,
        hide,sethide
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </samplecontext.Provider>
    </div>
  );
}
export default App;
export { samplecontext };
