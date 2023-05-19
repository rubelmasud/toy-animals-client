import React, { useEffect, useState } from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';

const ShopByCategory = () => {
    const [animals, setAnimals] = useState([])
    const [activeTab, setActiveTab] = useState('')

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }

    useEffect(() => {
        const options = { method: 'GET' };

        fetch(`http://localhost:5000/AllToys/${activeTab}`, options)
            .then(response => response.json())
            .then(response => setAnimals(response))
            .catch(err => console.error(err));
    }, [activeTab])
    return (
        <div className='mt-16'>
            <h2 className='text-4xl font-semibold text-center underline'>Shopping By Category!</h2>
            <div className="tabs font-semibold justify-center mt-8">
                <a onClick={() => handleTabClick('Math Toys')}
                    className={`tab tab-lifted ${activeTab == 'Math Toys' ? 'bg-purple-700 text-white animate-bounce' : ''}`}>
                    Math Toys
                </a>

                <a onClick={() => handleTabClick('Language Toys')}
                    className={`tab tab-lifted ${activeTab == 'Language Toys' ? 'bg-purple-700 text-white animate-bounce ' : ''}`}>
                    Language Toys
                </a>
                <a onClick={() => handleTabClick('Science Toys')}
                    className={`tab tab-lifted  ${activeTab == 'Science Toys' ? 'bg-purple-700 text-white animate-bounce ' : ''}`}>
                    Science Toys
                </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-6 w-11/12 mx-auto">
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