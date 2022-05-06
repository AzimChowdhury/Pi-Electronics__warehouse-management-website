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
    // console.log(product)

    const updateProductDetails = (e) => {
        e.preventDefault();

        const newQuantity = e.target.quantity.value;
        const updatedProduct = { name, image, description, supplier, price, newQuantity };

        fetch(`https://limitless-cliffs-34588.herokuapp.com/product/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                alert('product restocked successfully');
                e.target.reset();
            })

    }
    const handleDeliver = () => {
        const newQuantity = quantity - 1;

        const updatedProduct = { name, image, description, supplier, price, newQuantity };
        fetch(`https://limitless-cliffs-34588.herokuapp.com/product/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                alert('product delivered successfully');

            })


    }




    return (
        <div>
            {/* <h2 className='text-center m-2'>Update Product </h2> */}
            <div className='mt-3'>
                <div className="d-flex w-75 mx-auto borders mb-4" >
                    <div className='w-50 p-2'>
                        <img className="w-100" style={{ height: '300px' }} src={image} alt="Pi electronics product" />
                    </div>
                    <div className="card-body ms-2 ">
                        <h3 className="card-title">{name}</h3>
                        <p><small>  id : {_id}</small></p>
                        <p className="card-text">Description: {description}</p>
                        <h6 className="card-text">Price: {price}</h6>
                        <h6 className="card-text">Quantity: {quantity}</h6>
                        <h6 className="card-text">Supplier: {supplier}</h6>
                        <button onClick={handleDeliver} className='btn btn-dark mt-3'>Delivered</button>
                    </div>
                </div>
                <div>
                    <form onSubmit={updateProductDetails} className='mx-auto p-4 borders  rounded w-75' >
                        <h3 className='text-center  '>Restock - {name}</h3>
                        <p className='fs-5 fw-bold w-100 mx-auto  input-group'>
                            <input className='w-75  borders ' type="number" name="quantity" placeholder='Quantity' required autoComplete='off' />
                            <input className='btn btn-dark w-25' type="submit" value="Restock item" />
                        </p>

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
