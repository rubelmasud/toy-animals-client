import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Form } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useSetTitle from '../../Hooks/useSteTitle';


const AddToy = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useSetTitle('Add Toy')

    const onSubmit = data => {
        console.log(data)

        fetch("https://toy-animals-server.vercel.app/postToy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your Animal adedded is successfully ! ',
                    showConfirmButton: false,
                    timer: 1500
                })
            });

    };


    return (
        <div className='m-12 '>
            <h2 className='text-3xl text-center font-semibold mb-4 underline'>Add A Toy</h2>
            <div className="grid md:grid-cols-2 items-center">
                <Form onSubmit={handleSubmit(onSubmit)} data-aos="fade-right">
                    <input className='border-2 rounded-md w-5/12 h-14 px-2 my-2 mr-2' defaultValue="toy name" {...register("name")} />

                    <input className='border-2 rounded-md w-6/12 h-14 px-2' defaultValue=" Toy photo url" {...register("pictureURL")} />

                    <input className='border-2 rounded-md w-6/12 h-14 px-2 mr-2' value={user?.displayName} {...register("sellerName")} />

                    <input className='border-2 rounded-md w-10/12 h-14 px-2 my-2 mr-1' value={user?.email} {...register("sellerEmail")} />

                    {/* <input className='border-2 rounded-md w-7/12 h-14 px-2 my-2 mr-1' defaultValue='Sub Category' {...register("subCategory")} /> */}

                    <p className='-mb-5'>Sub Category</p>
                    <select {...register("subCategory")}>
                        <option value="Sea Creatures">Sea Creatures</option>
                        <option value="Wild Animals">Wild Animals</option>
                        <option value="Farm Animals">Farm Animals</option>
                        <option value="Domestic Animals">Domestic Animals</option>
                        <option value="Desert Animals ">Desert Animals </option>
                        <option value="Home Animals">Home Animals </option>
                    </select>


                    <input className='border-2 rounded-md w-5/12 h-14 pl-2 m-2' defaultValue="Price" {...register("price")} />

                    <input className='border-2 rounded-md w-6/12 h-14 px-2 mx-2' defaultValue="Rating" {...register("rating")} />

                    <input type='text' className='border-2 rounded-md w-8/12 h-14 px-2 my-2' defaultValue="Available quantity" {...register("availableQuantity")} />

                    <input className='border-2 rounded-md w-11/12 h-14 px-2 ' defaultValue="Detail description" {...register("description")} />


                    <div className="text-center justify-center mx-auto">
                        <input className="bg-blue-800 w-10/12 font-semibold text-white px-8 py-2 mt-12 " value="Post Toy" type="submit" />
                    </div>
                </Form>
                <div className="">
                    <img src="https://i.ibb.co/vQPHmLD/toy.png" alt="toy" border="0" data-aos="fade-left" />
                </div>
            </div>
        </div>
    );
};

export default AddToy;
