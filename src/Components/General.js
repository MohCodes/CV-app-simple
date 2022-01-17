import React from 'react';

class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput:{
                input:"",
                showInputBox: true,
            }
            ,
            emailInput:{
                input:"",
                showInputBox: true,
            }
            ,
            phoneInput:{
                input:"",
                showInputBox: true,
            },
        };
    }

    //Name: {name:sd,sdsd:oo}

    onSubmita = (e)=>{
        e.preventDefault();
    }

    onSubmitGeneral = (e)=>{
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
    })
    
    console.log(this.state.nameInput,this.state.emailInput,this.state.phoneInput)
    }

    render() { 
        return (
            <div  className='generalContainer'>

                <form onSubmit={this.onSubmita} className='generalinputs'>
                    <div className='nameContainer generalInputContainers'>

                    {
                    this.state.nameInput.showInputBox ? 
                    ( <div>{`Name: `}
                        <input data-type = "nameInput" 
                                id = "nameInput"
                                placeholder='Enter Name' 
                                className='nameInput'>
                        </input> 

                        <button data-type = "nameInput" 
                                onClick={this.onSubmitGeneral}>Submit</button>
                        </div>)

                    : (<div className="nameDisplay">
                        {`Name: `+ this.state.nameInput.input} 
                        <i data-type = "nameInput" onClick={this.onEditbuton} className="fas fa-edit"></i></div>)
                    }
                    </div>



                    <div className='emailContainer generalInputContainers'>

                    {
                    this.state.emailInput.showInputBox ? 
                    ( <div>{`Email: `} 

                        <input data-type = "emailInput" 
                        id = "emailInput" 
                        placeholder='Enter Email' 
                        className='emailInput'>
                        </input> 

                        <button data-type = "emailInput" 
                        onClick={this.onSubmitGeneral}>Submit</button>
                        </div>)

                    : (<div className="emailDisplay">
                        {"Email: " + this.state.emailInput.input} 
                        <i data-type = "emailInput"
                        onClick={this.onEditbuton} 
                        className="fas fa-edit"></i></div>)
                    }
                    </div>


                    <div className='phoneContainer generalInputContainers'>
                    {
                    this.state.phoneInput.showInputBox ? 
                    ( <div> {`Phone Number: `}

                        <input data-type = "phoneInput" 
                        id = "phoneInput" 
                        placeholder='Enter Phone Number' 
                        className='phoneInput'>
                        </input> 

                        <button data-type = "phoneInput" 
                        onClick={this.onSubmitGeneral}>Submit</button>
                        </div>)

                    : (<div className="phoneDisplay">
                        {`Phone Number: `+this.state.phoneInput.input} 
                    <i onClick={this.onEditbuton} 
                    data-type = "phoneInput" 
                    className="fas fa-edit"></i></div>)
                    }
                    </div>

                </form>

            </div>
        );
    }
}

export default General;