import React from 'react';
import notFound from '../../../images/notFound.png';

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <img className='w-75' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;