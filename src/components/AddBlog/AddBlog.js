import React, { useState } from 'react'
import { useRef } from 'react';
import axios from "axios";
import './AddBlog.css';



const AddBlog = () => {
    const titleRef = useRef();
    const detailRef = useRef();
    const shotDetailRef = useRef();
    const moreDetailRef = useRef();


    const [img, setImg] = useState(null);
    const [moreImg, setMoreImg] = useState(null);    




    const handleAddRooftop = (e) => {
        const title = titleRef.current.value;
        const detail = detailRef.current.value;
        const shotDetail = shotDetailRef.current.value
        const moreDetail = moreDetailRef.current.value;





        const newRooftop = { detail, title, img, shotDetail, moreImg, moreDetail};

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

      const handleMoreImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "7cfe7387c84999a6c4f1dc752c2ce9cf");
        imageData.append("image", event.target.files[0]);
        axios
          .post("https://api.imgbb.com/1/upload", imageData)
          .then(function (response) {
            setMoreImg(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
      };



    return (
        <div className="add-rooftop container py-5 blog-color rounded">
            <h1 className="text-center">Add a New Blog</h1>


            <form onSubmit={handleAddRooftop} className="form-inline form-group">
                <h2>Blog Details :</h2>

                <label htmlFor="squareFeet">Title:</label>
                <input className="form-control" type="text" id="squareFeet" ref={titleRef} /> 

                <label htmlFor="location">Detail :</label>
                <input className="form-control"  type="text" id="location" ref={detailRef} /> 


                <label htmlFor="short">Short Detail :</label>
                <input  className="form-control" type="text" id="short" ref={shotDetailRef} /> 

                <label htmlFor="img">Blog Image </label>
                <input  className="form-control" type="file" onChange={handleImageUpload} id="img" /> 

                <label htmlFor="moreImg">More Blog Image:</label>
                <input className="form-control"  type="file" onChange={handleMoreImageUpload} id="moreImg" /> 

                
                <label htmlFor="moreDetail">More Detail :</label>
                <input className="form-control"  type="text" id="moreDetail" ref={moreDetailRef} />  <br />










                <input className="form-control"  type="submit" value="Add" />

            </form>
        </div>
    )
}

export default AddBlog;
