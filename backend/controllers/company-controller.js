const axios = require('axios')

function getCompany(req, res){
    const ID = req.params.companyID
    let tutors = []
    axios.get('https://ratemytutor-245e0-default-rtdb.firebaseio.com/company.json').then( response =>{

        const data = response.data
        const results = []

         for (const id in response.data){
             if (id === ID){
                 res.json({id: id,
                    companyName: response.data[id].companyName,
                    address: response.data[id].address,
                    Long: response.data[id].Long,
                    Lat: response.data[id].Lat
                })
             }
         }
         res.json({msg: 'Not available'})   
    })
}


function getCompanies(req, res) {

    // axios.post('https://ratemytutor-245e0-default-rtdb.firebaseio.com/company.json',{
    //     companyName: 'Khans', address:'256 Dahill Road, Brooklyn, New York 11218',Long:12121212, Lat:121212121
    // }).then(
    //     response =>{
    //         console.log('hi')
    //     }
    // )
    companies = []
    axios.get('https://ratemytutor-245e0-default-rtdb.firebaseio.com/company.json').then( response =>{

        const data = response.data
        const results = []

         for (const id in response.data){
             results.push({
                 id: id,
                 companyName: response.data[id].companyName,
                 address: response.data[id].address,
                 Long: response.data[id].Long,
                 Lat: response.data[id].Lat
             })
         }
         companies = results
        res.json(companies)    
    })
    
    // const obj = 
    
}
    
exports.getCompanies = getCompanies
exports.getCompany = getCompany