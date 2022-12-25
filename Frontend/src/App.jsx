// import Product from "./pages/Product";
import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// import Recommend from "./pages/recommend_books";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/signin" element={<Login/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      {/* <Route exact path="/recommend_books" element={<Recommend/>}/> */}

      </Routes>
    </Router>
  );
};

export default App;