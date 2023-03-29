import React,{useState} from 'react'
import Navbar from './Navbar';


export default function TextForm(props) {

    const Handeled = (event)=>
    {

        console.log("ONCHANGED");
        setText(event.target.value)
    }

    const ONCLICK = () =>
    {

       let newtext= text.toUpperCase();
       
       setText(newtext);
    }

     const ONCLICK2 = () =>
    {

       let newtext= text.toLowerCase();
       
       setText(newtext);
    }

    const ONCLICKclear = ()=>
    {
      setText("");
    }

    const [text, setText] = useState('Write Here');
    console.log(text)
    
  return (
    <>
    <Navbar title="TextUtensils" abt="About Us"/>
      <div className="container">
        <h1>{props.Heading}</h1>


        <div className="mb-3">
            <label for="mybox" className="form-label" >{props.Hint}</label>
            <textarea className="form-control" value={text} onChange={Handeled} id="mybox" rows="5"></textarea>
        </div>

        <button type="button" className="btn btn-outline-primary" onClick={ONCLICK} >Convert to UpperCase</button>
        <button type="button" className="btn btn-outline-primary mx-3" onClick={ONCLICK2} >Convert to LowerCase</button>
        <button type="button" className="btn btn-outline-primary mx-3" onClick={ONCLICKclear} >Clear text</button>    
    </div>


<div className="container my-3">
    <h2>Your Text Summary</h2>
    <p><b>Word count:</b>Word count: {text.split(" ").length} words and Total characters: {text.length}</p>
    <p>Minutes to Read: {0.008 * text.split(" ").length} </p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>

</>
  )
}
