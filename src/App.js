import "./App.css";
import Navbar from "./components/Navbar/Navbar_";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contextAPI/Context";
import Account from "./Pages/Account";
import Login from "./components/AccountPage/Login";
import Items from "./Pages/Items";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/signup" component={Account}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/items" component={Items}></Route>
        </Switch>
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;
