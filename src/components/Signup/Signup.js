import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../../App';




const Signup = () => {


    const { value1 } = useContext(UserContext);

    const [loggedInUser, setLoggedInUser] = value1;
    
    const [displayName, setDisplayName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");


    

    const auth = getAuth();



 
    const handleNameChange = (e) => {
        setDisplayName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

   
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const { displayName, email } = result.user;
            const loggedInUser = {
                name: displayName,
                email: email
            }
            setLoggedInUser(loggedInUser);
            
            setSuccess('Account Creation Successfully');
            setError('');
        })
        .catch(error => {
            setError(error.message, error);
        })
        
    }


    return (
        <div>
            <div className="container">
                <div className="card d-block mx-auto login">
                    <div className="card-body p-2 p-md-5">
                        <h4>Create an Account</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="from-group">
                                <input
                                    className="form-control my-4 input"
                                    type="text"
                                    name="name"
                                    id=""
                                    placeholder="Name"
                                    onBlur={handleNameChange}
                                    required
                                />
                            </div>

                            <div className="from-group">
                                <input
                                    className="form-control my-4 input"
                                    type="email"
                                    name="email"
                                    id=""
                                    placeholder="Email"
                                    onBlur={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="from-group">
                                <input
                                    className="form-control my-4 input"
                                    type="password"
                                    name="password"
                                    id=""
                                    placeholder="Password"
                                    onBlur={handlePasswordChange}
                                    required
                                />
                            </div>
                            <div className="row">
                                <p className="text-danger">{error}</p>
                                <p className="text-success">{success}</p>
                            </div>

                        

                            <input
                                className="w-100 login-btn my-3"
                                type="submit"
                                value="Create an account"
                            />
                        </form>

                        <p className="text-center mt-2">
                            Already Have an Account ?
                            <Link className="link-color" to="/login">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Signup;
