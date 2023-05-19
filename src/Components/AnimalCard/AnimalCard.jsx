import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const AnimalCard = ({ animal }) => {
    const { _id, pictureURL, price, rating, name } = animal

    return (
        <div className="card w-90 bg-base-200 shadow hover:-translate-y-5 my-3 duration-200">
            <img className='h-60 rounded-xl p-3 shadow' src={pictureURL} alt="" />
            <div className="card-body">
                <h2 className="card-title ">{name}</h2>
                <p>Price : {price}</p>
                <p className='text-end flex items-center'>Ratting:
                    <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}> <button className="btn btn-primary btn-outline btn-sm">Show Details</button></Link>
                </div>
            </div>
        </div>

    );
};

export default AnimalCard;
