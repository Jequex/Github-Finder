import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import ALertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(ALertContext)
    const [text, setText] = useState("");

    const {clearUsers, searchUsers, users} = githubContext
    const {showAlert} = alertContext

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ""){
            showAlert("Please add a search text", "danger");
        }else{
            searchUsers(text)
            setText("")
        }   
    };

    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" 
                name="text" 
                placeholder="Search for users" 
                value={text} 
                onChange={onChange} />
                <input 
                type="submit" 
                value="Search" 
                className="btn btn-block btn-dark" />
            </form>
            {users.length > 0 && <button className="btn btn-block btn-light" onClick={clearUsers}>clear</button>}   
        </div>
    )
}


export default Search;