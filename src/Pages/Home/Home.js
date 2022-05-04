import useProducts from '../../Custom hooks/useProducts';
import Products from '../Products/Products';
import banner from '../../Image/banner.jpg'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
    const [products] = useProducts();
    
    return (
        <div>
            <img className='w-100' src={banner} alt="" />
            <div className='container '>
                <h3 className='text-center mt-3'>products in stock</h3>

                <div className='row' >

                    {  
                        products.splice(0, 6).map(product => <Products
                            key={product._id}
                            product={product}
                        ></Products>) 
                    }
                </div>
                <Link to='/inventory'>
                    <button className='btn btn-dark manage-products py-2 px-5'>Manage Products</button>
                </Link>

            </div>
        </div>
    )
}

export default Home;
