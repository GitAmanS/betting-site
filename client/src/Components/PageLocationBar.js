import React from 'react';
import { useLocation } from 'react-router-dom';

const PageLocationBar = () => {
    const location = useLocation();

    return (
        <div className='flex flex-row w-full justify-between items-center text-white bg-teal-400 p-4'>
            <h1 className='font-semibold text-2xl'>{capitalizeFirstLetter(location.pathname.replace('/', ''))}</h1>
            <h1 className='text-sm'>Home {'>'} {capitalizeFirstLetter(location.pathname.replace('/', ''))}</h1>
        </div>
    );
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default PageLocationBar;
