import React, { useEffect, useState } from 'react';
import AnimalTable from '../../Components/AnimalTable/AnimalTable';

const AllAnimal = () => {

    const [allToyAnimal, setAllToyAnimal] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/AllToys', {
            method: "GET"
        })
            .then(response => response.json())
            .then(response => setAllToyAnimal(response))
            .catch(err => console.error(err));
    }, [])
    console.log(allToyAnimal);

    return (
        <div className='my-12'>
            <h1 className='text-3xl mt-12 text-center mb-6'>All Animal Toys</h1>

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
                            <th>Seller-Name</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            allToyAnimal.map(animal =>
                                <AnimalTable
                                    key={animal._id}
                                    animal={animal}
                                >

                                </AnimalTable>)
                        }

                    </tbody>

                    <hr />
                </table>
            </div>
            <div className="w-full text-center">
                <button className='btn btn-primary btn-sm mt-6'>Show All Toys</button>
            </div>
        </div>
    );
};

export default AllAnimal;