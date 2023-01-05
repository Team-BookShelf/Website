import Product from "./pages/Product";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<ProductList/>}/>
      <Route exact path="/products/:category" element={<ProductList/>}/>
      <Route exact path="/products/:id" element={<ProductList/>}/>
      <Route exact path="/product" element={<Product/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/signin" element={<Login/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
};

export default App;