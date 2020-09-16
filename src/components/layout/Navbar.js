import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon="fab fa-github", title="Github Finder"}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={ icon } />{ title }
            </h1> 
        </nav>
    )
}

Navbar.propTypes = {
    icon : PropTypes.string,
    title: PropTypes.string
}

export default Navbar
