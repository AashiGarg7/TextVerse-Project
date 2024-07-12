import React, {useState} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

export default function Nav(props) {

  // const [text,setText] = useState("Enter Your Text Here");
  // const [myStyle,setMyStyle] = useState({
  //   color : "black",
  //   backgroundColor : "white"
  // });
  // const [btnText, setBtnText] = useState("Dark Mode");

  // const UpClick=()=>{
  //   let newText = text.toUpperCase();
  //   setText(newText);
  // }
  // const LowClick=()=>{
  //   let newText = text.toLowerCase();
  //   setText(newText);
  // }
  // const CopyText = ()=>{
  //   let text = document.querySelector("Textarea");
  //   text.select();
  //   navigator.clipboard.writeText(text.value);
  // }
  // const ClearText=()=>{
  //   setText("");
  // }



  // const ModeChange=()=>{
  //   console.log("mode change");
  //   let mode = document.querySelector('button');
  //   let body = document.querySelector('body');
  //   let text = document.querySelector('textarea');
  //   // body.style.backgroundColor = "white";
  //   if(body.style.backgroundColor == "white"){
  //     mode.innerText = "Light Mode";
  //     mode.style.color = "black";
  //     mode.style.backgroundColor = "white";
  //     body.style.color = "white";
  //     body.style.backgroundColor = "black";
  //     text.style.backgroundColor = "black";
  //     text.style.color = "white";
  //   }
  //   else{
  //     mode.innerText = "Dark Mode";
  //     mode.style.color = "white";
  //     mode.style.backgroundColor = "black";
  //     body.style.color = "black";
  //     body.style.backgroundColor = "white";
  //     text.style.backgroundColor = "white";
  //     text.style.color = "black";
  //   }

  // }

  // const ModeChange = ()=>{
  //   if(myStyle.color == 'white'){ //switch from dark to light
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: "white" 
  //     })
  //     setBtnText("Dark Mode");
  //   }
  //   else{  //switch from light to dark
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: "black" 
  //     })
  //     setBtnText("light Mode");
  //   }
  // }


  // const OnChange=(event)=>{
  //   // console.log("On Change");
  //   setText(event.target.value);
  // }




  return (
    <>
      <div className={`${props.mode === 'dark' ? 'dark-mode' : 'light-mode'}`}> 
          <div className='Nav'>
              <h3>TextVerse</h3>
              <Link  className='NavLink' to="/">Home</Link>
              <Link className='NavLink' to="/about">About</Link>
              <div className="switch form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.ModeChange} checked={props.mode === 'dark'}/>
                  <label className="form-check-label" id="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Light mode' : 'Dark mode'}</label>
              </div>
          </div>
      </div>
  </>
  )
};

