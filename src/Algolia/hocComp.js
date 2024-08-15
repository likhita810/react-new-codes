import React from 'react'
import axios from 'axios'

const hocComp = (InputComp) => {
    return class NewComp extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data : [],
                searchItem: ''
            }
        }

        handleInput=(e)=>{
            this.setState({searchItem: e.target.value})
        }

        handleSearch=(e)=>{
            e.preventDefault()
            axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.searchItem}`)
                .then((res) => this.setState({data: res.data.hits}))
                // .then((res)=> console.log(res.data.hits))
                .catch((res) => console.log(res))
        }

        render() {
            return(
                <>
                    <InputComp data = {this.state.data} handleInput = {this.handleInput} handleSearch = {this.handleSearch}></InputComp>
                </>
            )
        }
    }
}

export default hocComp