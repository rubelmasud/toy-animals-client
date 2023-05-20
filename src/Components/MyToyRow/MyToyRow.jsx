import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToyRow = ({ myToy, toys, setToys }) => {

    const { name, subCategory, pictureURL, price, availableQuantity, _id } = myToy || {}

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-animals-server.vercel.app/myToys/${id}`, {
                    method: "delete"
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(cof => cof._id !== _id);
                            setToys(remaining);
                        }

                    })
            }
        })

    }

    //         if (result.deletedCount > 0) {
    //             const swalWithBootstrapButtons = Swal.mixin({
    //                 customClass: {
    //                     confirmButton: 'btn btn-success ',
    //                     cancelButton: 'btn btn-danger mx-4 bg-red-500'
    //                 },
    //                 buttonsStyling: false
    //             })

    //             swalWithBootstrapButtons.fire({
    //                 title: 'Are you sure?',
    //                 text: "You won't be to delete this animal ?",
    //                 icon: 'warning',
    //                 showCancelButton: true,
    //                 confirmButtonText: 'Yes, delete it!',
    //                 cancelButtonText: 'No, cancel! ',
    //                 reverseButtons: true
    //             }).then((result) => {
    //                 if (result.isConfirmed) {
    //                     swalWithBootstrapButtons.fire(
    //                         'Deleted!',
    //                         'Your file has been deleted.',
    //                         'success'
    //                     )
    //                 } else if (
    //                     /* Read more about handling dismissals below */
    //                     result.dismiss === Swal.DismissReason.cancel
    //                 ) {
    //                     swalWithBootstrapButtons.fire(
    //                         'Cancelled',
    //                         'Your imaginary file is safe :)',
    //                         'error'
    //                     )
    //                 }
    //             })
    //             const remaining = toys.filter(toy => toy._id !== _id)
    //             setToys(remaining)
    //         }



    //     }

    // }
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