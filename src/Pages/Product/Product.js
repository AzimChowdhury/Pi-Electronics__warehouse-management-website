import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css';



function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://limitless-cliffs-34588.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id, product])
    const { _id, name, image, description, price, quantity, supplier } = product;
    const navigate = useNavigate();

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
                toast("Product restock successfully !")
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
                toast("Product delivered successfully !")

            })
    }

    const handleDelete = (id) => {
        const sure = window.confirm('Are you sure you want to delete ? ')
        if (sure) {
            fetch(`https://limitless-cliffs-34588.herokuapp.com/product/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json)
                .then(data => {
                    toast("Product deleted successfully !")

                    navigate('/inventory')
                })
        }
    }



    return (
        <div>
            {/* <h2 className='text-center m-2'>Update Product </h2> */}
            <div className='mt-3'>
                <div className="details-card w-75 mx-auto borders mb-4" >
                    <div className='div-width p-2'>
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
                        <br />
                        <button onClick={() => handleDelete(_id)} className='btn btn-danger mt-3'> Delete {name}</button>
                    </div>
                </div>
                <div>
                    <form onSubmit={updateProductDetails} className='mx-auto p-4 borders  rounded w-75' >
                        <h3 className='text-center  '>Restock - {name}</h3>
                        <p className='fs-5 fw-bold w-100 mx-auto  input-group'>
                            <input className='field-width  borders ' type="number" name="quantity" placeholder='Quantity' required autoComplete='off' />
                            <input className='btn btn-dark btn-width' type="submit" value="Restock item" />
                        </p>

                    </form>
                </div>
            </div>
            <Link to='/inventory'>
                <button className='btn btn-dark manage-products py-2 px-5'>Manage Products</button>
            </Link>
            <ToastContainer
                position="top-center"
                autoClose={6000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Product;