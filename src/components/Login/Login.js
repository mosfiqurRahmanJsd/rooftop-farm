import React, { useState } from 'react';
import { Link, useLocation, } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.initialize';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';

initializeAuthentication();

const provider = new GoogleAuthProvider();


const Login = () => {
    const location = useLocation();
    console.log('came from', location.state?.from);


    const { value1 } = useContext(UserContext);

    const [loggedInUser, setLoggedInUser] = value1;

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState("");
    

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.

                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(loggedInUser);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });
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
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { displayName, email } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email
                }
                setLoggedInUser(loggedInUser);
                setError('Login Successfully');
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
                        <h3 className="text-center">Login with email and password</h3>

                        <form onSubmit={handleSubmit}>
                            <input
                                className="form-control my-5 input"
                                type="email"
                                name="email"
                                id=""
                                placeholder="Email"
                                onChange={handleEmailChange}
                                required
                            />
                            <input
                                className="form-control my-5 input"
                                type="password"
                                name="password"
                                id=""
                                placeholder="Password"
                                onChange={handlePasswordChange}
                                required
                            />

                            <div className="d-flex justify-content-between ">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="RememberPassword"
                                        name="RememberPassword"
                                        value="RememberPassword"
                                    />
                                    <label
                                        style={{ paddingLeft: "5px", fontWeight: "600" }}
                                        htmlFor="RememberPassword"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                                <div className="row">
                                    <p className="text-success">{error}</p>
                                </div>
                                <Link className="link-color" to="/forgot_password">
                                    Forgot Password
                                </Link>
                            </div>
                            <input
                                className="w-100 login-btn my-3"
                                type="submit"
                                value="Login"
                            />
                        </form>

                        <p className="text-center mt-2">
                            Don't Have Account ?{" "}
                            <Link className="link-color" to="/signup">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container container-sm-fluid ">
                <div className="sign-in">
                    <div className="separator my-3">Or</div>
                    <button
                        onClick={handleGoogleSignIn}
                        className="google-btn btn border w-100 d-flex align-items-center"
                    >
                        <img
                            className="img-fluid mt-2"
                            src="https://i.ibb.co/R0cy8Yn/Group-571.png"
                            alt=""
                        />
                        <h6 className="mx-auto">Continue with Google</h6>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
