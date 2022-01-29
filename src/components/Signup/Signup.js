import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Signup = () => {
    const googleSignIn = () => {

    }


    const handleBlur = () => {

    }

    const handleSubmit = () => {

    }



    return (
        <div>
            <Header></Header>
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
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>

                            <div className="from-group">
                                <input
                                    className="form-control my-4 input"
                                    type="email"
                                    name="email"
                                    id=""
                                    placeholder="Username or Email"
                                    onBlur={handleBlur}
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
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>

                            <div className="from-group">
                                <input
                                    className="form-control my-4 input"
                                    type="password"
                                    name="confirm_password"
                                    id=""
                                    placeholder="Confirm Password"
                                    required
                                />
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
            <div className="container container-sm-fluid ">
                <div className="sign-in">
                    <div className="separator my-3">Or</div>
                    <button
                        onClick={googleSignIn}
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

export default Signup;
