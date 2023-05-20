import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='bg-base-200 w-full h-screen'>
            <h1 className='text-5xl text-center pt-12 font-mono font-bold' data-aos="fade-right">OoPs! Data Is Not Fount!!!!</h1>
            <img className='mx-auto w-6/12 h-80' data-aos="flip-left" src="https://i.ibb.co/TvJw5Sp/png-transparent-404-universe-404-digital-universe-thumbnail-removebg-preview.png" alt="png-transparent-404-universe-404-digital-universe-thumbnail-removebg-preview" border="0"></img>
            <div className=" text-center" data-aos="fade-left">
                <Link to='/'><button className="btn btn-warning  btn-sm px-10">Go back</button></Link>
            </div>
        </div>
    );
};

export default Error;