import React from "react";

export default function Question(props) {
    return <div className="container-fluid">
                <div className="col-md-5 m-auto">
                    <div className="mt-3">
                        <div className="card text-left">
                            <div className="card-body">
                                <form onSubmit={props.submit}>
                                    <div className="form-group">
                                        <label htmlFor="">
                                            {" "}
                                            <b>3.</b> what are you curently doing ? 
                                        </label>
                                        <br/>
                                        <input 
                                        type="radio"
                                        id="teacher"
                                        name="q1"
                                        value="teacher"
                                        autoComplete="off"
                                        />
                                        <label htmlFor="teacher" >Teacher</label>
                                        {" "}
                                        <input 
                                        type="radio"
                                        id="Teacher"
                                        name="q1"
                                        value="student"
                                        autoComplete="off"
                                        />
                                        <label htmlFor="student">Student</label>
                                        {" "}
                                        <input 
                                        type="radio"
                                        id="st"
                                        name="q1"
                                        value="programmer"
                                        autoComplete="off"
                                        />
                                        <label htmlFor="programmer">programmer</label>
                                        {" "}
                                        <input 
                                        type="radio"
                                        id="programmer"
                                        name="q1"
                                        value="other"
                                        autoComplete="off"
                                        />
                                        <label htmlFor="other">other</label>
                                        <br/>
                                        <label htmlFor="">
                                            {" "}
                                            <b>4.</b> please rate our course. 
                                        </label>
                                        <br/>
                                        <input 
                                        type="radio"
                                        id="rate"
                                        name="q2"
                                        value="good"
                                        autoComplete="off"
                                        />
                                        <label htmlFor="good">good</label>
                                        {" "}
                                        <input 
                                        type="radio"
                                        id="poor"
                                        name="q2"
                                        value="poor"
                                        autoComplete="off"
                                        />
                                        <label htmlFor="student">poor</label>
                                        {" "}
                                        <input 
                                        type="radio"
                                        id="rate"
                                        name="q2"
                                        value="Excellent"
                                        autoComplete="off"
                                        />
                                        <label for="rate">Excellent</label>
                                        {" "}
                                        <input 
                                        type="radio"
                                        id="rate"
                                        name="q2"
                                        value="best"
                                        autoComplete="off"
                                        />
                                        <label for="rate">Best</label>
                                        <br/>
                                        <label for="">
                                            {" "}
                                            <b>5.</b> what your review here ? 
                                        </label>
                                        <br/>
                                        <textarea
                                        className="form-control"
                                         id="rate" 
                                         name="q3"
                                         
                                         />

                                    </div>
                                    <button type="submit" class="btn btn-primary">Save</button>
                                </form>
                               
                                <center>
                                <span className="badge badge-pill disabled">1</span>
                                <span className="badge badge-pill badge-primary">2</span>
                            </center>
                            </div>
                        </div>
                    </div>
                </div>
    </div>;
}