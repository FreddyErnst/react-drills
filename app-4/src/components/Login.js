import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "username",
            password: "password"
        }
        this.handleLogin = this.handleLogin.bind(this)
 }

 handleUserName (name) {
     this.setState({username: name})
}

handlePassword (password) {
    this.setState({password: password})
}

handleLogin () {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
}

    render () {
        return (
            <div>
                <input onChange={(e) => this.handleUserName(e.target.value)}/> 
                <input onChange={(e) => this.handlePassword(e.target.value)}/>
                <button onClick={this.handleLogin}> Login </button>
            </div>
        )
    }
}

export default Login