import React, { useRef, useState } from 'react'
import axios from "axios";
export default function AddRooftop() {

    const squareRef = useRef()
    const locationRef = useRef()
    const mapRef = useRef()
    const detailRef = useRef()
    const moreDetailRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const priceRef = useRef()
    const nameRef= useRef()

    const [image, setImage] = useState(null);


    const handleAddRooftop = (e) => {
        const squareFeet = squareRef.current.value;
        const location = locationRef.current.value;
        const googleMap = mapRef.current.value; 
        const someDetail = detailRef.current.value;
        const moreDetail = moreDetailRef.current.value;
        const phone = phoneRef.current.value;
        const email = emailRef.current.value;
        const price = priceRef.current.value;
        const name = nameRef.current.value;


        if(!image) {
            return;
        }
        

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


    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "7cfe7387c84999a6c4f1dc752c2ce9cf");
        imageData.append("image", event.target.files[0]);
        axios
          .post("https://api.imgbb.com/1/upload", imageData)
          .then(function (response) {
            setImage(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
      };



    return (
        <div className="row py-5">
            <h1 className="text-center">Add a New Rooftop Farm</h1>


            <form onSubmit={handleAddRooftop} className="form-inline form-group">
                    <h1>Rooftop Details :</h1>
                
                    <label htmlFor="name">Name :</label>
                    <input className="form-control"  type="text" id="name" ref={nameRef} /> <br />



                    <label htmlFor="squareFeet">How many square feet? :</label>
                    <input className="form-control"  type="number" id="squareFeet" ref={squareRef} /> <br />

                    <label htmlFor="location">Location :</label>
                    <input className="form-control"  type="text" id="location" ref={locationRef} /> <br />

                    <label htmlFor="img">Rooftop Image:</label>
                    <input className="form-control"  type="file" 
                        onChange={handleImageUpload}
                    
                     id="img" /> <br />
                    


                    <label htmlFor="googleMap">Google map location URL :</label>
                    <input className="form-control"  type="url" ref={mapRef} id="googleMap" /> <br />


                  
                    <label htmlFor="someDetails">Some Details :</label>
                    <input className="form-control"  type="text" ref={detailRef} id="someDetails" /> <br />

                    <label htmlFor="moreDetails">More Details :</label>
                    <input className="form-control"  type="text" ref={moreDetailRef} id="moreDetails" /> <br />

                    <label htmlFor="phoneNumber">Phone Number :</label>
                    <input className="form-control"  type="number" ref={phoneRef} id="phoneNumber" /> <br />

                    

                    <label htmlFor="emailAddress">E-mail :</label>
                    <input className="form-control"  type="email" ref={emailRef} id="emailAddress" /> <br />


                    
                
                    <label htmlFor="priceRoof">Price BDT :</label>
                    <input className="form-control" type="number" ref={priceRef} id="priceRoof" /> <br />
                
                
                
                <input className="form-control"    type="submit" value="Add" />

            </form>
        </div>
    )
}
