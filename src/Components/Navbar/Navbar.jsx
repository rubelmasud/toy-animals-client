import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Images/Logo/images-removebg-preview.png'
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

    const { user } = useContext(AuthContext)

    const items = <>
        <li> <NavLink
            to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>Home
        </NavLink></li>

        <li> <NavLink
            to="/blog" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>Blog
        </NavLink></li>

        <li> <NavLink
            to="/allAnimal" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>All Animal
        </NavLink></li>

        {user ?
            <div className='flex gap-3'>
                <li> <NavLink
                    to="/addToy" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""}>Add Toy
                </NavLink></li>
                <li> <NavLink
                    to="/myToy" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""}>My Toy
                </NavLink></li>
            </div>
            : ''
        }
    </>
    return (
        <div className="navbar bg-base-200  rounded-md shadow-md p-3 md:px-12 items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content bg-base-50 mt-3 p-2 shadow bg-base-100  w-60">
                        {items}
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <Link className="logo" to='/'>Toy Animal</Link>
                    <img className='w-10 h-10 hover:animate-spin ' src={logo} alt="" />
                </div>
            </div >
            <div className="navbar-end hidden lg:flex">
                <ul className="lg:flex gap-4">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <img className='rounded-full mr-2' title={user?.DisplayName} src='' alt="hello" />
                        <button className="btn btn-primary btn-sm btn-outline shadow-md">Logout</button>
                    </>
                    :
                    <Link to='/login'> <button className="btn btn-primary btn-sm btn-outline shadow-md">Login</button></Link>}
            </div>

        </div >
    );
};

export default Navbar;