import React from "react";

class DashbrdCls extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {username,role} = this.props.data
       
        return(
            <>
                <h1>Your Dashboard</h1>
                <h2>Welcome {username}</h2>
                <p>Role: {role}</p>
            </>
        )
    }
}
export default DashbrdCls