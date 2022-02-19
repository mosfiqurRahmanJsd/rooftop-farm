import React from 'react'
import { useRef } from 'react';



const AddBlog = () => {
    const titleRef = useRef();
    const detailRef = useRef();
    const shotDetailRef = useRef();
    const imgRef = useRef();



    const handleAddRooftop = (e) => {
        const title = titleRef.current.value;
        const detail = detailRef.current.value;
        const image = imgRef.current.value;
        const shotDetail = shotDetailRef.current.value;





        const newRooftop = { detail, title, image, shotDetail};

        fetch('https://obscure-journey-61930.herokuapp.com/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRooftop)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added Blog')
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




                <label htmlFor="squareFeet">Title:</label>
                <input type="text" id="squareFeet" ref={titleRef} /> <br />

                <label htmlFor="location">Detail :</label>
                <input type="text" id="location" ref={detailRef} /> <br />


                <label htmlFor="short">Short Detail :</label>
                <input type="text" id="short" ref={shotDetailRef} /> <br />

                <label htmlFor="img">Blog Image URL :</label>
                <input type="url" ref={imgRef} id="img" /> <br />










                <input type="submit" value="Add" />

            </form>
        </div>
    )
}

export default AddBlog;
