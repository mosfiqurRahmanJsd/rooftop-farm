import React, {  } from 'react';
import { useParams, } from 'react-router-dom';
import './RooftopDetail.css';




const RooftopDetail = () => {
    const { rooftopKey } = useParams();
   
    // const [rooftop, setRooftop] = useState({});

    
    // useEffect(() => {
    //     fetch(`./products.json/${rooftopKey}`)
    //     .then(res => res.json())
    //     .then(data => setRooftop(data))
    // }, []);

    // console.log(rooftop);

    


    return (
        <div className="rooftop-detail container">
            <h1>{rooftopKey}</h1>
            {/* <div className="row">
                <div className="col-md-4">
                    <img src={img} alt="" />
                </div>
                <div className="col-md-6">
                    <h2>{}</h2>
                    <p>{description}</p>
                    <a target="_blank" href={url}> {url}</a>
                </div>
            </div> */}
        </div>
    );
}

export default RooftopDetail;
