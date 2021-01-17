import React, { Component } from 'react'



class TutorRow extends Component{
    render(){

        return(
            
            <div className="row">
                {this.props.tutorObj[0]!==1 ?
                    <div className="column">

                        <div className="card">
                            <a href={"/tutor/" + this.props.tutorObj[0].id} >{this.props.tutorObj[0].Fname + " " + this.props.tutorObj[0].Lname}</a>
                        </div>
                        

                    </div>
                    : 
                    <div className="column">
                    </div>
                }
               {this.props.tutorObj[1]!==1 ?
                    <div className="column">

                        <div className="card">
                        <a href={"/tutor/" + this.props.tutorObj[1].id} >{this.props.tutorObj[1].Fname + " " + this.props.tutorObj[1].Lname}</a>

                        </div>  
                        
                        
                        
                    </div>
                    : 
                    <div className="column">
                    </div>
                }
                { this.props.tutorObj[2]!==1 ?
                    <div className="column">

                        <div className="card">
                        <a href={"/tutor/" + this.props.tutorObj[2].id} >{this.props.tutorObj[2].Fname + " " + this.props.tutorObj[2].Lname}</a>

                        </div>


                        
                        
                    </div>
                    :
                    <div className="column">
                    </div>
                }

                </div>

        )
    }

}

export default TutorRow