import React from "react";

function HogBack({hog, flipHog}) {
    const {specialty, weight, greased} = hog
    const metal = hog["highest medal achieved"]
    return (
        <div className="ui card" onClick={() => flipHog(hog)}>
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight} tons</p>
            <p>Greased: {greased ? "Yes" : "No"}</p>
            <p>Metal: {metal}</p>
        </div>
    )
}
export default HogBack
