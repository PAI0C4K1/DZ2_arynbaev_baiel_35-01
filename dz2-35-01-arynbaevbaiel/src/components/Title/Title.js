import React from "react";

function Title2(props) {
    return (
        <h2>{props.title}</h2>
    )
}

function Title () {
    return (
        <>
            <Title2 title="Hello world"/>
        </>
    )
}
export default Title;