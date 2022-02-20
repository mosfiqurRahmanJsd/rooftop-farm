import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBorderAll, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import './Rooftop.css';







const Rooftop = (props) => {

    const { _id, squareFeet, location, image,  price } = props.roof;





    return (

        <div className="col ">
            <Link to={`/rooftop/${_id}`} className="text-decoration-none text-info">
                <div className="card h-100 bg-dark border-radius">

                    <div className="card-img">
                        <img className="w-100" src={image} alt="" />
                    </div>

                    <div className="card-body mx-auto">

                        <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</h5>
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title"><FontAwesomeIcon icon={faBorderAll} /> {squareFeet} sqft</h5>
                                <h5 className="card-title"><FontAwesomeIcon icon={faMoneyBill} /> {price} Tk BDT</h5>
                            </div>
                            <div className="col">
                                <button className="btn btn-info mx-2 mt-2">Call</button>
                                <button className="btn btn-info mx-2 mt-2">Email</button>

                            </div>
                        </div>

                    </div>

                </div>
            </Link>
        </div>

    );
}

export default Rooftop;
