import React from "react";
import "./Education.scss";
const Education = ({ education }) => {
  return (
    <div className="educationBlock">
     {education.map((item)=> {
        return (
            <div key={JSON.stringify(item)} className='educationCard'>
                <p>{item.name}</p>
                <p>{item.date}</p>
                <p>{item.where}</p>
            </div>
        )
     })}
      
     
    </div>
  );
};

export default Education;
