import React from 'react';
import './AddProducts.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddProducts() {

  const [{ email }] = useAuthState(auth);
  // console.log(email)

  const addProducts = (event) => {
    event.preventDefault();
    const image = event.target.image.value;
    const name = event.target.name.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const product = { image, name, description, price, quantity, supplier, email };

    fetch('https://pi-electronics224.herokuapp.com/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    });

    event.target.reset();
    toast("Product added successfully !")

  }

  return (
    <form className='mx-auto my-4 p-4 borders width rounded  ' onSubmit={addProducts}>
      <h3 className='text-center'>Add a new product</h3>
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
    </form>
  )
}

export default AddProducts;
