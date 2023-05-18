import React from 'react';
// import banner from '../../asse';

const Header = () => {
    return (
        <div className='banner w-full md:h-screen  pl-56 md:pt-28 ' >
            <div className="w-8/12 mx-auto bg-gradient-to-r from-orange-50 p-12 rounded-lg">
                <h1 className='text-6xl '>Best Children <span className='text-blue-900 animate-pulse font-bold'> Animals Toys</span> Project !!</h1>
                <p className='text-start my-6  text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea nam pariatur, voluptate soluta rerum facere deserunt itaque sunt debitis reiciendis veniam eligendi ex et sapiente. Impedit dolores perferendis minima consequuntur. Suscipit, cumque quam dolores dicta temporibus molestias quaerat pariatur.</p>
                <button className="btn btn-outline btn-secondary animate-bounce justify-end px-8">visit this side</button>
            </div>
        </div >
    );
};

export default Header;