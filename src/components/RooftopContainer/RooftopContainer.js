import React, { useState } from 'react';
import {  Modal } from 'react-bootstrap';


const RooftopContainer = () => {

    
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }




    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Latest Rooftops</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                <div className="col">
                    <div className="card h-100">

                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
            <div className="col">
                <div className="card h-100">

                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">

                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
}

export default RooftopContainer;
