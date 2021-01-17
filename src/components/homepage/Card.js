import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Card =(props) =>{

    const findMatch = () => {
        let name = ''
        props.companyArr.forEach(element => {
            if (element.id === props.tutor.companyID){
                console.log('here');
                name = element.companyName
                
            }
        });
        return name
    }

    return(
        
        <div className="searchCard">

    {props.searchType ? 
        <Link to={'/tutor/' + props.tutor.id}>
              <div>
                {console.log(props)}
                  <h1>{props.tutor.Fname} {props.tutor.Lname}</h1>
                  <h2>{findMatch()}
                    </h2>
              </div>
        </Link>
            :
            <Link to={'/company/' + props.company.id}>
                <div>
                    <h1>{props.company.companyName}</h1>
                </div>
            </Link>
            }
            <div style={{height: '20px'}}></div>
            <br/>
        </div>

    )
}


export default Card;