import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToyRow from '../../Components/MyToyRow/MyToyRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])



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
                        if (result.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== id)
                            setMyToys(remaining)
                        }

                    })
            }
        })

    }

    useEffect(() => {
        const options = { method: 'GET' };

        fetch(`https://toy-animals-server.vercel.app/myToys/${user?.email}`, options)
            .then(response => response.json())
            .then(response => setMyToys(response))
            .catch(err => console.error(err));
    }, [user])

    return (
        <div className='my-12'>
            <h1 className='text-center text-3xl font-semibold underline mb-6'>My Posted Toys</h1>

            <div className="overflow-x-auto w-11/12 mx-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Toy_Photo</th>
                            <th>Toy_Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>delete Toy </th>
                            <th>Update Toy</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            myToys.map((myToy, i) => <MyToyRow
                                i={i}
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                            > </MyToyRow>)

                        }

                    </tbody>

                    <hr />
                </table>
            </div>
        </div>
    );
};

export default MyToys;