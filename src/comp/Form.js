import React, { useState } from 'react'
import './form.css';

export default function Formf(props) {
    const [text, setText] = useState("Enter text here");
    // setText("Enter Your Data here");
    const ToUpperCase = () => {
        // alert("Uppercase button clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const ToLowerCase = () => {
        // alert("Uppercase button clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const Clear = () => {
        // alert("Uppercase button clicked");
        // let newText = text.toLowerCase();
        setText("");
    }
    const onChangeHandel = (event) => {
        setText(event.target.value);
    }
    const Copy = () => {
        navigator.clipboard.writeText(text);
    }
    const Rmextra = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <div class="mb-3">
                <h1 for="exampleFormControlTextarea1" class="form-h1">{props.data}</h1>
                <textarea class="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'white'}} onChange={onChangeHandel} id="exampleFormControlTextarea1" rows="10"></textarea>
                <button className='btn btn-primary mt-2 mx-1' onClick={ToUpperCase}>Conver To Uppercase</button>
                <button className='btn btn-primary mt-2 mx-1' onClick={ToLowerCase}>Conver To LowerCase</button>
                <button className='btn btn-primary mt-2 mx-1' onClick={Clear}>Clear Text</button>
                <button className='btn btn-primary mt-2 mx-1' onClick={Copy}>Copy</button>
                <button className='btn btn-primary mt-2 mx-1' onClick={Rmextra}>Remove Extra Space</button>
            </div>
            <div className=''>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} Number Of Word In the input {text.length} Cahracters In input</p>
                <p>{0.008*text.split(" ").length} Minutes To Read This</p>
                <h2>Preview</h2>
                <p className='fenil-sonani'>{text}</p>
            </div>
        </div>
    )
}

Formf.defaultProps = {
    data: "Enter text here"
}
