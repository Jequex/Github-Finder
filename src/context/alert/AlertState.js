import React, {useReducer} from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';
import {SHOW_ALERT, REMOVE_ALERT} from '../types';

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //set Alert
    const showAlert = (text, type) => {dispatch({
        type: SHOW_ALERT,
        payload: {text, type}
    });

    setTimeout(() => dispatch({type: REMOVE_ALERT}), 2000)
    }

    return(
        <AlertContext.Provider
        value={{
            alert: state,
            showAlert
        }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;