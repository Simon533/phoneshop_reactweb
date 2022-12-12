import "./App.css";

import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Contact } from "./pages/shop/Contact";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/shop-context";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <ShopContextProvider>
        
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </Router>
        
        
      </ShopContextProvider>
    </div>
  );
}

export default App;