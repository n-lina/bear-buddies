import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedInRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            props.user === null ?
                <Component {...props} />
            : <Redirect to={props.other} />
        )} />
    );
};

export default LoggedInRoute;