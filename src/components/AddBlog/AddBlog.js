import React from 'react'
import { useRef } from 'react';



const AddBlog = () => {
    const titleRef = useRef();
    const detailRef = useRef();
    const shotDetailRef = useRef();
    const imgRef = useRef();
    const moreImgRef = useRef();
    const moreDetailRef = useRef();



    const handleAddRooftop = (e) => {
        const title = titleRef.current.value;
        const detail = detailRef.current.value;
        const image = imgRef.current.value;
        const shotDetail = shotDetailRef.current.value;
        const moreImg = moreImgRef.current.value;
        const moreDetail = moreDetailRef.current.value;





        const newRooftop = { detail, title, image, shotDetail, moreImg, moreDetail};

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
        <div className="add-rooftop container py-5">
            <h1 className="text-center">Add a New Blog</h1>


            <form onSubmit={handleAddRooftop} className="form-inline form-group">
                <h2>Blog Details :</h2>

                <label htmlFor="squareFeet">Title:</label>
                <input className="form-control" type="text" id="squareFeet" ref={titleRef} /> 

                <label htmlFor="location">Detail :</label>
                <input className="form-control"  type="text" id="location" ref={detailRef} /> 


                <label htmlFor="short">Short Detail :</label>
                <input  className="form-control" type="text" id="short" ref={shotDetailRef} /> 

                <label htmlFor="img">Blog Image URL :</label>
                <input  className="form-control" type="url" ref={imgRef} id="img" /> 

                <label htmlFor="moreImg">More Blog Image URL :</label>
                <input className="form-control"  type="url" ref={moreImgRef} id="moreImg" /> s


                
                <label htmlFor="moreDetail">More Detail :</label>
                <input className="form-control"  type="text" id="moreDetail" ref={moreDetailRef} />  <br />










                <input className="form-control"  type="submit" value="Add" />

            </form>
        </div>
    )
}

export default AddBlog;
