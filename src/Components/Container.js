import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";

export class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:uuidv4(),
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
    questionSubmitHandler = (event) =>{
        const Questions ={};
        Questions.q1 = event.target.q1.value;
        Questions.q2 = event.target.q2.value;
        Questions.q3 = event.target.q3.value;
        Questions.other = event.target.other.value;
        this.setState({ Questions},() => {
            console.log(this.state);
        });

        // const q1 = event.target.q1.value;
        // const q2 = event.target.q2.value;
        // const q3 = event.target.q3.value;
        // // const q4 = event.target.q4.value;
        // // const q5 = event.target.q5.value;
        // // const q6 = event.target.q6.value;
        // const other = event.target.other.value;
        // this.setState({ q1, q2,q3,other},() => {
        //     console.log(this.state);
        // });
      //  console.log(Questions)
    
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

