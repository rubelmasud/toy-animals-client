import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useSetTitle from '../../Hooks/useSteTitle';



const Register = () => {
    const { createRegisterUser, updateUserProfile } = useContext(AuthContext)
    useSetTitle('Register')
    const [error, setError] = useState("");

    const handleCreateUser = (event) => {
        event.preventDefault()

        setError('')
        const form = event.target;
        const name = form.name.value
        const photoUrl = form.PhotoUrl.value
        const email = form.email.value
        const password = form.password.value

        const user = {
            name,
            photoUrl,
            email,
            password
        }
        console.log(user);

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError("password not valid need 8 charecters ");
            return;
        }
        else {

            createRegisterUser(email, password)
                .then((result) => {
                    updateUserProfile(result.user, name, photoUrl)
                    const user = result.user;
                    console.log(user);
                    alert('user register successfully')
                    form.reset()
                })
                .catch((error) => {
                    console.log(error);
                    setError(error.message)
                });
        }

        updateUserProfile({ displayName: name, url: photoUrl })
            .then(() => {
                console.log('user update done');
            })
            .catch((error) => {
                console.log(error);
            })

    }



    return (
        <div className='  w-full lg:flex m-12  items-center'>
            <div className="w-7/12">
                <img className='' src="https://i.ibb.co/SPfdDgr/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.webp" alt="" />
            </div>
            <Form onSubmit={handleCreateUser} className="card-body  shadow-lg  rounded-lg bg-base-200 w-5/12 border mr-28">
                <h1 className="text-5xl font-bold">Register!</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="url" name='PhotoUrl' placeholder="Photo URL" className="input input-bordered" required />
                </div>
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
                <p>Already  have an account ? <Link to='/login' className="link link-info">Place login</Link></p>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className='text-red-600'>{error}</p>
            </Form>

        </div>
    );
};

export default Register;