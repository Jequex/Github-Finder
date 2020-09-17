import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text : ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ""){
            this.props.setAlert("Please add a search text", "light");
        }else{
            this.props.searchUsers(this.state.text)
        }   
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {

        const {clearUsers, showClear} = this.props;

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
                {showClear && <button className="btn btn-block btn-light" onClick={clearUsers}>clear</button>}   
            </div>
        )
    }
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}


export default Search;