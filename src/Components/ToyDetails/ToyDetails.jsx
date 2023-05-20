import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaGoogle, FaYoutube, FaInstagramSquare, FaTwitter, FaCopyright } from 'react-icons/fa';

const ToyDetails = () => {
    const details = useLoaderData();

    const { name, pictureURL, sellerEmail, sellerName, subCategory, price, rating, description, availableQuantity, } = details || {}

    return (
        <div className="card lg:card-side bg-base-200 shadow-xl m-12" data-aos="flip-left">
            <img className='w-96  rounded-md p-2 shadow-lg' src={pictureURL} alt="Album" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-slate-500'>{description}</p>
                <div className="md:flex justify-start gap-20 my-3">
                    <div className="">
                        <p><span className='font-semibold'>Sub Category</span> : {subCategory}</p>
                        <p><span className='font-semibold'>Price</span> : {price}</p>
                    </div>
                    <div className="">
                        <p><span className='font-semibold'>Available Quantity</span> : {availableQuantity}</p>
                        <p className='text-end flex items-center'>Ratting:
                            <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
                        </p>
                    </div>
                </div>
                <hr />
                <h5 className='font-semibold text-orange-500'>Author Info</h5>
                <div className="flex justify-between items-center">
                    <div className="">
                        <p><small>Seller Name : {sellerName}</small></p>
                        <p><small>Seller Email : {sellerEmail}</small></p>
                    </div>
                    <div className="flex gap-4 ">
                        <Link to='https://www.google.com/'>   <FaGoogle className='w-4 h-4 text-green-500'></FaGoogle></Link>
                        <Link to='https://www.youtube.com/'>   <FaYoutube className='w-4 h-4 text-red-500'></FaYoutube></Link>
                        <Link to='https://www.instagram.com/'> <FaInstagramSquare className='w-4 h-4 text-red-800'></FaInstagramSquare></Link>
                        <Link to='https://www.twitter.com/'>  <FaTwitter className='w-4 h-4 text-blue-700'></FaTwitter></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;