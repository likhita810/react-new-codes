import React from 'react';
import './comp.css'

const hocComp = (InputComp) => {
    return class Comp extends React.Component {
        changeCompletionStatus = (todoId) => {
            const updatedTodos = this.props.todos.map(item => 
                item.id === todoId ? { ...item, status: !item.status } : item
            );
            this.props.updateTodos(updatedTodos);
        }

        changeActiveStatus = (todoId) => {
            const updatedTodos = this.props.todos.map(item => 
                item.id === todoId ? { ...item, active: !item.active } : item
            );
            this.props.updateTodos(updatedTodos);
        }

        deleteTask = (todoId) => {
            const updatedTodos = this.props.todos.filter(item => item.id !== todoId);
            this.props.updateTodos(updatedTodos);
        }

        render() {
            return (
                <div className='box'>
                    <InputComp 
                        tasks={this.props.tasks}
                        changeCompletionStatus={this.changeCompletionStatus}
                        changeActiveStatus={this.changeActiveStatus}
                        deleteTask={this.deleteTask}
                    />
                </div>
            );
        }
    }
}

export default hocComp;
