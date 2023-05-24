import React from 'react';
import { Link } from 'react-router-dom';

const AnimalTable = ({ animal, i }) => {

    const { name, subCategory, pictureURL, price, availableQuantity, sellerName, _id } = animal || {}
    return (

        <tr className=''>
            <p className='text-blue-600 font-sans font-bold mt-10'>{i + 1}</p>
            <th>
                <div className="avatar ">
                    <div className="w-24 mask mask-squircle shadow-lg">
                        <img className='' src={pictureURL} />
                    </div>
                </div>
            </th>
            <th>
                <h3>{name}</h3>
            </th>
            <td>
                <h4>{subCategory}</h4>
            </td>
            <td>
                <h3>${price}</h3>
            </td>
            <td>
                <h4>{availableQuantity}</h4>
            </td>
            <td>
                <h4>{sellerName}</h4>
            </td>

            <th>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}> <button className="btn btn-primary btn-outline btn-sm">Show Details</button></Link>
                </div>
            </th>
        </tr>

    );
};

export default AnimalTable;