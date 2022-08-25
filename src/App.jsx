
// import { useState } from "react";

// import "./App.css";

// function App() {
//   const [data, setData] = useState({
//     name: "Nakul",
//     location: "khamgaon",
//     stream: "hotel management",
//     school: "UEI Gobal",
//     occupation: "Hotel",
//     religion: "Hindu",
//     meeting: "just conversation",
//     gender: "male",
//     image: "../public/download.png",
//   });

//   const [isChecked, setIsChecked] = useState(true);
//   const [isCheckedLocation, setIsCheckedLocation] = useState(true);
//   const [isCheckedOccuption, setIsCheckedoccuption] = useState(true);
//   const [isCheckedReligion, setIsCheckedReligion] = useState(true);
//   const [isCheckedSchool, setIsCheckedSchool] = useState(true);

//   const handleInput = (e) => {
//     const { className, value } = e.target;

//     setData({ ...data, [className]: value });
//   };
//   const handleOnChange = () => {
//     setIsChecked(!isChecked);
//   };
//   const handleOnChangeReligion = () => {
//     setIsCheckedReligion(!isCheckedReligion);
//   };
//   const handleOnChangeLocation = () => {
//     setIsCheckedLocation(!isCheckedLocation);
//   };
//   const handleOnChangeOccuption = () => {
//     setIsCheckedoccuption(!isCheckedOccuption);
//   };
//   const handleOnChangeSchool = () => {
//     setIsCheckedSchool(!isCheckedSchool);
//   };

//   const generateRandomSchool = () => {
//     let schoolArray = ["A.k school", "Loins school", "St'n school", "HUPM"];
//     setData(schoolArray[Math.floor(Math.random() * 4)]);
//   };
//   const generateRandomName = () => {
//     let namearr = ["Akasha", "Navin", "Dev", "Ruhul"];
//      setData({...data , data.name:(namearr[Math.floor(Math.random() * 4)])});
  
    
//   };

//   const generateRandomSpecialization = () => {
//     let schoolArray = ["Science", "Arts", "commerce", "businessmengetn"];
//     setData(schoolArray[Math.floor(Math.random() * 4)]);
//   };

//   const generateRandomLocation = () => {
//     let schoolArray = ["Nagpur", "Mumbai", "Pune", "Akola"];
//     setData(schoolArray[Math.floor(Math.random() * 4)]);
//   };

//   const generateRandomOccupation = () => {
//     let OccuptionArray = ["Engineer", "Developer", "Politacian", "UPSC"];
//     setData(OccuptionArray[Math.floor(Math.random() * 4)]);
//   };
//   const generateRandomReligion = () => {
//     let religionArray = ["Hindu", "sikh", "jain", "Buddhist"];
//     setData(religionArray[Math.floor(Math.random() * 4)]);
//   };

//   const photoUpload = (e) => {
//     const reader = new FileReader();
//     const file = e.target.files[0];
//     reader.onloadend = () => {
//       setData(reader.result);
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result,
//       });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="App" id="app">
//       <h1 className="heading">Bio - Generator</h1>
//       <div className="container">
//         <div className="option">
//           <h2 className="box">Options</h2>
//           <div className="box">
//             <label>Profile photo</label>
//             <input type="file" onChange={photoUpload} className="image"></input>
//           </div>

//           <div className="box">
//             <label>Name</label>
//             <input
//               className="name"
//               type="text"
//               value={data.name}
//               placeholder="Enter name"
//               onChange={handleInput}
//             />
//             <label>Gender</label>
//             <select onChange={handleInput} className="gender">
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//             <button onClick={generateRandomName}>Random name</button>
//           </div>
//           <div className="box">
//             <input
//               type="checkbox"
//               value="false"
//               checked={isCheckedLocation}
//               onChange={handleOnChangeLocation}
//             ></input>
//             <label>Location</label>
//             <input
//               type="text"
//               className="location"
//               value={data.location}
//               onChange={handleInput}
//             ></input>
//             <button onClick={generateRandomLocation}>Random Location</button>
//           </div>
//           <div className="box">
//             <input
//               type="checkbox"
//               value="false"
//               checked={isCheckedSchool}
//               onChange={handleOnChangeSchool}
//             ></input>
//             <label>School</label>
//             <input
//               className="school"
//               type="text"
//               value={data.school}
//               onChange={handleInput}
//             ></input>
//             <button onClick={generateRandomSchool}>Random School</button>
//             <br />
//             <label>Specialization</label>
//             <input
//               type="text"
//               value={data.stream}
//               className="stream"
//               onChange={handleInput}
//             ></input>
//             <button onClick={generateRandomSpecialization}>
//               Random Specialization
//             </button>
//           </div>
//           <div className="box">
//             <input
//               type="checkbox"
//               value="false"
//               checked={isCheckedOccuption}
//               onChange={handleOnChangeOccuption}
//             ></input>
//             <label>Occupation</label>
//             <input
//               type="text"
//               className="occupation"
//               value={data.occupation}
//               onChange={handleInput}
//             ></input>
//             <button onClick={generateRandomOccupation}>
//               Random Occupation
//             </button>
//           </div>
//           <div className="box">
//             <input
//               type="checkbox"
//               value="false"
//               checked={isCheckedReligion}
//               onChange={handleOnChangeReligion}
//             ></input>
//             <label>Religious background</label>
//             <textarea
//               rows="5"
//               cols="20"
//               value={data.religion}
//               onChange={handleInput}
//               className="religion"
//             ></textarea>
//             <button onClick={generateRandomReligion}>Random religion</button>
//           </div>
//           <div className="box">
//             <input
//               type="checkbox"
//               value="false"
//               checked={isChecked}
//               onChange={handleOnChange}
//             ></input>
//             <label
//               style={{
//                 verticalAlign: "middle",
//                 margin: "3px",
//                 marginBottom: "6px",
//                 padding: "0",
//                 color: "#222",
//               }}
//             >
//               meeting reason
//             </label>
//             <textarea
//               rows="5"
//               cols="20"
//               value={data.meeting}
//               onChange={handleInput}
//               className="meeting"
//             ></textarea>
//             <button className="selectbutton" onClick={handleInput}>
//               For peace
//             </button>
//             <button className="selectbutton" onClick={handleInput}>
//               For personal reason
//             </button>
//             <button className="selectbutton" onClick={handleInput}>
//               For prayer
//             </button>
//           </div>
//         </div>

//         <div className="result" id="result">
//           <h2 className="box">Result</h2>

//           <div className="imagediv">
//             {data.image ? (
//               <img src={data.image} alt="profile photo" />
//             ) : null}
//           </div>

//           <div className="box">
//             {data.name}{" "}
//             {isCheckedLocation ? `is from the ${data.location}` : null}{" "}
//             {isCheckedSchool
//               ? `${data.gender === "male" ? "He" : "She"} is studying ${
//                   data.stream
//                 } at ${data.school}`
//               : null}
//             .
//             {isCheckedOccuption
//               ? `${data.gender === "male" ? " His" : " Her"} occupation is ${
//                   data.occupation
//                 }`
//               : null}
//             {isCheckedReligion
//               ? `${data.gender === "male" ? " His" : " Her"} religion is ${
//                   data.religion
//                 }`
//               : null}{" "}
//             {data.gender === "male" ? "He" : "She"}{" "}
//             {isChecked ? `meet you for ${data.meeting}` : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import {  useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Nakul");
  const [location, setLocation] = useState("Khamgaon");
  const [stream, setStream] = useState("Hotel ");
  const [school, setSchool] = useState("UEI Gobal");
  const[occupation,setOccupation]=useState("Engineer");
  const[religion,setReligion]=useState("Hindu")
  const[meeting,setMeeting]=useState("just conversation");
  const[image,setimage]=useState("../public/download.png");
  const [gender,setGender]=useState("male");
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedLocation, setIsCheckedLocation] = useState(true);
  const[isCheckedOccuption,setIsCheckedoccuption]=useState(true)
  const[isCheckedReligion,setIsCheckedReligion]=useState(true)
  const[isCheckedSchool,setIsCheckedSchool]=useState(true)

  
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const handleOnChangeReligion=()=>{
    setIsCheckedReligion(!isCheckedReligion)
  }
  const handleOnChangeLocation = () => {
    setIsCheckedLocation(!isCheckedLocation);
  };
  const handleOnChangeOccuption = () => {
    setIsCheckedoccuption(!isCheckedOccuption);
  };
  const handleOnChangeSchool=()=>{
    setIsCheckedSchool(!isCheckedSchool)
  }


  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleInputStream = (e) => {
    setStream(e.target.value);
  };

  const handleInputSchool = (e) => {
    setSchool(e.target.value);
  };

    const handleOccupation=(e)=>{
    setOccupation(e.target.value)
  }
  const handleReligion=(e)=>{
    setReligion(e.target.value)
  }
  const handleMeeting=(e)=>{
    setMeeting(e.target.value)
  }
  const handleGender=(e)=>{
    setGender(e.target.value)
  }
  const generateRandomSchool=()=>{
    let schoolArray=["Ak schoo;","Lonis school","Zp school","HUMP"]
    setSchool(schoolArray[Math.floor(Math.random()*4)])

  }
  const generateRandomName=()=>{
    let schoolArray=["Nakul","Aakash","Rahul","Navin"]
    setName(schoolArray[Math.floor(Math.random()*4)])
    

  }
  
  const generateRandomSpecialization=()=>{
    let schoolArray=["Science","Arts","commerce","Socialscience"]
    setStream(schoolArray[Math.floor(Math.random()*4)])
    

  }
  
  const generateRandomLocation=()=>{
    let schoolArray=["Pune","Mumbai","Nagpur","Dehli"]
    setLocation(schoolArray[Math.floor(Math.random()*4)])
    console.log()

  }
  
  const generateRandomOccupation=()=>{
    let OccuptionArray=["Engineer","Developer","businessman","Politacian"]
    setOccupation(OccuptionArray[Math.floor(Math.random()*4)])
    console.log()

  }
  const generateRandomReligion=()=>{
    let religionArray=["Hindu","sikh","jain","Buddhist"]
    setReligion(religionArray[Math.floor(Math.random()*4)])
    console.log()

  }
  
  
  
  
  const photoUpload=(e)=>{
  const reader=new FileReader()
  const file = e.target.files[0];
  reader.onloadend = () => {
    setimage(reader.result)
    this.setState({
      file: file,
      imagePreviewUrl: reader.result
    });
  }
  reader.readAsDataURL(file);
}
console.log(gender)


  return (
    <div className="App" id="app">
       
      <h1 className="heading">Bio - Generator</h1>
      <div className="container">
        <div className="option">

          
          <h2 className="box">Options</h2>
          <div className="box">
           
            <label>Profile photo</label>
          <input type="file" onChange={photoUpload}></input>
          </div>

          
          <div className="box">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={handleInputName}
          />
          <label>Gender</label>
          <select onChange={(e)=>handleGender(e)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button onClick={generateRandomName}>Random name</button>

          </div>
          <div className="box">
          <input type="checkbox"
          value="false"
          checked={isCheckedLocation}
          onChange={handleOnChangeLocation}
          
          ></input>
            <label>Location</label>
            <input type="text" value={location} onChange={handleInputLocation}></input>
            <button onClick={generateRandomLocation}>Random Location</button>
            

          </div>
          <div className="box">
          <input type="checkbox"
          value="false"
          checked={isCheckedSchool}
          onChange={handleOnChangeSchool}
          
          ></input>
            <label>School</label>
            <input type="text" value={school} onChange={handleInputSchool}></input>
            <button onClick={generateRandomSchool}>Random School</button>
            <br/>
            <label>Specialization</label>
            <input type="text" value={stream}
             onChange={handleInputStream}></input>
            <button onClick={generateRandomSpecialization}>Random Specialization</button>
            

          </div>
          <div className="box">
          <input type="checkbox"
           value="false"
           checked={isCheckedOccuption}
           onChange={handleOnChangeOccuption}
           ></input>
            <label>Occupation</label>
            <input type="text" value={occupation} onChange={handleOccupation}></input>
            <button onClick={generateRandomOccupation}>Random Occupation</button>
            

          </div>
          <div className="box">
          <input type="checkbox"
          value="false"
          checked={isCheckedReligion}
          onChange={handleOnChangeReligion}
          ></input>
            <label>Religious background</label>
            <textarea rows="5" cols="20" value={religion} onChange={handleReligion}></textarea>
            <button onClick={generateRandomReligion}>Random religion</button>
            

          </div>
          <div className="box">
          <input type="checkbox" value="false"
          checked={isChecked}
          onChange={handleOnChange}
          ></input>
            <label style={{verticalAlign:"middle",margin:"3px",marginBottom:"6px",padding:"0",color:"#222"}}>meeting reason</label>
            <textarea  className="textarea" rows="5" cols="20" value={meeting} onChange={handleMeeting}></textarea>
            <button className="selectbutton" onClick={()=>setMeeting("for peace of mind")}>For peace</button>
            <button className="selectbutton" onClick={()=>setMeeting("for personal reason")}>For personal reason</button>
            <button  className="selectbutton" onClick={()=>setMeeting("for payer to fill energetic ")}>For prayer</button>
            
            

          </div>
          </div>
          
          
          
          
          
           
          
            
            
             
            
            
        
        <div className="result" id="result">
          <h2 className="box">Result</h2>
         
          
          <div className="imagediv">
          {image ? <img src={image} alt="profile photo" />:null}
          </div>
          
          <div className="box">
            {name} {isCheckedLocation ? `is from the ${location}` : null}  {isCheckedSchool?`${gender==="male"? "He":"She"} is studying ${stream} at ${school}`:null}.{isCheckedOccuption ? `${gender==="male"? " His":" Her"} occupation is ${occupation}` : null}   
            {isCheckedReligion ? `${gender==="male"? " His":" Her"} religion is ${religion}` : null}   {gender==="male"? "He":"She"} {isChecked ? `meet you for ${meeting}` : null} 

          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;