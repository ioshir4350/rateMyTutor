import React from 'react'

function Comments(props){

    let arr = []
    let ratings = []
   
    for (const elem in props.tutorState.comments) {
        arr.push(props.tutorState.comments[elem])
    }
    for (const elem in props.tutorState.companyRatings) {
        ratings.push(props.tutorState.companyRatings[elem])
    }
    
    console.log(arr);
    console.log(ratings);
    return (
        <div className="comments">
            
            {arr.map((comment, index) => {
               return (<div className="comment">
                    <h1>{ratings[index]} / 5</h1>
                    <h2>{comment}</h2>
                </div>)
            })}
        </div>
    )
}

export default Comments