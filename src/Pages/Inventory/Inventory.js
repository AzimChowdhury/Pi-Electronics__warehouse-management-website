import React from 'react'
import useProducts from '../../Custom hooks/useProducts';
import Products from '../Products/Products';

function Inventory() {
    const [products] = useProducts();
    return (
        <div className='container'>
            <h2>Inventory of pi electronics</h2>
            <div className='row'>
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>
        </div>
    )
}

export default Inventory;