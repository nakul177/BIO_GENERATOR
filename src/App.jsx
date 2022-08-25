import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
 
  const [data , setData] = useState({
    name:"Nakul",
    location:"khamgaon",
    stream:"hotel management",
    school:"UEI Gobal",
    occupation:"Hotel",
    religion:"Hindu",
    meeting:"just conversation",
    gender:"male",
    image:"./profile-png-icon-2.png"

  })


  
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedLocation, setIsCheckedLocation] = useState(true);
  const [isCheckedOccuption, setIsCheckedoccuption] = useState(true);
  const [isCheckedReligion, setIsCheckedReligion] = useState(true);
  const [isCheckedSchool, setIsCheckedSchool] = useState(true);

  const handleInput = (e) => {
     const {className , value} = e.target

     setData({...data , [className]:value})
  };
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const handleOnChangeReligion = () => {
    setIsCheckedReligion(!isCheckedReligion);
  };
  const handleOnChangeLocation = () => {
    setIsCheckedLocation(!isCheckedLocation);
  };
  const handleOnChangeOccuption = () => {
    setIsCheckedoccuption(!isCheckedOccuption);
  };
  const handleOnChangeSchool = () => {
    setIsCheckedSchool(!isCheckedSchool);
  };

 

 
  const generateRandomSchool = () => {
    let schoolArray = ["SCSMV", "sant tukaram school", "rayat school", "GMVIT"];
    setData(schoolArray[Math.floor(Math.random() * 4)]);
    console.log();
  };
  const generateRandomName = () => {
    let schoolArray = ["Parag", "Sattya", "Deva", "Rupesh"];
    setData(schoolArray[Math.floor(Math.random() * 4)]);
  };

  const generateRandomSpecialization = () => {
    let schoolArray = ["Science", "Arts", "commerce", "Socialscience"];
    setData(schoolArray[Math.floor(Math.random() * 4)]);
  };

  const generateRandomLocation = () => {
    let schoolArray = ["Pune", "Mumbai", "Nagpur", "Raigad"];
    setData(schoolArray[Math.floor(Math.random() * 4)]);
    console.log();
  };

  const generateRandomOccupation = () => {
    let OccuptionArray = ["Engineer", "Developer", "businessman", "Politacian"];
    setData(OccuptionArray[Math.floor(Math.random() * 4)]);
    console.log();
  };
  const generateRandomReligion = () => {
    let religionArray = ["Hindu", "sikh", "jain", "Buddhist"];
    setData(religionArray[Math.floor(Math.random() * 4)]);
    console.log();
  };

  const photoUpload = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setData(reader.result);
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };


  return (
    <div className="App" id="app">
      <h1 className="heading">Bio - Generator</h1>
      <div className="container">
       <form action="">
          <h2 className="box">Options</h2>
          <div className="box">
            <label>Profile photo</label>
            <input type="file" onChange={photoUpload}></input>
          </div>

          <div className="box">
            <label>Name</label>
            <input
            className="name"
              type="text"
              value={data.name}
              placeholder="Enter name"
              onChange={handleInput}
            />
            <label>Gender</label>
            <select onChange={handleInput} className="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button onClick={generateRandomName}>Random name</button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedLocation}
              onChange={handleOnChangeLocation}
            ></input>
            <label>Location</label>
            <input
            className="location"
              type="text"
              value={data.location}
              onChange={handleInput}
            ></input>
            <button onClick={generateRandomLocation}>Random Location</button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedSchool}
              onChange={handleOnChangeSchool}
            ></input>
            <label>School</label>
            <input
            className="schoo;"
              type="text"
              value={data.school}
              onChange={handleInput}
            ></input>
            <button onClick={generateRandomSchool}>Random School</button>
            <br />
            <label>Specialization</label>
            <input
            className="stream"
              type="text"
              value={data.stream}
              onChange={handleInput}
            ></input>
            <button onClick={generateRandomSpecialization}>
              Random Specialization
            </button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedOccuption}
              onChange={handleOnChangeOccuption}
            ></input>
            <label>Occupation</label>
            <input
            className="occupation"
              type="text"
              value={data.occupation}
              onChange={handleInput}
            ></input>
            <button onClick={generateRandomOccupation}>
              Random Occupation
            </button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedReligion}
              onChange={handleOnChangeReligion}
            ></input>
            <label>Religious background</label>
            <textarea
              rows="5"
              cols="20"
              className="religion"
              value={data.religion}
              onChange={handleInput}
            ></textarea>
            <button onClick={generateRandomReligion}>Random religion</button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isChecked}
              onChange={handleOnChange}
            ></input>
            <label
              style={{
                verticalAlign: "middle",
                margin: "3px",
                marginBottom: "6px",
                padding: "0",
                color: "#222",
              }}
            >
              meeting reason
            </label>
            <textarea
              className="meeting"
              rows="5"
              cols="20"
              value={data.meeting}
              onChange={handleInput}
            ></textarea>
            <button
              className="selectbutton"
              onClick={() => setData("for peace of mind")}
            >
              For peace
            </button>
            <button
              className="selectbutton"
              onClick={() => setData("for personal reason")}
            >
              For personal reason
            </button>
            <button
              className="selectbutton"
              onClick={() => setData("for payer to fill energetic ")}
            >
              For prayer
            </button>
          </div>
          </form>

        <div className="result" id="result">
          <h2 className="box">Result</h2>

          <div className="imagediv">
            {data.image ? <img src={data.image} alt="profile photo" /> : null}
          </div>

          <div className="box">
            {data.name} {isCheckedLocation ? `is from the ${data.location}` : null}{" "}
            {isCheckedSchool
              ? `${
                  data.gender == "male" ? "He" : "She"
                } is studying ${data.stream} at ${data.school}`
              : null}
            .
            {isCheckedOccuption
              ? `${
                  data.gender == "male" ? " His" : " Her"
                } occupation is ${data.occupation}`
              : null}
            {isCheckedReligion
              ? `${data.gender == "male" ? " His" : " Her"} religion is ${data.religion}`
              : null}{" "}
            {data.gender == "male" ? "He" : "She"}{" "}
            {isChecked ? `meet you for ${data.meeting}` : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
