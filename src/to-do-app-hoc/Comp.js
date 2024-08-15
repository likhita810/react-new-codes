import React from 'react'
import './comp.css'

const hocComp = (InputComp) => {

    return class Comp extends React.Component {
        constructor(props) {
            super(props)
        }

        // getPendingStatus = (todoId) => {
        //     const pendingItems = this.props.todos.filter(item => item.status === false && item.active === true)
        //     return pendingItems
        // }
    
        // getCompletedStatus = (todoId) => {
        //     const completedItems = this.props.todos.filter(item => item.status === true && item.active === true)
        //     return completedItems
        // }
    
        // getArchieveItems = () => {
        //     const archievedItems = this.props.todos.filter(item => item.active === false)
        //     return archievedItems
        // }

        changeCompletionStatus=(todoId)=>{
            const temp=this.props.todos
            const obj=temp.find((item) => item.id === todoId)
            console.log(obj)
            obj.status=!obj.status
            console.log('completion status',obj)
            this.setState({todos:temp})
        }

        changeActiveStatus = (todoId) => {
            const objs = this.props.todos
            const activeObj = objs.find((item) => item.id === todoId)
            activeObj.active = !activeObj.active
            console.log('active status',objs)
            this.setState({todos:objs})
        }

        deleteTask = (todoId) => {
            const tasks = this.props.todos
            const newItems = tasks.filter((item) => item.id !== todoId)
            console.log('delete task func',newItems)
            this.setState({todos: newItems})
        }

        render() {
            return(
                    <div className='box'>

                        <InputComp prop2={this.changeCompletionStatus} prop3 = {this.changeActiveStatus} prop4 = {this.deleteTask}></InputComp>

                    </div>
                )
        }
    }
}

export default hocComp