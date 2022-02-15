import React, { useEffect, useState } from 'react';
import './FindRooftop.css';

const FindRooftop = () => {

    
    const [rooftop, setRooftop] = useState([]);
    useEffect(() => {
       fetch('https://obscure-journey-61930.herokuapp.com/rooftop')
       .then(res => res.json())
       .then(data => setRooftop(data))
    }, []);
 
    

    const [displayRooftop, setDisplayRooftop] = useState([]);

    

    

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedRooftop = rooftop.filter( rooftop => rooftop.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayRooftop(matchedRooftop);
    }




    return (
        <div>
            <div className="container find">
                <div className="input-group mb-3">
                    <input 
                        placeholder="please ! type text to search..." 
                        className="form-control" 
                        type="text" 
                        onChange={handleSearch}

                        />
                </div>

                <div className="row">
                    {
                        displayRooftop.map(rooftop => (
                            <div key={rooftop._id} className="col-md-4 mb-3">
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
