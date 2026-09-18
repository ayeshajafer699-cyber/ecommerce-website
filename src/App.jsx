import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/Authcontext";
import ProductDetails from "./pages/Productdetails";


function App() {

  return <div className="app">
    <AuthProvider>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />}/>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/products/:id" element={<ProductDetails />}/>
      </Routes>
      </AuthProvider>
  </div>;
}

export default App
