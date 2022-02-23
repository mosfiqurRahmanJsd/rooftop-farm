import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';
import { UserContext } from './../../App';
import Dashboard from '../Dashboard/Dashboard';
import EntrepreneurDashboard from '../EntrepreneurDashboard/EntrepreneurDashboard';

export default function PrivateOutlet() {
    const location = useLocation();

    const { value1 } = useContext(UserContext);
    const [loggedInUser] = value1;

    console.log(loggedInUser.email);



    return loggedInUser.email != null ? <Outlet /> : <Navigate to="/login"  state={{ from: location }} />
        
        // loggedInUser.email === "admin@gmail.com" ? <Dashboard /> : <Navigate to="/login"  state={{ from: location }} />
        // loggedInUser.email === "entrepreneur@gmail.com" ? <EntrepreneurDashboard />: <Navigate to="/login" state={{ from: location }} />
    


}



