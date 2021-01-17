const axios = require('axios')






async function makeComment(req, res) {
    console.log("______________________________________")
    console.log('makeComment');
    console.log(req.body);
    const tutorID = req.body.tutorId
    const comment= req.body.comment
    
    console.log('HERECOMMENT')

    

    const tutors = await axios.get('https://ratemytutor-245e0-default-rtdb.firebaseio.com/tutor.json').then( response =>{

        const data = response.data
        const results = []

         for (const id in response.data){
             results.push({
                id:id,
                Fname: response.data[id].Fname,
                Lname: response.data[id].Lname,
                companyRatings: response.data[id].companyRatings,
                companyID: response.data[id].companyID,
                comments: response.data[id].comments
             })
         }
         return results
         
    })


    let updateComments = []
         for (let i = 0; i<tutors.length; i++){  
            console.log(tutors[i].id)
            console.log('tutorID',tutorID)
            console.log(tutors[i].id == tutorID)
            console.log(tutors[i].comments)
    
            if (tutors[i].id == tutorID){
                for(const key in tutors[i].comments){
                    console.log('here inside for loop')
                    updateComments.push(tutors[i].comments[key])
                }
            }
    
            
        

        } 


    updateComments.push(comment)
    console.log(updateComments)
    console.log('hereComment')
    await axios.patch('https://ratemytutor-245e0-default-rtdb.firebaseio.com/tutor/'+tutorID+".json",{comments:updateComments} )
    console.log("______________________________________") 
    

    

    

}



function getTutor(req, res){
    const ID = req.params.tutorID
    let tutors = []
    axios.get('https://ratemytutor-245e0-default-rtdb.firebaseio.com/tutor.json').then( response =>{

        const data = response.data
        const results = []

         for (const id in response.data){
             if (id === ID){
                 res.json({id:id,
                Fname: response.data[id].Fname,
                Lname: response.data[id].Lname,
                companyRatings: response.data[id].companyRatings,
                companyID: response.data[id].companyID,
                comments: response.data[id].comments
                })
             }
         }
         res.json({msg: 'Not available'})   
    })

    


    

}


function getTutors(req, res) {

    // axios.post('https://ratemytutor-245e0-default-rtdb.firebaseio.com/tutor.json',{
    //     first: 'Moe', last:'Oshir'
    // }).then(
    //     response =>{
    //         console.log('hi')
    //     }
    // )
    let tutors = []
    
    axios.get('https://ratemytutor-245e0-default-rtdb.firebaseio.com/tutor.json').then( response =>{

        const data = response.data
        const results = []

         for (const id in response.data){
             results.push({
                id:id,
                Fname: response.data[id].Fname,
                Lname: response.data[id].Lname,
                companyRatings: response.data[id].companyRatings,
                companyID: response.data[id].companyID,
                comments: []
             })
         }
         tutors = results
        res.json(tutors)    
    })
    
    // const obj = 
    
}
    
exports.getTutors = getTutors
exports.getTutor = getTutor
exports.makeComment = makeComment