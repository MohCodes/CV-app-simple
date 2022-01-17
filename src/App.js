// import logo from './logo.svg';
import './App.css';
import  General  from './Components/General';
import Education from './Components/Education';
import Experience from "./Components/Experience"
import React, {useState}  from 'react';

// import ReactDOM from 'react-dom';

function App() {

  const [educationPanels,setEducationPanels] = useState(1)
  const [experiencePanels,setexperiencePanels] = useState(1)

  const addEducation =()=>{
    setEducationPanels(educationPanels+1)
  }

  const removeEducation = ()=>{
    setEducationPanels(educationPanels-1)
  }

  const addExperience =()=>{
    setexperiencePanels(experiencePanels+1)
  }

  const removeExperience = ()=>{
    setexperiencePanels(experiencePanels-1)
  }

  function removeEditIcon(){
    const elements = document.getElementsByClassName("fas");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

}

  return (
    <div className="App">
      <General></General>

      {
        educationPanels === 1 ? 
        (
        <div>
          <Education></Education>
          <button onClick={addEducation}>Add Education</button>
        </div>

          )
        :(
        <div>
          <Education></Education>
          <Education></Education>
          <button onClick={removeEducation}>Remove Education</button>
          </div>)
      }


      {
        experiencePanels === 1?
        (
          <div>
          <Experience></Experience>
          <button onClick={addExperience}>Add Experience</button>
          </div>
        )
        :
        (
          <div>
        <Experience></Experience>
        <Experience></Experience>
        <button onClick={removeExperience}>Remove Experience</button>
        </div>
        )
      }



         <button id = "iconRemoveButton" onClick={removeEditIcon}>Remove Edit Icons</button>
         
       
        
    </div>
  );
}

export default App;
