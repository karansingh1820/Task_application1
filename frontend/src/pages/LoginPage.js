// import React, { useState } from 'react';
// import { login, googleLogin } from '../api/api';
// import { GoogleLogin } from 'react-google-login';
// import { useHistory } from 'react-router-dom';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = await login({ email, password });
//             localStorage.setItem('token', data.token);
//             history.push('/');
//         } catch (error) {
//             console.error('Error logging in', error);
//         }
//     };

//     const handleGoogleSuccess = async (response) => {
//         try {
//             const data = await googleLogin(response.tokenId);
//             localStorage.setItem('token', data.token);
//             history.push('/');
//         } catch (error) {
//             console.error('Error with Google login', error);
//         }
//     };

//     const handleGoogleFailure = (error) => {
//         console.error('Google login error', error);
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//             <GoogleLogin
//                 clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//                 buttonText="Login with Google"
//                 onSuccess={handleGoogleSuccess}
//                 onFailure={handleGoogleFailure}
//                 cookiePolicy={'single_host_origin'}
//             />
//         </div>
//     );
// };

// export default LoginPage;

import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = (response) => {
        // Handle login success logic
        navigate('/');
    };

    return (
        <div>
            <h2>Login</h2>
            <GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID"
                buttonText="Login with Google"
                onSuccess={handleLoginSuccess}
                onError={(error) => console.error('Login Failed', error)}
            />
        </div>
    );
};

export default LoginPage;

