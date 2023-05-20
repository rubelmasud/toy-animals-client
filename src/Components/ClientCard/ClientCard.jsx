import { Rating } from '@smastrom/react-rating';
import React from 'react';

const ClientCard = ({ client }) => {
    const { name, rating, image, email, phone } = client || {}
    console.log(client);
    return (

        <div className="card p-4 shadow-xl my-4" data-aos="flip-left">
            <div className=" flex items-center gap-3">
                <div class="avatar online ">
                    <div class="w-24 rounded-full justify-center mx-auto text-center animate-bounce">
                        <img src={image} />
                    </div>
                </div>
                <div className="card-actions text-center justify-center">
                    <p><small>{name}</small></p>
                    <p className='w-full'><small>{phone}</small></p>
                    <p className='text-end flex items-center'>
                        <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
                    </p>

                </div>
            </div>
        </div>

    );
};

export default ClientCard;