import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import ProductContainer from './components/ProductContainer/ProductContainer';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import FindRooftop from './components/FindRooftop/FindRooftop';




function App() {
  return (
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/product">
            <ProductContainer></ProductContainer>
          </Route>
          <Route path="/find">
            <FindRooftop></FindRooftop>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
