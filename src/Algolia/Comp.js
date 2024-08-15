import hocComp from './hocComp'
import React from 'react'

class Comp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <input type='text' placeholder='Enter your search request here' onChange={(e) => this.props.handleInput(e)}></input>
                <button onClick={(e) => this.props.handleSearch(e)}>Search</button>
                <h1>Fetching data through algolia</h1>
                <div className='container' style={{display: 'inline-block', width: '70%', margin: '0 auto'}}>
                    {
                        this.props.data.map((item) => (
                            <div className='box' style={{display: 'flex',width: '100%'}}>
                                <p style={{width: '90%'}}>{item.title}</p>
                                <p>{item.points}</p>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default hocComp(Comp)