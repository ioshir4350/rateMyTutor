import React, { Component, useEffect, useState } from 'react'
import TutorRow from "./TutorRow"
import { useParams, Redirect } from 'react-router-dom'
import axios from 'axios'
import Map from '../Map'

function Company() {
    let {companyID} = useParams()

    let [popup, setPopUp] = useState(false)

    const popUpHandler = () => {
        setPopUp(prev => !prev)
    }

    let [companyState, setCompanyState] = useState({})

    let [tutorArr, setTutorArr] = useState([])

    const companyHandler = (obj) => {
        setCompanyState(obj)
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/company/' + companyID)
        .then( (res) => {
            console.log(res.data)
            companyHandler(res.data)
        }
        )
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/tutors')
        .then((res) => {
            let arr = []
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].companyID === companyID) {
                    arr.push(res.data[i])
                }
            }

            const length = Math.ceil(arr.length / 3)
            console.log('length', length);
            const newArr = []
            for (let i = 0; i<length; i++){
                newArr.push([1, 1, 1])
            }
            
            let j = 0
            let y = 0

            for (let i=0; i<arr.length;i++){
                newArr[j][y]=arr[i]
                y += 1
                if (y%3==0){
                    j++
                    y=0
                }
            }

            console.log(newArr)

            // for(let i = 0; i < arr.length; i+=3){
            //     for (let j = 0; j < 3; j++){
            //         newArr[i][]
            //     }
            // }
            
            setTutorArr(newArr)
        })
    }, [companyState])

    const coord = {
        lat: parseFloat(companyState.lat),
        lng: parseFloat(companyState.long)
    }

    return(
        <div>
            <div >
                <h1>{companyState.companyName}</h1>
                <button onClick={popUpHandler} className="navButton">Info</button>
                {popup ? 
                <div className="overlay">
                    
                <div className="popup" style={{paddingBottom: '50px'}}>
                <button className="close-btn" onClick={popUpHandler}><span className="x-text">&#10005;</span></button>
                <Map center={coord} zoom={16}/>
                </div> 
                </div>
                : null }
            </div>

            {tutorArr.map(tutor => {
                return (<TutorRow tutorObj={tutor} />)
            })}

         
            
            
        </div>
    );
}

// class Company extends Component{
//     render(){
        
//     }

// }

export default Company;