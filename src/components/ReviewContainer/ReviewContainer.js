import React from 'react';

const ReviewContainer = () => {
    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Reviews</h2>
            <p className="text-secondary text-center py-3">
                Rem ipsum dolor sit amet, consectetur adipisicing
                <br />
                elit, sed do eiusmod tempor incididamco
            </p>
            <div className="row">
                {/* {reviews.map((data) => (
                    <TestimonialsData data={data} key={data._id}></TestimonialsData>
                ))} */}
            </div>

        </div>


    );
}

export default ReviewContainer;
