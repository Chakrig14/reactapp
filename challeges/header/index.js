import {Link} from "react-router-dom"
import "./index.css"

const Header = () => {
    return(
        <nav>
            <div className="navbar">
                <div className="link-list">
                <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" alt="logoImage" className="image-logo"/>
                <h3 className="logo-name">Wave</h3>        
                </div>
                <ul className="link-list">
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                    <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header