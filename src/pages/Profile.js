import React from "react"

function Profile(props) {

    const uid = props.match.params.uid

    return (
        <h1>This is the Profile page for {uid}</h1>
    )
}

export default  Profile