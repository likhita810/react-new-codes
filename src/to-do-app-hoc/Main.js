import React from 'react'
import PendingComp from './PendingComp';
import CompletedComp from './CompletedComp'
import ArchieveComp from './ArchieveComp';
import './comp.css'
import TimeComp from './timer';

class MainComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:[],
            title: "",
            desc: "",
            id: 0
        }
    }

    getPendingStatus = (todoId) => {
        const pendingItems = this.state.todos.filter(item => item.status === false && item.active === true)
        return pendingItems
    }

    getCompletedStatus = (todoId) => {
        const completedItems = this.state.todos.filter(item => item.status === true && item.active === true)
        return completedItems
    }

    getArchieveItems = () => {
        const archievedItems = this.state.todos.filter(item => item.active === false)
        return archievedItems
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleDesc = (e) => {
        this.setState({desc: e.target.value})
    }

    addToDo = () => {
        const newItem = {
            id: this.state.id + 1,
            title: this.state.title,
            desc: this.state.desc,
            status: false,
            active: true
        }

        const item = [...this.state.todos, newItem]
        console.log(newItem.id)
        console.log(item)
        this.setState({todos: item, id: this.state.id + 1})
    }

    render() {
        return(
            <>
                <h1 style={{color:'black'}}>To Do Application</h1>

                <TimeComp></TimeComp>

                <div className='form'>
                    <div>
                        <p>Title:</p> 
                        <input type='text' onChange={(e) => this.handleTitle(e)}></input>
                    </div>
                    <div>
                        <p>Description:</p> 
                        <input type='text' onChange={(e) => this.handleDesc(e)}></input>
                    </div>
                    <button onClick = {() => this.addToDo()}>Add Task</button>
                </div>

                <div className='box' style={{color:"white"}}>
                    <PendingComp todos={this.state.todos} prop1={this.getPendingStatus()}></PendingComp>
                    <CompletedComp todos={this.state.todos} prop1 = {this.getCompletedStatus()}></CompletedComp>
                    <ArchieveComp todos={this.state.todos} prop1 = {this.getArchieveItems()}></ArchieveComp>
                </div>
            </>
        )
    }
}


export default MainComp