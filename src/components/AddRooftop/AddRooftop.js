import React, { useRef } from 'react';
import './AddRooftop.css';

const AddRooftop = () => {
    const nameRef = useRef()
    const imgRef = useRef()
    const detailRef = useRef()
    const urlRef = useRef()
    const bigImgRef = useRef()
    const titleRef = useRef()

   

    const handleAddProduct = (e) => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const detail = detailRef.current.value;
        const url = urlRef.current.value;
        const bigImg = bigImgRef.current.value;
        const title = titleRef.current.value;
       

        const newRooftop = { name, img, detail, url, bigImg, title };

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
                alert('Successfully added Rooftop Farm')
                e.target.reset();
            }
        })
        e.preventDefault();
    }







    return (
        <div className="add-rooftop container">
            <h1>Add a New Rooftop Farm</h1>
            <form onSubmit={handleAddProduct} className="form-inline">
                
                    <label htmlFor="rooftopName">Rooftop Farm Name :</label>
                    <input type="text" id="rooftopName" ref={nameRef} /> <br />

                    <label htmlFor="rooftopTitle">Rooftop Farm Title :</label>
                    <input type="text" id="rooftopTitle" ref={titleRef} /> <br />
                
                    <label htmlFor="rooftopImg">Rooftop Image URL :</label>
                    <input type="url" ref={imgRef} id="rooftopImg" /> <br />


                    <label htmlFor="bigImg">Rooftop Details Image URL :</label>
                    <input type="url" ref={bigImgRef} id="bigImg" /> <br />
               
               
                    <label htmlFor="rooftopDetails">Rooftop Farm Details :</label>
                    <input type="text" ref={detailRef} id="rooftopDetails" /> <br />
                
                    <label htmlFor="rooftopUrl">Rooftop URL :</label>
                    <input type="url" ref={urlRef} id="rooftopUrl" />
               
                
                
                
                <input type="submit" value="Add" />

            </form>
        </div>
    );
}

export default AddRooftop;
