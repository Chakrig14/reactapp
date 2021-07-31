import "../login/index.css"
import {Component} from "react"

class Login extends Component{
    state = {username: "",password:"",dataofUser:""}
    onSuccess=() => {
        const {history} = this.props
        history.replace("/")
    }
    loginForm = async event => {
        event.preventDefault()
        const {username,password} = this.state
        const data = {username,password}
        const url="https://apis.ccbp.in/login"
        const options= {
            method:"POST",
            body:JSON.stringify(data)
        }
        const response = await fetch(url,options)
        const userData = await response.json()
        console.log(userData)
        if(response.ok===true){
            this.onSuccess()
        }
        else{
            this.setState({dataofUser:userData.error_msg})
        }
    }
    onChangeUsername= event => {
        const eventUseranme=event.target.value
        this.setState({username:eventUseranme})
    }
    onChangePassword = event => {
        const eventPassword=event.target.value
        this.setState({password:eventPassword})
    }
    renderUsernameField=() => {
        const {username} = this.state
        return(
            <>
            <label htmlFor="userName">USERNAME</label>
            <input type="text" id="userName" value={username} onChange={this.onChangeUsername}/>
            </>
        )
    }
    renderPasswordField=() => {
        const {password} = this.state
        return(
            <>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" value={password} onChange={this.onChangePassword}/>
            </>
        )
    }
    render(){
        const {dataofUser} = this.state
        console.log(dataofUser)
        return(
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="websiteLogin" className="login-img"/>
                <form onSubmit={this.loginForm}>
                <div>{this.renderUsernameField()}</div>
                <div>{this.renderPasswordField()}</div>
                <button type="submit">Login</button>
                </form>
                <p>{dataofUser}</p>
            </div>
        )
    }
}

export default Login