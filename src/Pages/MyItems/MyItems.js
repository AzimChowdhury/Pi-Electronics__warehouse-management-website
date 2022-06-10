import React from 'react'
import Products from '../Products/Products';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';


function MyItems() {
    const [user,loading] = useAuthState(auth);
    const { data, isLoading } = useQuery('myItems', () => fetch(`https://pi-electronics-2244.herokuapp.com/product?email=${user.email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwt-token')}`
        }
    }).then(res => res.json()))

    if (isLoading||loading) {
        return <>
            <div style={{ width: '20px' }} className='mt-5 mx-auto'>
                <div className='spinner-border' role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    }

    




    return (

        <div className='container'>
            <h3 className='text-center m-2'>My Items</h3>
            <div className='row'>
                {
                    data.length === 0 ?
                        <div>
                            <h3 className='text-center m-5'>You have not added any products yet !</h3>
                        </div>
                        :
                        <div>
                            {
                                data?.map(product => <Products
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