import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Rooftop = (props) => {

    const pd = props.pd;

    

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }





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

                <button type="button" onClick={handleShow} className="btn  card-footer">View</button>


                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Modal body content</Modal.Body>
                </Modal>

            </div>
        </div>

    );
}

export default Rooftop;
