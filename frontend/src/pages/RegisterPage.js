// import React, { useState } from 'react';
// import { register } from '../api/api';
// import { useNavigate } from 'react-router-dom';
// // import { useHistory } from 'react-router-dom';


// const RegisterPage = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = await register({ name, email, password });
//             localStorage.setItem('token', data.token);
//             history.push('/');
//         } catch (error) {
//             console.error('Error registering', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </div>
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
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default RegisterPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        // Registration logic
        navigate('/login'); // Navigate to login page on successful registration
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                {/* Registration form fields */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;

