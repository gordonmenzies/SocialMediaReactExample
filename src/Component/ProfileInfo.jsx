import { useState } from "react";
import "./ProfileInfo.css"

//functional component - must be Capitalised
function ProfileInfo(props){

    // Variables and functions go here
    /*
        when the button is pressed, 
        identify which component button is pressed
        pick that friend 
        add them to the addFriends state


    */
       function handleButtonClick() {
        props.onChange(props.profileID)
       }


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
            <button onClick={handleButtonClick}>Add Friend</button>
    </div>
    )  
}


export default ProfileInfo
