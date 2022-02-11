import React, {  } from 'react';
import { Link } from 'react-router-dom';


const Rooftop = (props) => {

    const roof = props.roof;





    return (

        <div className="col">
            <div className="card h-100">
                <div className="card-img">
                    <img className="w-100" src={roof.img} alt="" />
                </div>
                <div className="card-body mx-auto">
                    <h5 className="card-title ">{roof.name}</h5>
                    
                </div>

                <Link to={`/rooftop/${roof._id}`} type="button" className="btn  card-footer">View</Link>


                

            </div>
        </div>

    );
}

export default Rooftop;
