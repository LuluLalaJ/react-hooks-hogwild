import React from "react";
import HogFront from './HogFront';
import HogBack from './HogBack';

function HogCard({hog, flipHog }) {

    return (
        <div >
            {hog.flipped
            ? <HogBack hog={hog} flipHog={flipHog} />
            : <HogFront hog={hog} flipHog={flipHog}/> }
        </div>
    )
}

export default HogCard
