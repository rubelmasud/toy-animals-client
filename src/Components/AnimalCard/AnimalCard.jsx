import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../Providers/AuthProvider';

const AnimalCard = ({ animal }) => {
    const { user } = useContext(AuthContext)
    const { _id, pictureURL, price, rating, name } = animal

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"


    const handleShowDetailsAlert = () => {
        alert("You have to log in first to view details")
        navigate(from, { replace: true })
    }
    return (
        <div className="card w-90 bg-base-200 shadow hover:-translate-y-5 my-3 duration-200" data-aos="flip-up">
            <img className='h-48 rounded-xl p-3 shadow' src={pictureURL} alt="" />
            <div className="card-body">
                <h2 className="card-title ">{name}</h2>
                <p>Price : {price}</p>
                <p className='text-end flex items-center'>Ratting:
                    <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
                </p>
                <div className="card-actions justify-end">

                    {
                        user ? <Link to={`/details/${_id}`}> <button className="btn btn-primary btn-outline btn-sm">Show Details</button></Link>
                            : <Link onClick={handleShowDetailsAlert} to={`/details/${_id}`}> <button className="btn btn-primary btn-outline btn-sm">Show Details</button></Link>
                    }

                </div>
            </div>
        </div>

    );
};

export default AnimalCard;
