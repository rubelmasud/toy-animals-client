import React from 'react';
import logo from '../../assets/Images/Logo/images-removebg-preview.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-center">
            <div className="footer p-10  text-base-content">
                <div className=''>
                    <img className='w-10 h-10' src={logo} alt="" />
                    <Link className="logo" to='/'>Toy Animal</Link>
                </div>
                <div>
                    <span className="footer-title">Support Me</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-warning absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p>Copyright</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;