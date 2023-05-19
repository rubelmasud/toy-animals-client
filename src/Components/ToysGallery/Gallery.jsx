import React from 'react';

const Gallery = () => {
    return (
        <div class="container mx-auto px-5 py-2 lg:px-14 lg:pt-20  ">
            <h2 className='text-4xl text-center mb-16  font-semibold underline'>Animals Photo Gallery !</h2>

            <div class=" mx-auto flex flex-wrap md:m-2">
                <div class="flex w-1/2 flex-wrap">
                    <div class="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center hover:animate-bounce"
                            src="https://i.ibb.co/RSHfvJn/cute-teddy-bear-144627-15238.jpg" />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center hover:animate-bounce"
                            src="https://i.ibb.co/M5Rb1v4/cute-fluffy-monkey-toys-23-2149642394.jpg" />
                    </div>
                    <div class="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/X7Fymx0/3d-rendering-wild-animal-23-2149962421.jpg" />
                    </div>
                </div>
                <div class="flex w-1/2 flex-wrap">
                    <div class="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/VtHbgrJ/3d-illustration-children-s-toy-bear-23-2149345293.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center hover:animate-bounce"
                            src="https://i.ibb.co/k8ZGBqN/3d-dog-illustration-isolated-white-background-puppy-3d-illustration-isolated-white-background-516484.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-96 w-full rounded-lg object-cover object-center hover:animate-bounce"
                            src="https://i.ibb.co/F5D3cb2/fluffy-toy-texture-close-up-23-2149686878.jpg" />
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Gallery;