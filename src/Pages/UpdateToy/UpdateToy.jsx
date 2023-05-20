import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const updateToy = useLoaderData()

    const { price, availableQuantity, description, _id } = updateToy || {}

    // const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onUpdate = data => {
        console.log(data)

        fetch(`https://toy-animals-server.vercel.app/postToy/${_id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your updated successfully !!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });

    };



    return (
        <div className='my-12 w-11/12 mx-auto'>
            <h1 className='text-center text-3xl font-semibold underline mt-6'>Updated This Toy</h1>
            <div className="grid md:grid-cols-2 items-center">
                <Form onSubmit={handleSubmit(onUpdate)}>
                    <input className='border-2 rounded-md w-5/12 h-14 px-2 my-2' defaultValue={price} {...register("price")} />


                    <input type='number' className='border-2 rounded-md w-5/12 h-14 px-2 my-2' defaultValue={availableQuantity} {...register("availableQuantity")} />

                    <input className='border-2 rounded-md w-11/12 h-14 px-2 ' defaultValue={description} {...register("description")} />

                    <div className="text-center justify-center mx-auto">
                        <input className="bg-blue-800 w-10/12 font-semibold text-white px-8 py-2 mt-12 " value="Updated Toy" type="submit" />
                    </div>
                </Form>
                <img src="https://i.ibb.co/vQPHmLD/toy.png" alt="toy" border="0" />
            </div>

        </div>
    );
}

export default UpdateToy;