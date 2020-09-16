import React from 'react';
import PropTypes from 'prop-types';


const UserItem = ({avatar_url, login, html_url}) => {
return (
        <div className="card text-center">
            <img src={avatar_url} 
            alt="" className="round-img" 
            style={{width: "60px"}} />
            <h3>{login}</h3>
            <a href={html_url} className="btn btn-sm btn-dark my-1" target="_blank" rel="noopener noreferrer">more</a>
        </div>
    )
}

UserItem.propTypes = {
    avatar_url : PropTypes.string.isRequired,
    login : PropTypes.string.isRequired,
    html_url : PropTypes.string.isRequired,
}

export default UserItem
