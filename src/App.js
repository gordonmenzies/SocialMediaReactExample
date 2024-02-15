/*

  ERROR WITH DISPLAYING DAY SOMETIMES DISPLAYS 0 WHEN IT SHOULD DISPLAY 0.
  COULD IMPROVE LAYOUT

*/


import {useState} from 'react'
import {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import ProfileInfo from './Component/ProfileInfo';

function App() {

  const [buttonColor, setButtonColor] = useState("red")
  const [colorOptions, setColorOptions] = useState(['red','green','blue'])
  const [profiles ,setProfiles] = useState([])

  
  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://randomuser.me/api/?results=20';
    
    // Make a GET request
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        let i = 0
        let tempProfiles = []
        
        while (i < data.results.length) {
          tempProfiles[i] = data.results[i]
          i++
        }
        console.log("temp Profiles " + tempProfiles)
        setProfiles(tempProfiles)
      })
    }, []);
  
      
      function dob(user) {
      let wanted = user.dob.date
      let wantedSpecfic = wanted.slice(0,9)
      //console.log(wantedSpecfic)
      let year = wantedSpecfic.slice(0,4)
      let month = wantedSpecfic.slice(5,7)
      let day = wantedSpecfic.slice(8)  
      wantedSpecfic = "0" + day + " " + month + " " + year
      return wantedSpecfic
      }

  return (
        <body>
          <header>
          <div id="green">
            <h1 id="link"> Pink Book</h1>
          </div>
            <div id="nav_menu">
              <div className="navbar" id="link1"> 
                <h1>Settings</h1>
              </div>
              <div className="navbar" id="link2"> 
                <h1>Account</h1>
              </div>
              <div className="navbar" id="link3">
              <h1>Display</h1>
            </div>
          </div>
          </header>
          <div id="profileSpace">
              {profiles.map((profiles) => {
                return (
                  <ProfileInfo 
                  name={profiles.name.first} 
                  dob={dob(profiles)} 
                  age={profiles.dob.age}
                  image={profiles.picture.medium}/>
                )
              })}  
          </div>
        </body>

  );
}


export default App;
