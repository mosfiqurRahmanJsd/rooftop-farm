import React, { useRef } from 'react'
import './AddRooftop.css'
export default function AddRooftop() {

    const squareRef = useRef()
    const locationRef = useRef()
    const imgRef = useRef()
    const mapRef = useRef()
    const detailRef = useRef()
    const moreDetailRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const priceRef = useRef()
    const nameRef= useRef()

   

    const handleAddRooftop = (e) => {
        const squareFeet = squareRef.current.value;
        const location = locationRef.current.value;
        const image = imgRef.current.value;
        const googleMap = mapRef.current.value; 
        const someDetail = detailRef.current.value;
        const moreDetail = moreDetailRef.current.value;
        const phone = phoneRef.current.value;
        const email = emailRef.current.value;
        const price = priceRef.current.value;
        const name = nameRef.current.value;
       

        const newRooftop = { name, squareFeet, location, image, googleMap, someDetail, moreDetail, phone, email, price };

        fetch('https://obscure-journey-61930.herokuapp.com/rooftop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRooftop)
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
        <div className="add-rooftop container">
            <h1>Add a New Rooftop Farm</h1>


            <form onSubmit={handleAddRooftop} className="form-inline">
                    <h1>Rooftop Details :</h1>
                
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" ref={nameRef} /> <br />



                    <label htmlFor="squareFeet">How many square feet? :</label>
                    <input type="number" id="squareFeet" ref={squareRef} /> <br />

                    <label htmlFor="location">Location :</label>
                    <input type="text" id="location" ref={locationRef} /> <br />

                    <label htmlFor="img">Rooftop Image URL :</label>
                    <input type="url" ref={imgRef} id="img" /> <br />


                    <label htmlFor="googleMap">Google map location URL :</label>
                    <input type="url" ref={mapRef} id="googleMap" /> <br />


                  
                    <label htmlFor="someDetails">Some Details :</label>
                    <input type="text" ref={detailRef} id="someDetails" /> <br />

                    <label htmlFor="moreDetails">More Details :</label>
                    <input type="text" ref={moreDetailRef} id="moreDetails" /> <br />

                    <label htmlFor="phoneNumber">Phone Number :</label>
                    <input type="number" ref={phoneRef} id="phoneNumber" /> <br />

                    

                    <label htmlFor="emailAddress">E-mail :</label>
                    <input type="email" ref={emailRef} id="emailAddress" /> <br />


                    
                
                    <label htmlFor="priceRoof">Price BDT :</label>
                    <input type="number" ref={priceRef} id="priceRoof" /> <br />
                
                
                
                <input type="submit" value="Add" />

            </form>
        </div>
    )
}
