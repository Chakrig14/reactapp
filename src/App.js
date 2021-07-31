import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from "./components/home"
import Products from "./components/products"
import Cart from "./components/cart"
import Header from "./components/header"
import Login from "./components/login"
import ProtectedRoute from "./components/protectedroute"

const App = () => (
  <BrowserRouter>
  <Header />
  <Switch>
  <ProtectedRoute exact path="/" component={Home}/>
  <ProtectedRoute exact path="/products" component={Products}/>
  <ProtectedRoute exact path="/cart" component={Cart}/>
  <Route exact path="/login" component={Login}/>
  </Switch>
  </BrowserRouter>
)

export default App