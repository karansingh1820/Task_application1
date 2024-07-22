// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const isAuthenticated = !!localStorage.getItem('token');

//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
//             }
//         />
//     );
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

