import React, { useRef, useState } from 'react'
import axios from "axios";
import './AddProduct.css';
export default function AddProduct() {

    const nameRef = useRef()
    const starRef = useRef()
    const priceRef = useRef()

    const [img, setImg] = useState(null);

   

    const handleAddProduct = (e) => {
        const name = nameRef.current.value;
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

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "7cfe7387c84999a6c4f1dc752c2ce9cf");
        imageData.append("image", event.target.files[0]);
        axios
          .post("https://api.imgbb.com/1/upload", imageData)
          .then(function (response) {
            setImg(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
      };


    return (
        <div className="add-product container dash-color py-5 mt-5 rounded text-color">
            <h1 className="text-center ">Added A New Fresh Vegetable :</h1>
            <form onSubmit={handleAddProduct} className="form-inline form-group">
            <h2>Vegetable Details :</h2>
                
                    <label htmlFor="productName">Product Name :</label>
                    <input className="form-control" type="text" id="productName" ref={nameRef} />
                
                    <label htmlFor="productImg">Product Image URL :</label>
                    <input className="form-control"  type="file" onChange={handleImageUpload} id="productImg" />
               
               
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
