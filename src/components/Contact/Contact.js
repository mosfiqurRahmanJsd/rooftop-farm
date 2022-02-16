import React from 'react';
import './Contact.css';
import { Avatar } from '@mui/material';

const Contact = () => {
    return (
        <div>
            <div className="container contact-us">
                <h4 className="mb-4 text-center"> <strong>Rooftop Farming For Green Cities:</strong> A Step Towards Urban Fresh Natural Food By Using Web Application.</h4>
                <div className="row">
                    
                    <div className="col-md-6 d-flex align-items-center justify-content-evenly">
                        <Avatar
                            alt="Dr. S. M. Aminul Haque"
                            src="https://i.ibb.co/nLM80Hh/AMINIL.jpg"
                            sx={{ width: 260, height: 260 }}
                        />
                        <div className="mt-2">
                            <h5>Supervised By</h5>
                            <h4 className="fst-italic">Dr. S. M. Aminul Haque</h4>
                            <h6 className="fw-bolder">Associate Professor and Associate Head</h6>
                            <p className="m-0">Department of CSE</p>
                            <p className="m-0">Daffodil International University</p>
                        </div>

                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-evenly">
                        <Avatar
                            alt="Mr. Mohammad Jahangir Alam"
                            src="https://i.ibb.co/TthgkS3/photo-2021-03-28-22-25-16-1.jpg"
                            sx={{ width: 260, height: 260 }}
                        />
                        <div className="mt-2">
                            <h5>Co-Supervised By</h5>
                            <h4 className="fst-italic">Mr. Mohammad Jahangir Alam</h4>
                            <h6 className="fw-bolder">Senior Lecturer</h6>
                            
                            <p className="m-0">Department of CSE</p>
                            <p className="m-0">Daffodil International University</p>
                        </div>

                    </div>
                
                </div>
                
            </div>


            <div className="container mt-5">
                <h3 className="text-center"> <strong>Submitted By :</strong> </h3>
                <div className="row">
                    
                    <div className="col-md-6 d-flex align-items-center justify-content-evenly">
                        <Avatar
                            alt="Md. Naimul Islam"
                            src="https://i.ibb.co/TBzZQjc/Naimul.jpg"
                            sx={{ width: 260, height: 260 }}
                        />
                        <div className="mt-2">
                            <h4>Md. Naimul Islam</h4>
                            <h6 className="fw-bolder">DIU ID : 181-15-1885</h6>
                            <p className="m-0">Department of CSE</p>
                            <p className="m-0">Daffodil International University</p>
                        </div>

                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-evenly">
                        <Avatar
                            alt="Fateha Nasrin"
                            src="https://i.ibb.co/Qn28fCv/nasrin.jpg"
                            sx={{ width: 260, height: 260 }}
                        />
                       <div className="mt-2">
                            <h4>Fateha Nasrin</h4>
                            <h6 className="fw-bolder">DIU ID : 181-15-1900</h6>
                            <p className="m-0">Department of CSE</p>
                            <p className="m-0">Daffodil International University</p>
                        </div>

                    </div>
                
                </div>
                
            </div>



        </div>
    );
}

export default Contact;
