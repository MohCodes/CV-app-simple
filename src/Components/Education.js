import React from "react";



class Education extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        schoolNameInput:{
            input:"",
            showInputBox: true
        },
        schoolYearInput:{
            input:"",
            showInputBox: true 
        },
        degreeTypeInput:{
            input:"",
            showInputBox: true 
        }
    }
    }

    

    formSubmit = (e)=>{
        e.preventDefault()
    }

    onSubmitEducation = (e)=>{
        const idOfInput = e.target.getAttribute("data-type")
        const nameElement = document.getElementById(`${idOfInput}`)
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

            <div className="educationContainer">
                <header className="educationHeader">Education</header>
                <form onClick={this.formSubmit}>
                <header className="schoolName">
                    {
                    this.state.schoolNameInput.showInputBox?
                    (
                        <div className="schoolNameContainer">
                        <input id = "schoolNameInput" placeholder="Enter School Name" className="schoolNameInput"></input> 
                        <button className="schoolNameButton" onClick={this.onSubmitEducation} data-type ="schoolNameInput">Submit</button>
                        </div> 

                    )
                :(
                        <div className="schoolNameDisplay">
                        {this.state.schoolNameInput.input} 
                        <i  onClick={this.onEditbuton} data-type ="schoolNameInput" className="fas fa-edit"></i></div>
                )
                }




            <div className="yearLength">
                {
                    this.state.schoolYearInput.showInputBox?
                    (
                    <div>
                    <input id = "schoolYearInput" placeholder="Enter Year (2019-2020)" className="schoolYearInput"></input>
                    <button className="schoolYearInput" onClick={this.onSubmitEducation} data-type ="schoolYearInput">Submit</button>
                    </div>)
                    :
                    (
                    <div className="schoolNameDisplay">
                    {this.state.schoolYearInput.input} 
                    <i  onClick={this.onEditbuton} data-type ="schoolYearInput" className="fas fa-edit"></i></div>
                    )
                }
            </div>

            </header>

            <div className="degreeType">
            {
            this.state.degreeTypeInput.showInputBox?
            (   
            <div className="degreeTypeContainer">
            <input id = "degreeTypeInput" placeholder="Enter Degree Type" className="degreeTypeInput"></input>
            <button className="schoolYearInput" onClick={this.onSubmitEducation} data-type ="degreeTypeInput">Submit</button>
            </div>)
            :(
            <div className="degreeTypeDisplay">
            {this.state.degreeTypeInput.input} 
            <i  onClick={this.onEditbuton} data-type ="degreeTypeInput" className="fas fa-edit"></i></div>
            )

            }
            </div>


            </form>
            </div>


        
        )};
    }

 
export default Education ;