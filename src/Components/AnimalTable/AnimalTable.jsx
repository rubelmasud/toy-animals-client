import React from 'react';
import { Link } from 'react-router-dom';

const AnimalTable = ({ animal }) => {
    console.log(animal);
    const { name, subCategory, pictureURL, price, availableQuantity, sellerName, _id } = animal || ''
    return (

        <tr className=''>
            <th>
                <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                        <img src={pictureURL} />
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
                <h3>{price}</h3>
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