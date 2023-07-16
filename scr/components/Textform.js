import React, {useState} from 'react';

export default function TextForm (props){
    //button to convert into Uppercase
    const handleUpClick= () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    //button to convert into Lowercase
    const handleLoClick= () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    //button to convert into Reverse
    const handleReverse= () =>{
        let newSplit = text.split("")
        let newRev = newSplit.reverse()
        let newText = newRev.join("");
        setText(newText)
    }

    //enables to write in the textbox
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const[text, setText]= useState("");
    return(
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1> {props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange ={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#19191a', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"> </textarea>
            </div>
            <button className="btn-btn-primary mx-1 my-1 btn btn-outline-warning" onClick= {handleUpClick}> Convert to UpperCase </button>
            <button className="btn-btn-primary mx-1 my-1 btn btn-outline-warning" onClick= {handleLoClick}> Convert to LowerCase </button>
            <button className="btn-btn-primary mx-1 my-1 btn btn-outline-warning" onClick= {handleReverse}> Convert to Reverse </button>
        </div>

        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>   {/*filter() sends only those elements to the array only if it is present, else for no characters it reads 0 words */}
          <p>{0.008* (text.split(" ")).length} Minutes read</p>  
          <h2>Preview</h2>
          <p>{text.length>0? text: "Enter somethong in the textbox to preview"}</p>
        </div>
        </>
    )
}
