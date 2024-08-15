import hocComp from './hocComp'
import React from 'react'

class ChildComp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <input type='text' placeholder='Enter your search request here' onChange={(e) => this.props.handleInput(e)}></input>
                <button onClick={(e) => this.props.handleSearch(e)}>Search</button>
                <h1>Fetching data through axios from url</h1>
                <div className='container'>
                    {
                        this.props.data.map((item) => (
                            <div className='box'>
                                <img src={item.urls.small}></img>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default hocComp(ChildComp)