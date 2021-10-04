import React, { useEffect, useState } from 'react';
import Allservice from '../AllServices/Allservices';

const Services = () => {
    const [Services,setservices]=useState([]);
useEffect(()=>{
    fetch('./Services.json')
    .then(res=>res.json())
    .then(data => setservices(data))
},[])
    return (
        <div>
            <h1>Our Official services</h1>
            {
                Services.map(service => <Allservice
                key={service.Id}
                service={service}
                ></Allservice>)
            }
        </div>
    );
};

export default Services;