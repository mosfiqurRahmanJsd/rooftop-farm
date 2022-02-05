import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import './FindRooftop.css';

const FindRooftop = () => {

    const [products] = useProducts();
    

    const [displayRooftop, setDisplayRooftop] = useState([]);

    

    

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedRooftop = products.filter( product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayRooftop(matchedRooftop);
    }




    return (
        <div>
            <div className="container find">
                <div className="input-group mb-3">
                    <input 
                        placeholder="Find Rooftop" 
                        className="form-control" 
                        type="text" 
                        onChange={handleSearch}

                        />
                </div>

                <div className="row">
                    {
                        displayRooftop.map(rooftop => (
                            <div key={rooftop.key} className="col-md-4 mb-3">
                                <div className="card h-100">
                                    <div className="card-img">
                                        <img className="img-fluid" src={rooftop.img} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{rooftop.name}</h5>
                                        <p className="card-text">{rooftop.shortTitle}</p>
                                    </div>


                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default FindRooftop;
