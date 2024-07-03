import React, {useState} from "react";


function FormText(props) {
  const [text, setText] = useState("Enter Text Here");

  const UpClick =()=>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert(" Converted to UpperCase","success ")
  }


  
  const loClick =()=>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert(" Converted to LowerCase","success ")
  }
  const speakText =()=>{
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
    props.showAlert(" Speaking","success ")
  }
  const stopText =()=>{
    speechSynthesis.cancel();
    props.showAlert(" Stopped Speaking","success ")

  }
  const wordCount = (text) => {
    const trimmedText = text.trim();
    if (!trimmedText) return 0;
    return trimmedText.split(/\s+/).length;
  };

  const onChange=(e)=>{
    setText(e.target.value)
  }
  return (
   <>
    <div>
<div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea value={text} className="form-control" id="myBox" rows="8" onChange={onChange}></textarea>
  <button className="btn btn-primary my-3 mx-3" onClick={UpClick}>Convert To UpperCase</button>
  <button className="btn btn-primary my-3 mx-3" onClick={loClick}>Convert To LowerCase</button>
  <button className="btn btn-primary my-3 mx-3" onClick={speakText}>Speak</button>
  <button className="btn btn-primary my-3 mx-3" onClick={stopText}>Stop Speak</button>
</div>
   </div>
   <div className="container my-3">
    <h2 className="text-center my-3" >Your Text Summary</h2>
    <h5>{wordCount(text)} words and {text.length} characters</h5>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter Some Text To Preview"}</p>
   </div>
   </>
  )
}

export default FormText






