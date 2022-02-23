import Home from "./components/Home/Home";

import ProductContainer from './components/ProductContainer/ProductContainer';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import FindRooftop from './components/FindRooftop/FindRooftop';
import RooftopDetail from './components/RooftopDetail/RooftopDetail';
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Contact from './components/Contact/Contact';
import { createContext, useEffect, useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import AddRooftop from "./components/AddRooftop/AddRooftop";
import { getStoredCart } from "./utilities/fakedb";
import AddBlog from "./components/AddBlog/AddBlog";
import BlogContainer from "./components/BlogContainer/BlogContainer";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Shipment from "./components/Shipment/Shipment";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateOutlet from "./components/PrivateOutlet/PrivateOutlet";





export const UserContext = createContext();




function App() {


  const [cart, setCart] = useState([]);
  

  const [loggedInUser, setLoggedInUser] = useState([]);



  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://obscure-journey-61930.herokuapp.com/product')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const _id in savedCart) {
        const addedProduct = products.find(product => product._id === _id);
        if (addedProduct) {
          const quantity = savedCart[_id];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);




  return (

      <UserContext.Provider value={{ value1: [loggedInUser, setLoggedInUser], value2: [cart, setCart] }}>
        <main>
          <Header></Header>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogContainer />} />
              <Route path="/product" element={<ProductContainer />} />
              <Route path="/rooftop/:id" element={<RooftopDetail />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/find/" element={<FindRooftop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/product/add" element={<AddProduct />} />
              <Route path="/rooftop/add" element={<AddRooftop />} />
              <Route path="/blog/add" element={<AddBlog />} />
              <Route path="/cart" element={<Cart />} />
              
              <Route path="/*" element={<PrivateOutlet />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="shipment" element={<Shipment />} />
              </Route>
              </Routes>
        </main>
      </UserContext.Provider>
  );
}

export default App;
