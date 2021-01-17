import React, { useState, useEffect } from 'react'
import SearchBar from './searchBar'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card'


function HomePage() {

    const [searchType, setSearchType] = useState(true)

    const [tutorArr, setTutorArr] = useState([])

    const [searchVal, setSearchVal] = useState('')

    const [companyMap, setCompanyMap] = useState({})

    const [companyArr, setCompanyArr] = useState([])

    const [searchResults, setSearchResults] = useState([])

    // const companyMapHandler = () => {
    //     let map = {}
    //     setTimeout(500)
    //     console.log(companyArr.length)
    //     for (let i = 0; i < companyArr.length; i++){
    //         map[companyArr[i].id]=companyArr[i]
    //         console.log(map);
    //     }

    //     setCompanyMap(map)
    //     console.log(map);
    //     console.log(companyMap);

    // }

    const searchResultsHandler = (arr) => {
        setSearchResults(arr)
        // setTimeout(50)
    }

    const searchTypeHandler = (condition) => {
        setSearchType(condition)
    }

    const setTutorArrHandler = (arr) => {
        setTutorArr(arr)
    }

    const setCompanyArrHandler = (arr) => {
        setCompanyArr(arr)
        let map = {}
        console.log(arr.length)
        for (let i = 0; i < arr.length; i++){
            map[arr[i].id]=arr[i]
        }
        setCompanyMap(map)
        setTimeout(500)        
    }
    

    // const searchHandler = () => {
    //     axios.get('http://localhost:8000/api/tutors')
    //     .then( res => {
    //         console.log(res.data);
    //         setTutorArrHandler(res.data)
    //     })
    // }

    useEffect(() => {
        axios.get('http://localhost:8000/api/tutors')
        .then( res => {
            // console.log(res.data);
            setTutorArrHandler(res.data)
        })
        axios.get('http://localhost:8000/api/company')
        .then( res => {
            // console.log(res.data);
            setCompanyArrHandler(res.data)
        })
    }, [])

    useEffect(() => {
        let input = searchVal.toLowerCase().trim();
        let results = []
        // console.log(tutorArr);
        if (searchType && input !== ''){
        for (let i = 0; i < tutorArr.length; i++){
            const fullname = tutorArr[i].Fname.toLowerCase() + " " +tutorArr[i].Lname.toLowerCase()
            if (( tutorArr[i].Fname.toLowerCase().includes(input))
            || (tutorArr[i].Lname.toLowerCase().includes(input))
            || (fullname.includes(input))){
                results.push(tutorArr[i])   
            }
        }
        }
        else if(!searchType && input !==''){
            for (let i = 0; i < companyArr.length; i++){
                if (companyArr[i].companyName.toLowerCase().includes(input)){
                    results.push(companyArr[i])
                }
            }

        }
        setTimeout(50);
        searchResultsHandler(results)

    }, [searchVal])

    let classes = {
        searchDiv: "search-div-shifted-down"
    } 
    if (searchResults.length > 0){
        classes.searchDiv = "search-div"
    }
    
    return (
        <div>
            <div className="container-div"></div>
                {searchResults.length==0
                ?
                <div className="wrapper">
                    <img src="booksnew.png" style={{height: '400px'}}></img>
                </div>
                :null}
                <div className={classes.searchDiv}>
                    <button className="navButton" onClick={() => searchTypeHandler(true)}>Tutor</button>
                    <button className="navButton" onClick={() => searchTypeHandler(false)}>Company</button>
                    {searchType ? 
                    <div className="tutor-div"> 
                        <h1>Tutor </h1>
                        <SearchBar 
                            placeholder="Enter tutor name"
                            arr={tutorArr}
                            searchType={searchType}
                            setSearchVal={setSearchVal}
                        />
                    </div>
                    : 
                    <div className="company-div"> 
                        <h1>Company</h1>
                        <SearchBar 
                            placeholder="Enter company name"
                            searchType={searchType}
                            setSearchVal={setSearchVal}
                        />
                    </div> }
                </div>
             <div className="results">
                {searchType ? 
                searchResults.map((item) => {
                    return <Card searchType = {searchType} tutor = {item} companyArr={companyArr}/>
                })
                :
                searchResults.map((item) => {
                    return <Card searchType={searchType} company={item} companyMap = {companyMap}/>
                })
                }
            </div>
            </div>
    
    )
}

export default HomePage