import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const { _id, name, image, description, price, quantity, supplier } = product;
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    }


    return (
        <div>
            <h2 className='text-center m-4'>Update Product</h2>
            <div className='d-flex justify-content-evenly'>
                <div className="card" style={{ width: "25rem" }}>
                    <img className="card-img-top p-3" style={{ height: '300px' }} src={image} alt="Pi electronics product" />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p><small> unique id : {_id}</small></p>
                        <p className="card-text">Description: {description}</p>
                        <h5 className="card-text">Price: {price}</h5>
                        <h5 className="card-text">Quantity: {quantity}</h5>
                        <h5 className="card-text">Supplier: {supplier}</h5>
                        <button className='btn btn-dark'>Delivered</button>
                    </div>
                </div>
                <div>
                    <form className='mx-auto p-4 borders  rounded w-100' >
                        <h3 className='text-center'>Update product details</h3>
                        <p className='fs-5 fw-bold '> Image URL :
                            <input className='w-100 p-1 borders' type="text" name="image" placeholder='Image URL' autoComplete='off' required />
                        </p>
                        <p className='fs-5 fw-bold '> Name :
                            <input className='w-100 p-1  borders' type="text" name="name" placeholder='Name' required autoComplete='off' />
                        </p>
                        <p className='fs-5 fw-bold '> Description :
                            <input className='w-100 p-1 borders' type="text" name="description" placeholder='Short Description' required autoComplete='off' />
                        </p>
                        <p className='fs-5 fw-bold '> Price :
                            <input className='w-100 p-1 borders' type="number" name='price' placeholder='Price' required autoComplete='off' />
                        </p>
                        <p className='fs-5 fw-bold '> Quantity :
                            <input className='w-100 p-1 borders' type="number" name="quantity" placeholder='Quantity' required autoComplete='off' />
                        </p>
                        <p className='fs-5 fw-bold '> Supplier Name:
                            <input className='w-100 p-1 borders' type="text" name="supplier" placeholder='Supplier Name' required autoComplete='off' />
                        </p>
                        <input className='btn btn-dark w-100 mt-4' type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Product;
