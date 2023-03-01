/* eslint-disable no-restricted-globals */
import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newtext=text.toUpperCase()
setText(newtext)
  }

  const handleOnchange=()=>{
    console.log("on change")
   setText(event.target.value)

  }
  const handlelowClick=()=>{
    let newText=text.toLowerCase()
    setText(newText);
  }
  const handleclrClick=()=>{
    let newText=('')
    setText(newText);
  }

  const handleCpyClick=()=>{
    navigator.clipboard.writeText(text)
  }

 
  const [text,setText]=useState('')
 // setText="new text"//correct way to use state
  return (
    <>
    <div className='container'> 
        <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea class="form-control" value={text} id="textbox" rows="8" onChange={handleOnchange}></textarea>
  <h5 className='m-2 mt-2'> maxlength={100} </h5>
</div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCaseLetter</button>
    <button className="btn btn-primary m-3" onClick={handlelowClick}>Convert To LowerCaseletter</button>
    <button className="btn btn-primary m-3" onClick={handleclrClick}> clear text</button>
    <button className='btn btn-primary m-3' onClick={handleCpyClick}>Copy to clipBoard</button>
   
   
    </div>
    <div className="container">
   
      <h2>preview</h2>
      <p>{text}</p>
      
    </div>
    </>
  )

}



