import React, { useState } from 'react'
import PropTypes from 'prop-types'

console.log()
export default function TextForm(props) {
  const [text, setText] = useState("");

  // text = "New Text"; //Wrong Way To Change Text

  // setText("New Text"); // Correct Way To Change Text

  // setText("Enter New Text")

  const handleCopyText = () => {

    var textInput  =  document.getElementById("exampleFormControlTextarea");
    textInput.select();

    navigator.clipboard.writeText(textInput.value);

  }

  const handleUppercaseClick = () => {
    
    let UpperCase = text.toUpperCase();

    setText(UpperCase)
  }
  const handleLowercaseClick = () => {
    // console.log("HandleUpperCase Function Is Invoke")
    // setText("You Have Clicked On Convert TO Uppercase")
    let LowerCase = text.toLowerCase();

    setText(LowerCase)
  }
  const handleCapitalCaseClick = () => {
    // console.log("HandleUpperCase Function Is Invoke")
    // setText("You Have Clicked On Convert TO Uppercase")
    let capitalCase = text.toLowerCase().split(" ");
    let newArr = []
    // console.log(capitalCase[0].toUpperCase());

    for(let i = 0 ; i <= capitalCase.length - 1; i++){
      let temp = capitalCase[i]
        temp =  temp.replace( capitalCase[i].charAt(0) , capitalCase[i].charAt(0).toUpperCase());

       newArr.push(temp)
       
      }
      
    capitalCase  =  newArr.join(" ");
    console.log(capitalCase)

    // console.log(newArr)

    setText(capitalCase)
  }
  const handleClearText = () => {
    // console.log("HandleUpperCase Function Is Invoke")
    // setText("You Have Clicked On Convert TO Uppercase")
    let clearText = "";

    setText(clearText)
  }
  const handleOnChange = (event) => {
    // console.log("handleOnChange Function Is Invoke")
    setText(event.target.value);
  }

  return (
    <>
      <div className="container" style={{color : props.color}}>

        <div className='FormHeading mt-4'>
          <h1>{props.heading}</h1>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" >{props.label}</label>
          <textarea className="form-control" id="exampleFormControlTextarea" style={{background: props.mode ==="dark"?"#00000050":"#FFFFFF" , color : props.color  , resize : "none"}} value={text}  onChange={handleOnChange}  rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUppercaseClick}>
          <p>Convert To Uppercase</p>
        </button>
        <button className='btn btn-primary mx-2' onClick={handleLowercaseClick}>
          <p>Convert To Lowercase</p>
        </button>
        <button className='btn btn-primary mx-2' onClick={handleCapitalCaseClick}>
          <p>Convert TO Capitalcase</p>
        </button>
        <button className='btn btn-secondary mx-2' onClick={handleCopyText}>
          <p>Copy Text</p>
        </button>
        <button className='btn btn-danger mx-2' onClick={handleClearText}>
          <p>Clear All Text</p>
        </button>

      </div>
      <div className="container mt-4" style={{color : props.color}}>
        <h2>Your Text Summary Is Showing Below</h2>
        <p>Text has {text.split(" ").length} word</p>
        <p>Text has {text.length} characters</p>
        <p>Text Need {(text.split(" ").length * 0.008)} Minutes To Read The Sentence </p>
        <div className=' my-2'>
          <h3 className=''>
            Preview
          </h3>
          <p>{text.length>0 ? text : "Enter Something In The Above Textbox To Preview It Here"}</p>
        </div>
      </div >
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  label: PropTypes.string
};

TextForm.defaultProps = {
  heading: "Enter Your Heading Here",
};