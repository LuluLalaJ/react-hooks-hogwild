import React, { useState } from "react";
import HogCard from "./HogCard";
import HogFilterSort from "./HogFilterSort";

function HogContainer({ hogsData }) {
    const updatedHogs = hogsData.map((hog, index) => {return {...hog, id: index + 1, flipped: false}})
    const [hogs, setHogs] = useState(updatedHogs)
    const [filter, setFilter] = useState('All')

    function flipHog(flippedHog) {
        const flippedHogs = hogs.map(hog => {
            if (hog.id === flippedHog.id) {
                let isFlipped = hog.flipped
                return {...hog, flipped: !isFlipped}
            } return hog
        })
        setHogs(flippedHogs)
    }

//need to refactor this part
    function updateFilter(e) {
        let condition = e.target.value
        if (condition === 'Greased') {
            setFilter(true)
        } else if (condition === 'Non-Greased') {
            setFilter(false)
        } else setFilter('All')
    }

    const filteredHogs = hogs.filter(hog => filter === "All" || filter === hog.greased)

    function sortHogs(e) {
        console.log(e.target.value)
    }

    const renderHogs = filteredHogs.map(hog => <HogCard key={hog.id} hog={hog} flipHog={flipHog} />)

    return (
        <div className="ui grid container">
            <HogFilterSort  filterHogs={updateFilter} sortHogs={sortHogs} />
            {renderHogs}
        </div>
    )
}

export default HogContainer
