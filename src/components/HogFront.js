import React from "react";

function HogFront({ hog, flipHog }) {
    const {name, image} = hog
    return(
        <div className="ui card" onClick={() => flipHog(hog)}>
            <img src={image}/>
            <p>{name}</p>
        </div>
    )
}

export default HogFront
