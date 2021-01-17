import React from 'react'

function Comments(props){

    let arr = []
   
    for (const elem in props.tutorState.comments) {
        arr.push(props.tutorState.comments[elem])
    }
    
    console.log(arr);
    return (
        <div className="comments">
            
            {arr.map((comment) => {
               return (<div className="comment">
                    <h1>{comment}</h1>
                </div>)
            })}
        </div>
    )
}

export default Comments