import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Blogs from "./pages/Blogs";
import Compare from "./pages/Compare";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import SingleBlog from "./pages/SingleBlog";
import Policies from "./pages/Policies";
import SizeChart from "./pages/SizeChart";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/product/productSlice";


const App = () => {

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchData())
    // eslint-disable-next-line 
  }, [])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/compare" element={<Compare />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/blogs/singleblog" element={<SingleBlog />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            exact
            path="/privacy"
            element={<Policies title="Privacy Policy" />}
          />
          <Route
            exact
            path="/refund"
            element={<Policies title="Refund Policy" />}
          />
          <Route
            exact
            path="/shipping"
            element={<Policies title="Shipping Policy" />}
          />
          <Route exact path="/faq" element={<Policies title="FAQ" />} />
          <Route exact path="/sizechart" element={<SizeChart />} />
          <Route
            exact
            path="/store/*"
            element={<SingleProduct />}
          />
          <Route
            exact
            path="/termsofservice"
            element={<Policies title="Terms of Service" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
