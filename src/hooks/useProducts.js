import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://obscure-journey-61930.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [setProducts]);
    // return necessary things
    return [products];
}

export default useProducts;