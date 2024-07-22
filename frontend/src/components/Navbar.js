// import React from 'react';
// import { Link, useHistory } from 'react-router-dom';

// const Navbar = () => {
//     const history = useHistory();

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         history.push('/login');
//     };

//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             <button onClick={handleLogout}>Logout</button>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;

