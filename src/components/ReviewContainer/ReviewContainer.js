import React from 'react';


const ReviewContainer = () => {
    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Client Reviews</h2>

            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <div className="review border bg-light p-3">
                        <q>It's a pleasure working with the professional, flexible team at Rooftop Republic, and their knowledge and guidance was invaluable as we navigated the process of setting up and installing the rooftop farm.</q>
                        <p className="fw-bolder fst-italic pt-2 text-end">Naimul Islam</p>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="review border bg-light p-3">
                        <q>Rooftop Republic's support and guidance during our first planting session was terrific from start to finish. The children had an amazing time, they learned lots of valuable skills and have been hooked ever since.</q>
                        <p className="fw-bolder fst-italic pt-2 text-end">Fateha Nasrin</p>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default ReviewContainer;
