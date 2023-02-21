import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("You clicked the button" + text);
        let newText = text.toUpperCase();
        setText(newText);
        if(newText.length!==0){
            props.showAlert("Text converted to upper case!", "success")
         } else {
             props.showAlert("No text to convert to lower case!", "danger")
         }

    }
    const handleLoClick = () => {
        console.log("You clicked the button" + text);
        let newText = text.toLowerCase();
        setText(newText);
        if(newText.length!==0){
           props.showAlert("Text converted to lower case!", "success")
        } else {
            props.showAlert("No text to convert to lower case!", "danger")
        }

    }
    const handleOnChange = (event) => { 
        console.log("On change")
        setText(event.target.value);
    }

    const handleClear = () => {
        setText('');
        if(text.length!==0){
            props.showAlert("Text cleared!", "success")
         } else {
            props.showAlert("No text to clear!", "danger")
         }
    }

    const getWordCount = (str) => {

        return str.length === 0 ? '0' : str.trim().split(/\s+/).length;
   }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style= {{color : props.mode === 'dark' ? 'white' : '#1a324e'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myForm" rows="5" onChange={handleOnChange} style= {{backgroundColor : props.mode === 'dark' ? '#1a324e' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear} >Clear</button>
            </div>
            <div className="container" style= {{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h2 className='my-2'>Text Analyzation</h2>
                <p>Total words are <b>{getWordCount(text)}</b> and total characters are <b>{text.length}</b></p>
                <h2>Text Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the above text box to preview it here.'}</p>
            </div>
        </>
    )
}
//{text.split(' ').length}