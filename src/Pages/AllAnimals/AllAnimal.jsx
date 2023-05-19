import React, { useEffect, useState } from 'react';
import AnimalTable from '../../Components/AnimalTable/AnimalTable';
import { Form } from 'react-router-dom';

const AllAnimal = () => {

    const [allToyAnimal, setAllToyAnimal] = useState([])
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/AllToys/data', {
            method: "GET"
        })
            .then(response => response.json())
            .then(response => setAllToyAnimal(response))
            .catch(err => console.error(err));
    }, [])

    const handleShowAll = () => {
        fetch('http://localhost:5000/AllToys', {
            method: "GET"
        })
            .then(response => response.json())
            .then(response => setAllToyAnimal(response))
            .catch(err => console.error(err));
        setDisable(true)
    }



    const handleShortByName = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        form.reset()

        const options = { method: 'GET' };

        fetch(`http://localhost:5000/AllToys/${name}`, options)
            .then(response => response.json())
            .then(response => setAllToyAnimal(response))
            .catch(err => console.error(err));


    }


    return (
        <div className='my-12 bg-base-200 p-2'>
            <h1 className='text-3xl text-center mb-6'>All Animal Toys</h1>
            <Form onSubmit={handleShortByName} className="mb-6 text-center relative">
                <h1 >Search By Animal Name</h1>
                <input type="text" name='name' placeholder=" Type Animal name" class="input mt-2 input-bordered input-sm w-full max-w-xs rounded-full" required />
                <button className='btn btn-sm btn-primary  md:rounded-r-full static md:absolute left-[713px] bottom-0'>Search</button>
            </Form>
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
                {
                    disable ? <></> : <button onClick={handleShowAll} className='btn btn-primary btn-sm mt-6'>Show All Toys</button>
                }
            </div>
        </div>
    );
};

export default AllAnimal;