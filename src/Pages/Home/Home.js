import React, { useEffect, useState } from 'react'

function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h3>this is home page</h3>
            <p>{products.length}</p>
        </div>
    )
}

export default Home;
