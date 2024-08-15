import React from 'react'
import axios from 'axios'
import './comp.css'

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
            axios.get(`https://api.unsplash.com/search/photos?query=${this.state.searchItem}&client_id=-FsrBd4KeUG3fiIJjEr8fJHvq-pFPaRENohtuvdJGhY`)
                .then((res) => this.setState({data: res.data.results}))
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