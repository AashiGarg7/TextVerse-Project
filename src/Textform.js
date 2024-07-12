import './Nav.css'
import React, { useState } from 'react'; 
export default function Textform(props) {

    const [text,setText] = useState("Enter Your Text Here");
    // const [myStyle,setMyStyle] = useState({
    //     color : "black",
    //     backgroundColor : "white"
    // });
    const [btnText, setBtnText] = useState("Dark Mode");

    const UpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const LowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const CopyText = ()=>{
        let text = document.querySelector("Textarea");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const ClearText=()=>{
        setText("");
    }
    const ExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const OnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
      }


  return (
    <>  
        <h1 className='heading'>{props.heading}</h1>
        <textarea className={`Textarea ${props.mode === 'dark' ? 'dark-mode' : 'light-mode'}`} rows="10" cols="110" onChange={OnChange} value={text} ></textarea>
          <div className='Button'>
            <button className='Converter' onClick={UpClick}>Uppercase</button>
            <button className='Converter' onClick={LowClick}>Lowercase</button>
            <button className='Converter' onClick={CopyText}>Copy Text</button>
            <button className='Converter' onClick={ClearText}>Clear Text</button>
            <button className='Converter' onClick={ExtraSpaces}>Remove Extra Spaces</button>
            {/* <button className='Converter' onClick={ModeChange}>{btnText}</button> */}
          </div>
          <div className='Summary'>
            <h1>Your Text Summary -</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} minutes read</p>
          </div>
    </>
  )
};
