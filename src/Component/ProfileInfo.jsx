import { useState } from "react";
import "./ProfileInfo.css"

//functional component - must be Capitalised
function ProfileInfo(props){

    // Variables and functions go here

    //HTML goes in the return.
    return(
        <div id="container">
        <div id="image">
            <img src={props.image} id="actualImage"/>
        </div>
        <div id="listOfInformation">
            <h1>Name: {props.name} </h1>
            <h1>DOB : {props.dob}</h1>
            <h1>Age : {props.age}</h1>
        </div>
            <button>Friend Request</button>
    </div>
    )  
}


export default ProfileInfo
