import Home from "./components/Home/Home";




import Blog from './components/Blog/Blog';
import ProductContainer from './components/ProductContainer/ProductContainer';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import FindRooftop from './components/FindRooftop/FindRooftop';
import RooftopDetail from './components/RooftopDetail/RooftopDetail';
import Header from "./components/Header/Header";
import { Route, BrowserRouter as Router, Routes, BrowserRouter } from "react-router-dom";
import Contact from './components/Contact/Contact';
import { createContext, useEffect, useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import AddRooftop from "./components/AddRooftop/AddRooftop";
import { getStoredCart } from "./utilities/fakedb";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Pay from "./components/Pay/Pay";
import AddBlog from "./components/AddBlog/AddBlog";
import BlogContainer from "./components/BlogContainer/BlogContainer";




export const UserContext = createContext();




function App() {


  const [cart, setCart] = useState([]);
  console.log(cart);

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

    <div>
      <UserContext.Provider value={{ value1: [loggedInUser, setLoggedInUser], value2: [cart, setCart] }}>
        <main>
          <Header></Header>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogContainer />} />
              <Route path="/product" element={<ProductContainer />} />
              <Route path="/rooftop/:id" element={<RooftopDetail />} />
              <Route path="/find/" element={<FindRooftop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/product/add" element={<AddProduct />} />
              <Route path="/rooftop/add" element={<AddRooftop />} />
              <Route path="/blog/add" element={<AddBlog />} />
              <Route path="/cart" element={<Cart />} />
              {/* <BrowserRouter>
                <Route path="/" component={Cart} />
                <PrivateRoute path="/private" component={Pay} />
              </BrowserRouter> */}
            </Routes>
          </Router>
        </main>
      </UserContext.Provider>
    </div>
  );
}

export default App;
