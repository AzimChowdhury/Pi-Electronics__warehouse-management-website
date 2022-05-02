import React from 'react';
import './AddProducts.css';

function AddProducts() {
  const addProducts = (event) => {
    event.preventDefault();
    const image = event.target.image.value;
    const name = event.target.name.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const product = { image, name, description, price, quantity, supplier };

    fetch('https://limitless-cliffs-34588.herokuapp.com/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    });

    event.target.reset();
    alert('product added')
  }

  return (
    <form className='mx-auto my-4 p-4 borders  rounded w-50' onSubmit={addProducts}>
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
    </form>
  )
}

export default AddProducts;
