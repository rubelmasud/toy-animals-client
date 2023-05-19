import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    const details = useLoaderData();

    const { name, pictureURL, sellerEmail, sellerName, subCategory, price, rating, description, availableQuantity, } = details

    return (
        <div className="card lg:card-side bg-base-200 shadow-xl m-12">
            <img className='w-96  rounded-md p-2 shadow-lg' src={pictureURL} alt="Album" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-slate-500'>{description}</p>
                <div className="md:flex justify-start gap-20">
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
                <div className="flex">
                    <p><small>Seller Name : {sellerName}</small></p>
                    <p><small>Seller Email : {sellerEmail}</small></p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;