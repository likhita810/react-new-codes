import React from "react";
import axios from "axios";

class LoginCls extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:'',
            password:'',
            unameErr:"",
            passwordErr:'',
        }
    }
   
    handleSubmit=(e)=>{
        e.preventDefault()
        const {navigate} = this.props.nav
        axios.get(`http://localhost:3001/userCredentials?username=${this.state.username}`).
        then((res) => {
            const response = res.data[0]
            // console.log(res)
            console.log(response)
            if (!response) {
                navigate("/signin")
                console.log('signin')
            }
             else if (response.password === this.state.password) {
                navigate(`/dashboard/${this.state.username}/${response.role}`)
            } else {
                this.setState({passwordErr: "Please enter correct password"})
            }
        })
    }

    handleValidation=(e,keyword)=>{
        if(keyword==="username"){
            if(e.target.value){
                this.setState({username:e.target.value})
            }
            else{
                this.setState({unameErr:"please enter username"})
            }
        }
        if(keyword==="password"){
            if(e.target.value){
                this.setState({password:e.target.value})
            }
            else{
                this.setState({passwordErr:"please enter password"})
            }
        }
    }
    render(){
        return(
            <>
                <h1>Login here..</h1>
                <form>
                    Username:  <input type="text" onBlur={(e)=>this.handleValidation(e,"username")}></input>
                    <p style={{color:"red"}}>{this.state.unameErr}</p>

                    Password:  <input type="text" onBlur={(e)=>this.handleValidation(e,"password")}></input>
                    <p style={{color:"red"}}>{this.state.passwordErr}</p>
                    
                    <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
                </form>
            </>
        )
    }
}
export default LoginCls