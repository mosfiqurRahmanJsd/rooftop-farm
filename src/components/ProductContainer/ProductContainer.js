import React from 'react';

const ProductContainer = () => {
    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Latest Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                <div className="col">
                    <div className="card h-100">

                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>

                    

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">

                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">

                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductContainer;
