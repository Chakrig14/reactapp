import {withRouter} from "react-router-dom"
import Cookie from "js-cookie"
const About  = (props) => {
    const logoutApp = () => {
        Cookie.remove("jwt_token");
        const{history} = props
        history.replace("/login")
    }
    return(
        <div>
            <h1>About Route</h1>
            <button onClick={logoutApp}>Logout</button>
        </div>
    )
}

export default withRouter(About)