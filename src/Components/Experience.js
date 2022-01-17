import React from 'react';

class Experience extends React.Component {
    constructor(props){
        super(props)
    this.state = { 
        experienceTitle:{
            input:"",
            showInputBox:true
        },
        experienceTime:{
            input:"",
            showInputBox:true
        },
        experienceDescription:{
            input:"",
            showInputBox:true
        }

}}

    formSubmit = (e)=>{
        e.preventDefault()
    }

    onSubmitEducation = (e)=>{
        const idOfInput = e.target.getAttribute("data-type")
        console.log(idOfInput)
        const nameElement = document.getElementById(`${idOfInput}`)
        console.log(nameElement)
        const nameValue = nameElement.value;

        this.setState({
            [idOfInput]:{input:nameValue,
            showInputBox: false,}
        })
    }

    onEditbuton = (e)=>{
        const idOfInput = e.target.getAttribute("data-type")
        this.setState({
            [idOfInput]:{
                showInputBox:true
            }
        })}


    
    render() { 
        return (
            <div className='experienceContainer'>
                <form onClick={this.formSubmit}>
                <header className='experienceHeader'>Experience</header>
                <div className='XP'>
                {
                    this.state.experienceTitle.showInputBox ? 
                    (<div className="schoolNameContainer">
                    <input id = "experienceTitle" placeholder="Work Title" className="experienceTitle"></input> 
                    <button className="schoolNameButton" onClick={this.onSubmitEducation} data-type ="experienceTitle">Submit</button>
                    </div> 
                    )
                    :(
                        <div className="experienceTitleDisplay">
                        {this.state.experienceTitle.input} 
                        <i  onClick={this.onEditbuton} data-type ="experienceTitle" className="fas fa-edit"></i></div>
                    )
                }

                <div className='yearLength'>
                {
                    this.state.experienceTime.showInputBox ? 
                    (
                    <div>
                    <input id = "experienceTime" placeholder="Time at Work" className="experienceTime"></input>
                    <button className="schoolYearInput" onClick={this.onSubmitEducation} data-type ="experienceTime">Submit</button>
                    </div>
                    )
                    :(
                        <div className="schoolNameDisplay">
                        {this.state.experienceTime.input} 
                        <i  onClick={this.onEditbuton} data-type ="experienceTime" className="fas fa-edit"></i></div>
                    )
                }
                </div>
                </div>
                {
                    this.state.experienceDescription.showInputBox ? 
                    (
                        <div className="experienceDescriptionContainer">
                        <input id = "experienceDescription" placeholder="Enter Degree Type" className="experienceDescription"></input>
                        <button className="schoolYearInput" onClick={this.onSubmitEducation} data-type ="experienceDescription">Submit</button>
                        </div>
                    )
                    :(
                    <div className="degreeTypeDisplay">
                    {this.state.experienceDescription.input} 
                    <i  onClick={this.onEditbuton} data-type ="experienceDescription" className="fas fa-edit"></i></div>
                    )
                    
                
                    
                }
                </form>
            </div>
        );
    }
}

export default Experience;