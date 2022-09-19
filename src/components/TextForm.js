import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClicked = ()=>{
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }
    const handleLoClicked = ()=>{
        const newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lower case", "success")
    }
    // Credits: A
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success")
    }
    
    const handleOnChangeInit = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");
  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>       
        <div className="mb-3">
            <textarea className="form-control" id="myBox"  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChangeInit} rows="10" placeholder={props.ph}></textarea>
        </div>
        <div className="mb-3">
            <button className="btn btn-primary mx-1" onClick={handleUpClicked}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClicked}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </div>
  )
}
