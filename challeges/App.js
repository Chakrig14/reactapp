import { BrowserRouter,Route,Switch } from "react-router-dom"
import Header from "./components/header/index"
import Home from "./components/home/index"
import BlogItemDetail from "./components/blogdata"

const App = () => (
  <BrowserRouter>
  <Header />
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/blogs/:id" component={BlogItemDetail}/>
  </Switch>
  </BrowserRouter>
)

export default App