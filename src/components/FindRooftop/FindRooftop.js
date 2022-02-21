import React, { useEffect, useState } from 'react';
import './FindRooftop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBorderAll, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FindRooftop = () => {


    const [rooftop, setRooftop] = useState([]);



    const [displayRooftop, setDisplayRooftop] = useState([]);

    useEffect(() => {
        fetch('https://obscure-journey-61930.herokuapp.com/rooftop')
            .then(res => res.json())
            .then(data => {
                setRooftop(data)
                setDisplayRooftop(data)
            })
    }, []);





    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedRooftop = rooftop.filter(rooftop => rooftop.location.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayRooftop(matchedRooftop);
    }




    return (
        <div>
            <div className="container find">
                <div className="input-group mb-3">
                    <input
                        placeholder="please ! type location to search..."
                        className="form-control"
                        type="text"
                        onChange={handleSearch}

                    />
                </div>

                <div className="row">
                    {
                        displayRooftop.map(rooftop => (
                            <div key={rooftop._id} className="col-md-4 mb-3">
                            <Link to={`/rooftop/${rooftop._id}`} className="text-decoration-none text-info">

                                <div className="card h-100 bg-color text-dark">

                                    <div className="card-img">
                                        <img className="w-100" src={rooftop.image} alt="" />
                                    </div>

                                    <div className="card-body mx-auto text-dark">

                                        <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} /> {rooftop.location}</h5>
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="card-title"><FontAwesomeIcon icon={faBorderAll} /> {rooftop.squareFeet} sqft</h5>
                                                <h5 className="card-title"><FontAwesomeIcon icon={faMoneyBill} /> {rooftop.price} Tk BDT</h5>
                                            </div>
                                            <div className="col">
                                                <button className="btn btn-dark mx-2 mt-2">Call</button>
                                                <button className="btn btn-dark mx-2 mt-2">Email</button>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default FindRooftop;
