import React from 'react'
import _isEqual from "lodash/isEqual"
import hocComp from './Comp'

class PendingComp extends React.Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (_isEqual(nextProps.prop1, this.props.prop1)) {
            return false
        } else {
            return true
        }
    }

    render() {
        const {prop1, prop2, prop3, prop4} = this.props
        return(
            <>
                <div className='innerBox'>
                {console.log('pending comp')}

                    <h2>Pending Tasks</h2>
                    
                    {
                        prop1 && prop1.map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className='btns'>
                                    <button className='done' onClick={()=> prop2(item.id)}>Done</button>
                                    <button className='trash' onClick={()=> prop3(item.id)}>Trash</button>
                                    <button className='del' onClick={()=> prop4(item.id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default hocComp(PendingComp)