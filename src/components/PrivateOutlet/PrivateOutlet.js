import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';
import { UserContext } from './../../App';



export default function PrivateOutlet() {
    const location = useLocation();

    const { value1 } = useContext(UserContext);
    const [loggedInUser] = value1;

    

    

    return loggedInUser.email != null ? <Outlet /> : <Navigate to="/login"  state={{ from: location }} />

        
       
    


}



