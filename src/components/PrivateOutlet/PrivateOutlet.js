import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {useLocation} from 'react-router';
import { UserContext } from './../../App';

 const PrivateOutlet = () => {
    const location = useLocation();

    const { value1 } = useContext(UserContext);
    const [loggedInUser] = value1;

    console.log(loggedInUser);

  return loggedInUser.email != null ? <Outlet /> : <Navigate to="/login" state={{from: location}} />
      
}

export default PrivateOutlet;

