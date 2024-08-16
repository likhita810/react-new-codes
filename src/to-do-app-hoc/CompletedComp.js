import React from 'react';
import _isEqual from "lodash/isEqual";
import hocComp from './hocComp';

class CompletedComp extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !_isEqual(nextProps.tasks, this.props.tasks);
    }

    render() {
        const { tasks, changeCompletionStatus, changeActiveStatus, deleteTask } = this.props;
        return (
            <div className='innerBox'>
                <h2>Completed Tasks</h2>
                {tasks.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <div className='btns'>
                            <button className='pend' onClick={() => changeCompletionStatus(item.id)}>Pending</button>
                            <button className='trash' onClick={() => changeActiveStatus(item.id)}>Trash</button>
                            <button className='del' onClick={() => deleteTask(item.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default hocComp(CompletedComp);
