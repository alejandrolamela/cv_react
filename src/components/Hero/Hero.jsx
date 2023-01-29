import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <div className="card">
        <div className="nameLastName">
          <img src={hero.image} alt="imagen" width='200px' height='300px'/>
          <h2>{hero.name}</h2>
        </div>
        <div className="anotherInformation">
          <h4>{hero.adress}</h4>
          <h4>{hero.city}</h4>
          <a href={"mailto:"+hero.email}>
            alejandrolamelaiglesias@gmail.com
          </a>
          <h4>{hero.birthDate}</h4>
          <h4>{hero.phone}</h4>
          <a href={hero.gitHub}>
         <img src={hero.iconGitHub} alt="imagen" width="20px"/>  </a>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
