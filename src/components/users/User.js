import React, { Fragment, useContext, useEffect } from 'react';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';

const User = ({match}) => {

    const githubContext = useContext(GithubContext);

    const {loading, getUser, user} = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        // eslint-disable-next-line
    }, []);

    const { avatar_url, name, company, location, hireable, bio, public_repos, followers, following, blog, public_gists } = user;

    if(loading){
        return(<Spinner />)
    }else{
        return(
        <div>
            <Link to="/" className="btn btn-light">Back to search</Link>
            Hireable: {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="" className="round-img" style={{width: "150px"}}/>
                    <h1>{name}</h1>
                    {company && <Fragment>Company: {company}</Fragment>}
                    {location && <Fragment>Location: {location}</Fragment>}
                </div>
                <div>
                    {bio && 
                    <Fragment>
                        <h3>Bio:</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <br></br>
                    <hr></hr>
                    {blog && (<div>Website: {blog}</div>)}
                    <hr></hr>
                    <br></br>
                    <div className="grid-2">
                        <div>
                            <ul>
                                <li>
                                    {<div className="badge badge-danger">Public Repos: {public_repos}</div>}
                                </li>
                                <li>
                                    {<div className="badge badge-dark">Public Gists: {public_gists}</div>}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>    
                                <li>
                                    {<div className="badge badge-primary">Followers: {followers}</div>}
                                </li>
                                <li>
                                    {<div className="badge badge-success">Following: {following}</div>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default User
