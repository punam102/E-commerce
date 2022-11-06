import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Router } from "react-router-dom";
import Product from "./components/Product";
// import Products from "./components/Products";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Route path="/products" component={<Product />} />
        {/* <Route path="/products/:id" component={<Products />} /> */}
        <Home />
      </Router>
    </>
  );
}

export default App;
