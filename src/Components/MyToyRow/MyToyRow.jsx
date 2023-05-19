import React from 'react';
import { Link } from 'react-router-dom';

const MyToyRow = ({ myToy }) => {

    const { name, subCategory, pictureURL, price, availableQuantity, _id } = myToy || {}

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you went to delete')
        if (proceed) {
            fetch(`http://localhost:5000/myToys/${id}`, {
                method: "delete"
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })
        }
    }
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
                <button onClick={() => { handleDelete(_id) }} className="btn btn-primary btn-outline btn-sm">Delete </button>
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