import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { loggedUser, signInGoogle } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value
        const password = form.password.value

        // console.log(email, password);

        loggedUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                alert('user login is successful')
            })
            .catch((error) => {
                console.log(error);
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }

    const handleSignInToGoogle = () => {
        signInGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user, hello);
                alert('Login SussesFully ')
            })
            .catch((error) => {
                console.log(error);
            })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-6">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:ml-12">
                        <img className='md:w-10/12 rounded-xl' src='https://i.ibb.co/SPfdDgr/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.webp' alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:mr-28">
                        <Form onSubmit={handleLogin} className="card-body ">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <p>Don t have an account ? <Link to='/register' className="link link-info">Place register</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <div className="divider">OR</div>
                        </Form>
                        <div className="text-center mb-6 mt-0">
                            <button onClick={handleSignInToGoogle} className="btn btn-wide bg-blue-400 btn-sm"><FaGoogle className='text-green-700 w-6 h-6 mx-3 '></FaGoogle> login with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
