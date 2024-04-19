import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";

export class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
          
            name:null,
            email:null,
            Questions:{
                q1:null,
                q2:null,
                q3:null,
                other:null,
            },
            isSubmitted:false,
        };
    }

  
    detailedSubmitHandler = (event) =>{
        const name = event.target.name.value;
        const email = event.target.email.value;
        this.setState({ name, email},() => {
            console.log(this.state);
        });
    
        event.preventDefault();
    };
   
  render() {
    
    return (
        <>
            <div className="container-fluid">
                <div className="container card mt-2">
                    <h1 className="text-center text-primary">AV-Express</h1>
                </div>        
            </div>
            {
                this.state.name === null && this.state.email === null ? 
                (<Details submit={this.detailedSubmitHandler} />) 
                 : 
                (<Question submit={this.questionSubmitHandler} />)
            }    
        </>
    );
  }
}

