import React from "react";
import "./LanguagesSpeak.scss";

const LanguagesSpeak = ({ languages }) => {
  return (
    <div className="languagesBlock">
      {languages.map((item) => {
        return (
          <div key={JSON.stringify(item)} className="languagesCard">
            <p >{item.language}</p>
            <p>{item.wrlevel}</p>
            <p>{item.splevel}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LanguagesSpeak;
