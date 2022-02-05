import React, {  } from 'react';
import { Link } from 'react-router-dom';


const Rooftop = (props) => {

    const pd = props.pd;





    return (

        <div className="col">
            <div className="card h-100">
                <div className="card-img">
                    <img className="img-fluid" src={pd.img} alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{pd.name}</h5>
                    <p className="card-text">{pd.shortTitle}</p>
                </div>

                <Link to={`/rooftopDetails/${pd.key}`} type="button" className="btn  card-footer">View</Link>


                

            </div>
        </div>

    );
}

export default Rooftop;
