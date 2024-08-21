import React from "react";
import axios from "axios";

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            uname: '',
            pswd: '',
            confirmPassword: '',
            rl: '',
            unameErr: '',
            pswdErr: '',
            roleErr: '',
            isId: '',
            err: ''
        }
    }

    handleChange=(e, keyword) => {
        if (keyword === 'username') {
            this.setState({uname: e.target.value})
        }
        if (keyword === 'password') {
            this.setState({pswd: e.target.value})
        }
        if (keyword === 'role') {
            this.setState({rl: e.target.value})
        }
        if (keyword === 'confirmPassword') {
            this.setState({confirmPassword: e.target.value})
        }
    }

    handleValidation = (e, keyword) => {
        if (keyword === 'username') {
            if(e.target.value) {
                this.setState({uname: e.target.value})
            } else {
                this.setState({unameErr: 'please enter username'})
            }
        } 
        if (keyword === 'password') {
            if(e.target.value) {
                this.setState({pswd: e.target.value})
            } else {
                this.setState({pswdErr: 'please enter username'})
            }
        }
        if (keyword === 'confirmPassword') {
            if(e.target.value) {
                this.setState({confirmPassword: e.target.value})
            } else {
                this.setState({pswdErr: 'please enter username'})
            }
        }
        if (keyword === 'role') {
            if(e.target.value) {
                this.setState({rl: e.target.value})
            } else {
                this.setState({roleErr: 'please enter username'})
            }
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {navigate} = this.props.nav
        if (this.state.pswd !== this.state.confirmPassword) {
            this.setState({err: "password is not matching"})
            console.log('pswd check')
        } else {
            axios.post('http://localhost:3001/userCredentials', {
                username: this.state.uname,
                role: this.state.rl,
                password: this.state.pswd
            }).then((res) => {
                console.log(res.data)
                navigate('/')
            })
            console.log('post block')
        }

    }

    render() {
        return(
            <>
                <h1>Please Sign In here!</h1>
                <form>
                    User name: <input type="text" onChange={(e) => this.handleChange(e, 'username')} onBlur={(e) => this.handleValidation(e, 'username')}></input>
                    <p style={{color: 'red'}}>{this.state.unameErr}</p>

                    Role: <input type="text" onChange={(e) => this.handleChange(e, 'role')} onBlur={(e) => this.handleValidation(e, 'role')}></input>
                    <p style={{color: 'red'}}>{this.state.roleErr}</p>

                    Password: <input type="password" onChange={(e) => this.handleChange(e, 'password')} onBlur={(e) => this.handleValidation(e, 'password')}></input>
                    <p style={{color: 'red'}}>{this.state.pswdErr}</p>

                    Confirm Password: <input type="password" onChange={(e) => this.handleChange(e, 'confirmPassword')} onBlur={(e) => this.handleValidation(e, 'confirmPassword')}></input>
                    <p style={{color: 'red'}}>{this.state.pswdErr}</p>

                    <p style={{color: 'red'}}>{this.state.err}</p>
                    <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
                </form>
            </>
        )
    }
}

export default SignIn