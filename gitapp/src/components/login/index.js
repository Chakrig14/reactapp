import "../login/index.css"
import {Component} from "react"
import Cookies from "js-cookie"

class Login extends Component{
    state={username:"",password:"",errorText:"",submitError:false}
    userNameValue = e => {
        this.setState({username:e.target.value})
    }
    passwordValue = e => {
        this.setState({password:e.target.value})
    }
    renderUseraname=() => {
        const {username} = this.state
        return(
            <div className="input">
                <label htmlFor="username" className="value">USERNAME</label>
                <input className="input-val" type="text" value={username} id="username" placeholder="Enter Username" onChange={this.userNameValue}/>
            </div>
        )
    }
    renderPassword=() => {
        const {password} = this.state
        return(
            <div className="input">
                <label htmlFor="password" className="value">PASSWORD</label>
                <input className="input-val" type="password" id="password" placeholder="Enter Password" value={password} onChange={this.passwordValue}/>
            </div>
        )
    }
    onSuccess= jwtToken => {
        const {history} = this.props
        Cookies.set('jwt_token',jwtToken,{
            expires:1,
            path: "/"
        })
        history.replace("/")
    }
    onFailure = errorText => {
        this.setState({submitError:true,errorText})
    }
    loginForm =async event => {
        event.preventDefault()
        const {username,password} = this.state
        const userDetails  = {username,password}
        const url = "https://apis.ccbp.in/login"
        const options = {
            method:"POST",
            body:JSON.stringify(userDetails)
        }
        const response= await fetch(url,options)
        const data = await response.json()
        if(response.ok === true){
            this.onSuccess(data.jwt_token)
        }
        else{
            this.onFailure(data.error_msg)
        }
    }
    render(){
        const {errorText,submitError} = this.state
        return(
            <>
            <div className="lg-login-card">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="loginImage" className="lg-image"/>
            <div>
            <div className="login-card">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="logoImage"className="login-logo"/>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="loginImage" className="login-logo lg"/>
            </div>
            <form onSubmit={this.loginForm} className="form-input">
            <div>{this.renderUseraname()}</div>
            <div>{this.renderPassword()}</div>
            <button type="submit" className="login-btn">Login</button>
            {submitError && <p className="error-text">{errorText}</p>}
            </form>
            </div>
            </div>
            </>
        )
    }
}

export default Login