import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import Comments from './Comments'

function Tutor(){
    let { tutorID } = useParams()

    let [tutorState, setTutorObject] = useState({})

    let [companyObj, setCompanyObj] = useState({})

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
                    <input className="form-control mb-4" name="name" value={name} placeholder="Enter your name" onChange={(event) => setName(event.target.value)} />
                    <textarea className="form-control mb-2" name="comment" placeholder="Add a comment!" 
                    value={comment} 
                    onChange={(event) => setComment(event.target.value)}>
                    </textarea>
                    <button onClick={submitComment} className="navButton">Submit</button>
                    <img></img>
                    <h1>{tutorState.Fname + " " + tutorState.Lname}</h1>
                    <a href={"/company/" + companyObj.id} className="nav-item">{companyObj.companyName}</a>
                    <h2> {tutorState.companyRatings} / 5 </h2>
                </div>
            
                <Comments tutorState={tutorState} /> 
        </div>
       
    )
    
}

export default Tutor