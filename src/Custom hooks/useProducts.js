import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pi-electronics-2244.herokuapp.com/products',{
            method:"GET",
            mode:"cors",
            headers:{
                'content-type':'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]

}
export default useProducts;