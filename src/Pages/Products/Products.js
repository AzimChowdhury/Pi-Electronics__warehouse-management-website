import React from 'react';
import './Products.css';
function Products({ product }) {
    const { image, name, price, quantity, supplier, description } = product
    return (
        <div className='col-lg-6 col-sm-12 p-2 m-2 d-flex p-card'>
            <img className='img-fluid' src={image} alt="" />
            <div className='ps-4'>
                <h6>{name}</h6>
                <p>Price: {price} <small>tk</small></p>
                <p>Quantity:{quantity}</p>
                <p>Supplier: {supplier}</p>
                <p> Description:{description}</p>
                <button className='btn btn-dark' >Manage</button>
            </div>
        </div>
    )
}

export default Products;
