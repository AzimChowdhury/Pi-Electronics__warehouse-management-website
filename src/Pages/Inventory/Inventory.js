import React from 'react'
import { Link } from 'react-router-dom';
import useProducts from '../../Custom hooks/useProducts';
import Products from '../Products/Products';

function Inventory() {
    const [products] = useProducts();
    return (
        <div className='container mt-3'>
            <h2 style={{ marginLeft: "30%" }}>Inventory of pi electronics</h2>
            <div className='row'>
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>
            <Link to='/add'><button style={{ marginLeft: "40%" }} className='btn btn-dark py-2  px-5 fs-5 mt-4' >Add new item</button></Link>
        </div>
    )
}

export default Inventory;