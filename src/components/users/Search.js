import React, { Component } from 'react'

class Search extends Component {
    state = {
        text : ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" 
                    name="text" 
                    placeholder="Search for users" 
                    value={this.state.text} 
                    onChange={this.onChange} />
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-block btn-dark" />
                </form>
            </div>
        )
    }
}


export default Search;