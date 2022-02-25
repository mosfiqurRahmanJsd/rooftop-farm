import React, { useRef } from 'react'
export default function AddProduct() {

    const nameRef = useRef()
    const imgRef = useRef()
    const starRef = useRef()
    const priceRef = useRef()

   

    const handleAddProduct = (e) => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const star = starRef.current.value;
        const price = priceRef.current.value;
       

        const newProduct = { name, img, star, price };

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
            <h1 className="text-center">Added A New Product :</h1>
            <form onSubmit={handleAddProduct} className="form-inline form-group">
                
                    <label htmlFor="productName">Product Name :</label>
                    <input className="form-control" type="text" id="productName" ref={nameRef} />
                
                    <label htmlFor="productImg">Product Image URL :</label>
                    <input className="form-control"  type="url" ref={imgRef} id="productImg" />
               
               
                    <label htmlFor="productRatings">Product Ratings :</label>
                    <input className="form-control" type="number" ref={starRef} id="productRatings" />
                
                    <label htmlFor="productPrice">Product Price :</label>
                    <input className="form-control" type="number" ref={priceRef} id="productPrice" />
               
                    <br />

                
                <input className="form-control" type="submit" value="Add" />

            </form>

           
        </div>
    )
}
