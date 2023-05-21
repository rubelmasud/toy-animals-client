import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToyRow = ({ myToy, i, handleDelete }) => {

    const { name, subCategory, pictureURL, price, availableQuantity, _id } = myToy || {}




    return (
        <tr className=''>
            <th>{i + 1}</th>
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
                <button onClick={() => { handleDelete(_id) }} className="btn btn-error btn-outline btn-sm">Delete </button>
            </td>

            <th>
                <div className="card-actions justify-end">
                    <Link to={`/update/${_id}`}> <button className="btn btn-primary btn-outline btn-sm">Update</button></Link>
                </div>
            </th>
        </tr>
    );
};

export default MyToyRow;