import React from "react";
import "./More.scss";

const More = ({ more }) => {
  return (
    <div className="moreBlock">
      <div className="moreBlock_habilities">
        <div className="moreBlock_habilities_title">
          <h4>SKILLS</h4>
        </div>

        <div className="moreBlock_habilities_content">
          {more.habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="moreCard">
              <p>{item}</p>
            </div>
          );
        })}
        </div>

        
      </div>

      <div className="moreBlock_volunteer">
        {more.volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="moreCard">
              <h4>VOLUNTEER</h4>
              <p>{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
