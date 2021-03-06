import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const UserItem = ({avatar_url, login}) => {
return (
        <div className="card text-center">
            <img src={avatar_url} 
            alt="" className="round-img" 
            style={{width: "60px"}} />
            <h3>{login}</h3>
            <Link to={`/user/${login}`} className="btn btn-sm btn-dark my-1">more</Link>
        </div>
    )
}

UserItem.propTypes = {
    avatar_url : PropTypes.string.isRequired,
    login : PropTypes.string.isRequired,
    html_url : PropTypes.string.isRequired,
}

export default UserItem
