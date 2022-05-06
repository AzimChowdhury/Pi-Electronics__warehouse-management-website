import React from 'react'
import useProducts from '../../Custom hooks/useProducts';
import Products from '../Products/Products';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


function MyItems() {
    const [{ email }] = useAuthState(auth);
    const [products] = useProducts();
    const myItems = products.filter(product => product.email === email)

    return (

        <div className='container'>
            <h3 className='text-center m-2'>My Items</h3>
            <div className='row'>
                {
                    myItems.length === 0 ?
                        <div>
                            <h3 className='text-center m-5'>You have not added any products yet !</h3>
                        </div>
                        :
                        <div>
                            {
                                myItems.map(product => <Products
                                    key={product._id}
                                    product={product}
                                ></Products>)
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default MyItems;
