import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://limitless-cliffs-34588.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id, product])
    const { _id, name, image, description, price, quantity, supplier } = product;


    const updateProductDetails = (e) => {
        e.preventDefault();
        const newPrice = e.target.price.value;
        const newQuantity = e.target.quantity.value;
        const updatedProduct = { name, image, description, supplier, newPrice, newQuantity };

        fetch(`https://limitless-cliffs-34588.herokuapp.com/product/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                alert('product details updated successfully');
                e.target.reset();
            })

    }



    return (
        <div>
            <h2 className='text-center m-4'>Update Product</h2>
            <div className='d-flex justify-content-evenly'>
                <div className="card" style={{ width: "25rem" }}>
                    <img className="card-img-top p-3" style={{ height: '300px' }} src={image} alt="Pi electronics product" />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p><small>  id : {_id}</small></p>
                        <p className="card-text">Description: {description}</p>
                        <h6 className="card-text">Price: {price}</h6>
                        <h6 className="card-text">Quantity: {quantity}</h6>
                        <h6 className="card-text">Supplier: {supplier}</h6>
                        <button className='btn btn-dark mt-3'>Delivered</button>
                    </div>
                </div>
                <div>
                    <form onSubmit={updateProductDetails} className='mx-auto p-4 borders  rounded w-100' >
                        <h3 className='text-center'>Update product details</h3>
                        <p className='fs-5 fw-bold '> Price :
                            <input className='w-100 p-1 borders' type="number" name='price' placeholder='Price' required autoComplete='off' />
                        </p>
                        <p className='fs-5 fw-bold '> Quantity :
                            <input className='w-100 p-1 borders' type="number" name="quantity" placeholder='Quantity' required autoComplete='off' />
                        </p>
                        <input className='btn btn-dark w-100 mt-4' type="submit" value="Update Product Details" />
                    </form>
                </div>
            </div>
            <Link to='/inventory'>
                <button className='btn btn-dark manage-products py-2 px-5'>Manage Products</button>
            </Link>
        </div>
    )
}

export default Product;
