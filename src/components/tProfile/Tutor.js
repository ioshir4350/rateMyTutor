import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import Comments from './Comments'

function Tutor(){
    let { tutorID } = useParams()

    let [tutorState, setTutorObject] = useState({})

    let [companyObj, setCompanyObj] = useState({})

    let [popup, setPopUp] = useState(false)

    const popUpHandler = () => {
        setPopUp(prev => !prev)
    }

    // const [value, setValue] = useState({
    //     name: '',
    //     comment: ''
    // })

    const checker = ()=>{
        console.log(tutorState.comments[0])
    }

    

    const [name, setName] = useState('')

    const [comment, setComment] = useState('')
    
    const tutorHandler = (obj) => {
        setTutorObject(obj)
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/tutors/' + tutorID)
        .then( (res) => {
            console.log(res.data)
            tutorHandler(res.data)
        }
        )
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/company/' + tutorState.companyID)
        .then( res => {
            setCompanyObj(res.data)
        }
        )
    }, [tutorState])

    const submitComment = () => {
        const obj = {
            tutorId: tutorID,
            comment: comment
        }
        axios.post('http://localhost:8000/api/tutors/makeComment', obj)
        .then(
            console.log('done with this')
        )
        window.location = "/tutor/" + tutorID
    }
    return (
        
        <div className="tutor-container">
                <div className="info">
                    {popup ? 
                    <div className="overlay">
                        <div className="popup">
                            <button className="close-btn" onClick={popUpHandler}><span className="x-text">&#10005;</span></button>
                            <h3 style={{color: 'white'}}>Please be honest with your comment! It will be removed if found false.</h3>
                            <textarea className="form-control mb-2 comment-box" name="comment" placeholder="Add a comment!" 
                            value={comment} 
                            onChange={(event) => setComment(event.target.value)}>
                            </textarea>
                            <button onClick={submitComment} className="navButton">Submit</button>
                        </div> 
                   </div>
                    : null}

                    <h1>{tutorState.Fname + " " + tutorState.Lname}</h1>
                    <a href={"/company/" + companyObj.id} className="nav-item">{companyObj.companyName}</a>
                    <h2> {tutorState.companyRatings} / 5 </h2>
                    <button onClick={popUpHandler} className="navButton">Add Comment</button>
                </div>
            
                <Comments tutorState={tutorState} /> 
        </div>
       
    )
    
}

export default Tutor