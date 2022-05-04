import React from 'react';
import notFound from '../../Image/notFound.jpg';


function NotFound() {
    return (
        <div className='mx-auto w-50  '>
            <img className='img-fluid w-100' src={notFound} alt="" />
        </div>
    )
}

export default NotFound;
