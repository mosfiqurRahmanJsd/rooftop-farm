import Home from "./components/Home/Home";




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
import { createContext, useState } from "react";




export const UserContext = createContext();




function App() {

  
  
  const [cart, setCart] = useState([]);
  console.log(cart);
  const [loggedInUser, setLoggedInUser] = useState([]);
  
  

  return (

    <div>
      <UserContext.Provider value={{value1:[loggedInUser, setLoggedInUser], value2:[cart, setCart]}}>
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
