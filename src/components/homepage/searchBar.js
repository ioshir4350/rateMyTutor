import React, { useState } from 'react'



function SearchBar(props) {

    const searchValHandler = (event) => {
        props.setSearchVal(event.target.value)
    }

    

    return (
        <div>
        <input
            className="form-control"
            style={{width: '60%', marginLeft:'auto', marginRight:'auto'}}
            type="search"
            placeholder="Search"
            onChange={searchValHandler}
        ></input>
        </div>
    )

}

export default SearchBar