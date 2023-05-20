import React, { useEffect, useState } from 'react';
import ClientCard from '../ClientCard/ClientCard';

const MyClient = () => {
    const [clients, setClient] = useState([])

    useEffect(() => {
        fetch('/client.json')
            .then(res => res.json())
            .then(data => {
                setClient(data);
            })
    }, [])
    return (
        <div className='lg:py-10 mb-6'>
            <h3 className='text-3xl font-semibold text-center underline mb-6'>My Happy Client</h3>
            <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    clients.map(client => <ClientCard
                        key={client.id}
                        client={client}
                    ></ClientCard>)
                }
            </div>
        </div >
    );
};

export default MyClient;