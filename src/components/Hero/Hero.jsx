import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <div className="card">
        <div className="nameLastName">
          <img src={hero.image} alt="imagen" width="300px" />
          <h2>{hero.name}</h2>
        </div>
        <div className="anotherInformation">
          <h4>{hero.adress}</h4>
          <h4>{hero.city}</h4>
          <h4>{hero.email}</h4>
          <h4>{hero.birthDate}</h4>
          <h4>{hero.phone}</h4>
          <h4>{hero.image}</h4>
          <a href={hero.gitHub}>
         <img src={hero.iconGitHub} alt="imagen" width="20px"/>  </a>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
