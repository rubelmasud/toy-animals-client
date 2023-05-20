import React from 'react';
// import banner from '../../asse';

const Header = () => {
    return (
        <div className=' w-full md:h-screen  md:flex items-center bg-slate-100 gap-3' >

            <div className="w-4/12">
                <img src="https://i.ibb.co/vQPHmLD/toy.png" alt="toy" border="0" />
            </div>
            <div className="md:w-7/12 py-6   rounded-lg bg-gradient-to-r from-orange-100 px-6" data-aos="fade-left">
                <h1 className='md:text-6xl text-3xl'> Children Best<span className='text-blue-900 animate-pulse font-bold'> Animals Toys</span> Project !!</h1>
                <p className='text-start my-6  text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea nam pariatur, voluptate soluta rerum facere deserunt itaque sunt debitis reiciendis veniam eligendi ex et sapiente. Impedit dolores perferendis minima consequuntur. Suscipit, cumque quam dolores dicta temporibus molestias quaerat pariatur.</p>
                <button className="btn btn-outline btn-secondary animate-bounce justify-end px-8">visit this side</button>
            </div>

        </div >
    );
};

export default Header;