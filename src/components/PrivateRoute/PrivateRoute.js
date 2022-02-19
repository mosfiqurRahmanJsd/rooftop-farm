import React from "react";
import { useContext } from "react";

import { UserContext } from "../../App";
import { Route, Navigate } from 'react-router-dom';
import Pay from "../Pay/Pay";




function PrivateRoute({ children, ...rest }) {
    const { value1 } = useContext(UserContext);
    const [loggedInUser] = value1;

    const { email } = loggedInUser;


    return (
      <Route
        {...rest}
        render={({location }) => 
            email ? <Pay />
          : <Navigate 
          to={{
              pathname: '/login',
            state: { from: location },
          }}
          />
        }
      />
    );
  }
  
 
export default PrivateRoute;