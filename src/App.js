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
import { createContext,  useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import AddRooftop from "./components/AddRooftop/AddRooftop";
import AddBlog from "./components/AddBlog/AddBlog";
import BlogContainer from "./components/BlogContainer/BlogContainer";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Shipment from "./components/Shipment/Shipment";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateOutlet from "./components/PrivateOutlet/PrivateOutlet";
import EntrepreneurDashboard from "./components/EntrepreneurDashboard/EntrepreneurDashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import EntrepreneurSingup from "./components/EntrepreneurSingup/EntrepreneurSingup";





export const UserContext = createContext();




function App() {


  const [cart, setCart] = useState([]);

  

  const [loggedInUser, setLoggedInUser] = useState([]);


 





  return (

      <UserContext.Provider value={{ value1: [loggedInUser, setLoggedInUser], value2: [cart, setCart]  }}>
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
              <Route path="/entrepreneur/signup" element={<EntrepreneurSingup />} />
              <Route path="/product/add" element={<AddProduct />} />
              <Route path="/rooftop/add" element={<AddRooftop />} />
              <Route path="/blog/add" element={<AddBlog />} />
              <Route path="/cart" element={<Cart />} />
              
              <Route path="/*" element={<PrivateOutlet />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="shipment" element={<Shipment />} />
                  <Route path="entrepreneur" element={<EntrepreneurDashboard />} />
                  <Route path="user" element={<UserDashboard />} />
              </Route>
              </Routes>
        </main>
      </UserContext.Provider>
  );
}

export default App;
