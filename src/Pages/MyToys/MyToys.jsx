import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToyRow from '../../Components/MyToyRow/MyToyRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    console.log(user);


    useEffect(() => {
        const options = { method: 'GET' };

        fetch(`http://localhost:5000/myToys/${user?.email}`, options)
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
                            myToys.map(myToy => <MyToyRow
                                key={myToy._id}
                                myToy={myToy}
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