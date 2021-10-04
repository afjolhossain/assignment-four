import React from 'react';
import './Course.css'


const Course = (props) => {
    console.log(props.course)
    const {Title,Cost,Discription,img}=props.course
    return (

    <div className="container">
     <div className="row">
    <div className="col-sm-8  details">
    <h2 className="title">Title : {Title}</h2>
            <h3>Cost : {Cost}</h3>
           <p>Discription : {Discription}</p>


    </div>
    <div className="col-sm-4 img-container">
    <img className="img" src={img} fluid alt="" />
    </div>
    </div>
  </div>

    );
};

export default Course;