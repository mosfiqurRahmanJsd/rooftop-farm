import React, { useRef } from 'react'
import './AddProduct.css'
export default function AddProduct() {

    const nameRef = useRef()
    const imgRef = useRef()
    const starRef = useRef()
    const priceRef = useRef()

   

    const handleAddProduct = (e) => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const rating = starRef.current.value;
        const price = priceRef.current.value;
       

        const newProduct = { name, img, rating, price };

        fetch('https://obscure-journey-61930.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('Successfully added product')
                e.target.reset();
            }
        })
        e.preventDefault();
    }



    return (
        <div className="add-product container">
            <h1>Added A New Product</h1>
            <form onSubmit={handleAddProduct} className="form-inline">
                
                    <label htmlFor="productName">Product Name :</label>
                    <input type="text" id="productName" ref={nameRef} />
                
                    <label htmlFor="productImg">Product Image URL :</label>
                    <input type="url" ref={imgRef} id="productImg" />
               
               
                    <label htmlFor="productRatings">Product Ratings :</label>
                    <input type="number" ref={starRef} id="productRatings" />
                
                    <label htmlFor="productPrice">Product Price :</label>
                    <input type="number" ref={priceRef} id="productPrice" />
               
                
                
                
                <input type="submit" value="Add" />

            </form>

           
        </div>
    )
}
