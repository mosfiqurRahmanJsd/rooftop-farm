import React, { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom';
import './RooftopDetail.css';




const RooftopDetail = () => {
    const { id } = useParams();
    
   
    const [rooftop, setRooftop] = useState([]);

    console.log(rooftop);
    const {name, detail, bigImg, title, url, img,} = rooftop;

    
    useEffect(() => {
        fetch(`https://obscure-journey-61930.herokuapp.com/rooftop/${id}`)
        .then(res => res.json())
        .then(data => setRooftop(data))
    }, [id]);



    


    return (
        <div className="rooftop-detail container">
            <h1 className="d-flex justify-content-center mb-5">{name}</h1>
            <div className="row">
                <div className="col-md-6">
                    <img className="w-100" src={bigImg} alt="" />
                    <a href={url}> {url}</a>
                    <img src={img} alt="" />
                </div>
                <div className="col-md-6">
                    <h2>{title}</h2>
                    <p style={{textAlign: 'justify'}}>{detail}</p>
                </div>
            </div>
        </div>
    );
}

export default RooftopDetail;
