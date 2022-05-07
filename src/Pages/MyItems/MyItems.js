import React ,{useState, useEffect} from 'react'
import useProducts from '../../Custom hooks/useProducts';
import Products from '../Products/Products';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


function MyItems() {
    const [{ email }] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);
    useEffect(()=>{
       const myItems = async ()=>{
            const {data}= await axios.get(`http://localhost:5000/product?email=${email}`,{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('jwt-token')}`
                }
            })
            setMyProducts(data)
       }

       myItems();

     } , [email])
     


     
    

    // const [products] = useProducts();
    // const myItems = products.filter(product => product.email === email)

    return (

        <div className='container'>
            <h3 className='text-center m-2'>My Items</h3>
            <div className='row'>
                {
                    myProducts.length === 0 ?
                        <div>
                            <h3 className='text-center m-5'>You have not added any products yet !</h3>
                        </div>
                        :
                        <div>
                            {
                                myProducts.map(product => <Products
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