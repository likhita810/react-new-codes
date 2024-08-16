import React from 'react';
import _isEqual from "lodash/isEqual";
import hocComp from './hocComp';

class ArchieveComp extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !_isEqual(nextProps.tasks, this.props.tasks);
    }

    render() {
        const { tasks, changeActiveStatus, deleteTask } = this.props;
        return (
            <div className='innerBox'>
                <h2>Archived Tasks</h2>
                {tasks.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <div className='btns'>
                            <button className='restore' onClick={() => changeActiveStatus(item.id)}>Restore</button>
                            <button className='del' onClick={() => deleteTask(item.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default hocComp(ArchieveComp);
