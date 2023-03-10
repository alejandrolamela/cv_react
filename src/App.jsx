import { useState } from "react";
import "./App.scss";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import LanguagesSpeak from "./components/LanguagesSpeak/LanguagesSpeak";
import More from "./components/More/More";
import { CV } from "./CV/CV";
const { hero, education, experience, languages, more } = CV;

function App() {
  const [showMenu, setShowMenu] = useState("Education");

  return (
    <div className="App">
    
      <Hero hero={hero} />
      <div className="boton">
      <button
        className="custom-btn"
        onClick={() => setShowMenu("Education")}
      >
        EDUCATION
      </button>
      <button
        className="custom-btn"
        onClick={() => setShowMenu("Experience")}
      >
        EXPERIENCE
      </button>

      <button
        className="custom-btn"
        onClick={() => setShowMenu("LanguagesSpeak")}
      >
        LANGUAGES
      </button>

      <button className="custom-btn" onClick={() => setShowMenu("MORE")}>
        MORE
      </button>
    </div>
        

      <div>
        {showMenu === "Education" ? (
          <Education education={education} />
        ) : showMenu === "Experience" ? (
          <Experience experience={experience} />
        ) : showMenu === "LanguagesSpeak" ? (
          <LanguagesSpeak languages={languages} />
        ) : (
          <More more={more} />
        )}
      </div>
      </div>

      
    
  );
}

export default App;
