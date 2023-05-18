import React, { useEffect, useState } from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';

const ShopByCategory = () => {
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        const options = { method: 'GET' };

        fetch('http://localhost:5000/AllToys', options)
            .then(response => response.json())
            .then(response => setAnimals(response))
            .catch(err => console.error(err));
    }, [])
    return (
        <div className='mt-16'>
            <h2 className='text-4xl font-semibold text-center underline'>Shopping Now !</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 w-11/12 mx-auto">
                {
                    animals.map(animal => <AnimalCard
                        key={animal._id}
                        animal={animal}
                    ></AnimalCard>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;