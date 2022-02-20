import React, { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom';
import './RooftopDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBorderAll, faMoneyBill } from '@fortawesome/free-solid-svg-icons';




const RooftopDetail = () => {
    const { id } = useParams();


    const [rooftop, setRooftop] = useState([]);

    const { googleMap, squareFeet, location, name, image, phone, email, price, moreDetail, someDetail } = rooftop;
    console.log(googleMap);


    useEffect(() => {
        fetch(`https://obscure-journey-61930.herokuapp.com/rooftop/${id}`)
            .then(res => res.json())
            .then(data => setRooftop(data))
    }, [id]);






    return (
        <div className="rooftop-detail container">
            <div className="row">
                <div className="col-md-6">
                    <img className="w-100" src={image} alt="" />
                    <div className="pt-3 d-flex justify-content-evenly">
                        <div ><p className="font-weight-bold"><FontAwesomeIcon icon={faBorderAll} /> {squareFeet} sqft </p></div>
                        <div ><p className="font-weight-bold"><FontAwesomeIcon icon={faMoneyBill} /> {price} Tk BDT</p></div>
                        <div ><p className="font-weight-bold"><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</p></div>
                        
                    </div>
                    <iframe src={googleMap} width="320" height="200" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="col-md-6">
                    <h2 className="text-dark">{squareFeet} sqft {name} {location} </h2>
                    <p className="text-info" style={{ textAlign: 'justify' }}>{someDetail}</p> <br />
                    <p className="text-info"  style={{ textAlign: 'justify' }}>{moreDetail}</p>
                    <h5 className="text-success">Contact Information</h5>
                    <p  className="text-success">Phone :{phone}</p>
                    <p  className="text-success">Email :{email}</p>
                </div>
            </div>
        </div>
    );
}

export default RooftopDetail;
