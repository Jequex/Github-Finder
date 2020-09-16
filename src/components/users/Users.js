import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';


const Users = ({loading, users}) => {
    if(loading){
        return(<Spinner />)
    }else{
        return(
            <div style={userStyle}>
                {users.map(user => 
                <UserItem key={user.id} 
                avatar_url={user.avatar_url} 
                login={user.login} 
                html_url={user.html_url} />)}
            </div>
        )

    }
}

Users.propTypes = {
    loading: PropTypes.bool,
    users: PropTypes.array.isRequired
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
}

export default Users;
