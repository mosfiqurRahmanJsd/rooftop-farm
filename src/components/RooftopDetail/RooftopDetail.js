import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RooftopDetail.css';


const RooftopDetail = () => {

    let { rooftopKey } = useParams();

    useEffect(() => {

    })



    return (
        <div className="rooftop-detail">
            <h1>Rooftop Detail {rooftopKey}</h1>
        </div>
    );
}

export default RooftopDetail;
