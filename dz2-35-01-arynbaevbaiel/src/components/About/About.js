import React from 'react';

const info = {
    title: "Some Title",
    body: "Some body"
};

function Subtitle(props) {
    return (
        <div>
            <h2>{props.info.title}</h2>
            <p>{props.info.body}</p>
        </div>
    )
}


function About () {
    return (
        <Subtitle info={info}/>
    )
}

export default About;