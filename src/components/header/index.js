import "../header/index.css"
import {Link,withRouter} from "react-router-dom"
import Cookies from "js-cookie"

const Header = props => {
    const onLogout = () => {
        const {history} = props
        Cookies.remove("jwt_token")
        history.replace("/login")
    }
    return(
        <div className="navbar-lg">
        <div className="nav-mobile">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="logo" className="img-logo"/>
            <button className="logout-btn" onClick={onLogout}><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png" alt="logoutImage" className="btn-logo"/></button>
        </div>
        <div className="nav-card">
            <ul className="navbar-list">
                <li className="navbar">
                    <Link to="/"><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png" alt="home" className="navbar-img"/></Link>
                </li>
                <li className="navbar">
                    <Link to="/products"><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png" alt="products" className="navbar-img"/></Link>
                </li>
                <li className="navbar">
                    <Link to="/cart"><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png" alt="cart" className="navbar-img"/></Link>
                </li>
            </ul>
            <ul className="navbar-link">
                <li className="navbar">
                    <Link to="/" className="link">Home</Link>
                </li>
                <li className="navbar">
                    <Link to="/products" className="link">Products</Link>
                </li>
                <li className="navbar">
                    <Link to="/cart" className="link">Cart</Link>
                </li>
                <li className="navbar">
                    <button className="btn" onClick={onLogout}>Logout</button>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default withRouter(Header)