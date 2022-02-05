import Home from "./components/Home/Home";
import React, { createContext, useEffect, useState } from "react";



import Blog from './components/Blog/Blog';
import ProductContainer from './components/ProductContainer/ProductContainer';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import FindRooftop from './components/FindRooftop/FindRooftop';
import RooftopDetail from './components/RooftopDetail/RooftopDetail';
import Header from "./components/Header/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from './components/Contact/Contact';



export const CartContext = createContext('ring');



function App() {

  useEffect(() => {
    
  }, []);


  const [cart, setCart] = useState([]);
  
  // const cartValue = useMemo(() => ({cart, setCart}), [cart, setCart]);
  
  // console.log(cartValue);
  

  return (

    <div>
      <CartContext.Provider value={[cart, setCart]}>
        <main>
          <Header></Header>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/product" element={<ProductContainer />} />
              <Route path="/rooftopDetails/:rooftopKey" element={<RooftopDetail />} />
              <Route path="/find/" element={<FindRooftop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Router>
        </main>
      </CartContext.Provider>
    </div>
  );
}

export default App;
