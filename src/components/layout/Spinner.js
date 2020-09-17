import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={{width: "200px", margin: "auto", display: "block"}} />
            <h4 className="text-center">loading...</h4>
        </Fragment>
    )
}

export default Spinner;