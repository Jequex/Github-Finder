import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER} from '../types';


const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search users
    const searchUsers = async (text) => {
        setLoading()
    
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.USER_FINDER_APP_CLIENT_ID}
        &client_secret=${process.env.USER_FINDER_APP_CLIENT_SECRET}`);
    
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }

    //Get user
    
    const getUser = async (username) => {
        setLoading()

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.USER_FINDER_APP_CLIENT_ID}
        &client_secret=${process.env.USER_FINDER_APP_CLIENT_SECRET}`);

        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    //Set loading
    const setLoading = () => dispatch({type: SET_LOADING})

    //Clear users
    const clearUsers = () => dispatch({type:CLEAR_USERS})

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;