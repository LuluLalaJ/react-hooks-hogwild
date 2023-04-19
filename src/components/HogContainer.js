import React, { useState } from "react";
import HogCard from "./HogCard";

function HogContainer({ hogsData }) {
    const updatedHogs = hogsData.map((hog, index) => {return {...hog, id: index + 1, flipped: false}})
    const [hogs, setHogs] = useState(updatedHogs)

    function flipHog(flippedHog) {
        const flippedHogs = hogs.map(hog => {
            if (hog.id === flippedHog.id) {
                let isFlipped = hog.flipped
                return {...hog, flipped: !isFlipped}
            } return hog
        })
        setHogs(flippedHogs)
    }

    const renderHogs = hogs.map(hog => <HogCard key={hog.id} hog={hog} flipHog={flipHog}/>)

    return (
        <div className="ui grid container">
            {renderHogs}

        </div>
    )
}

export default HogContainer
