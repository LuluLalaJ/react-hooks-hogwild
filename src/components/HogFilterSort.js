import React from "react";

function HogFilterSort({filterHogs, sortHogs}) {
    return(
        <div>
            <label>Filter By: </label>
            <select onChange={filterHogs} >
                <option value='All' >All</option>
                <option value='Greased' >Greased</option>
                <option value='Non-Greased' >Non-Greased</option>
            </select>
            <br />
            <label>Sort By: </label>
            <select onChange={sortHogs} >
                <option value='None' >None</option>
                <option value='Weight' >Weight</option>
                <option value='Name' >Name</option>
            </select>
        </div>
    )
}

export default HogFilterSort
