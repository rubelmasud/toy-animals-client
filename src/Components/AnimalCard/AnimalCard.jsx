import React from 'react';

const AnimalCard = ({ animal }) => {
    const { description, pictureURL, price, quantity, rating, subCategory, name } = animal || ""
    console.log(animal);
    return (

        <div className="card w-96 bg-base-200 shadow hover:-translate-y-5 duration-200">
            <img className='h-60 rounded-xl p-3' src={pictureURL} alt="" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price : {price}</p>
                <p>Ratting: {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-outline btn-sm">Show Details</button>
                </div>
            </div>
        </div>

    );
};

export default AnimalCard;