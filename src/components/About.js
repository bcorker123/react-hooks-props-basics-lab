import React from "react";
import user from "../data/user";
import Links from './Links'

function renderBio(props){
  if(!props.bio){
    return null
  } else {
    return (<p>{props.bio}</p>)
  }
}

function About(props) {
  //console.log(props.github)
  return (
    <div id="about">
      <h2>About Me</h2>
      {renderBio(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.linkedin} github={props.github}/>
    </div>
  );
}

export default About;
