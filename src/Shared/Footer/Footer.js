import React from 'react'

function Footer() {
    return (
        <div className='bg-dark w-100 text-white mt-5 p-5 d-flex justify-content-around'>
            <div>
                <h5>Pi-electronics</h5>
                <p className='text-white'>8073-lois center</p>
                <p className='text-white'>Times square , New York</p>
            </div>
            <div>
                <p>Copyright - {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer;
