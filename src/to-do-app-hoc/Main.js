import React from 'react';
import PendingComp from './PendingComp';
import CompletedComp from './CompletedComp';
import ArchieveComp from './ArchieveComp';
import TimeComp from './TimeComp';

class MainComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            title: "",
            desc: "",
            id: 0
        };
    }

    getPendingStatus = () => {
        return this.state.todos.filter(item => item.status === false && item.active === true);
    }

    getCompletedStatus = () => {
        return this.state.todos.filter(item => item.status === true && item.active === true);
    }

    getArchieveItems = () => {
        return this.state.todos.filter(item => item.active === false);
    }

    handleTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    handleDesc = (e) => {
        this.setState({ desc: e.target.value });
    }

    addToDo = () => {
        const newItem = {
            id: this.state.id + 1,
            title: this.state.title,
            desc: this.state.desc,
            status: false,
            active: true
        };

        this.setState(prevState => ({
            todos: [...prevState.todos, newItem],
            id: prevState.id + 1,
            title: "",
            desc: ""
        }));
    }

    updateTodos = (todos) => {
        this.setState({ todos });
    }

    render() {
        return (
            <>
                <h1 style={{color:"black"}}>To Do Application</h1>
                <TimeComp />
                <div className='form'>
                    <div>
                        <p>Title:</p> 
                        <input type='text' value={this.state.title} onChange={this.handleTitle} />
                    </div>
                    <div>
                        <p>Description:</p> 
                        <input type='text' value={this.state.desc} onChange={this.handleDesc} />
                    </div>
                    <button onClick={this.addToDo}>Add Task</button>
                </div>
                <div>
                    <PendingComp 
                        todos={this.state.todos} 
                        tasks={this.getPendingStatus()} 
                        updateTodos={this.updateTodos} 
                    />
                    <CompletedComp 
                        todos={this.state.todos} 
                        tasks={this.getCompletedStatus()} 
                        updateTodos={this.updateTodos} 
                    />
                    <ArchieveComp 
                        todos={this.state.todos} 
                        tasks={this.getArchieveItems()} 
                        updateTodos={this.updateTodos} 
                    />
                </div>
            </>
        );
    }
}

export default MainComp;
