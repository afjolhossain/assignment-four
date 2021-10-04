import React, { useEffect, useState } from 'react';
import Course from '../course/Course';

const Home = () => {
    const [cources, setcources] =useState([]);
    useEffect(()=>{
       fetch('./hexas.json')
       .then(res=>res.json())
       .then(data=>setcources(data))
    },[]);

    return (
        <div>
            { cources.map(course=><Course
                    key={course.Id}
                course={course}>
                </Course>)
            }
        </div>
    );
};

export default Home;