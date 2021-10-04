import React from 'react';
import './Allservice.css'

const Allservices = (props) => {
const {Title,Discription,img}=props.service;
    return (

<div className="container-details">
     <div className="row-item">
    <div className="col-sm-7  details">
    <h3> Title : {Title};</h3>
    <p> Discription : {Discription}</p>
</div>

    <div className="col-sm-5 img-container">
    <img className="all-img" src={img} alt="" />
    </div>
    </div>
  </div>
    );
};

export default Allservices;