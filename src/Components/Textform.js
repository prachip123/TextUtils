import React,{useState} from 'react'


export default function Textform(props) {

  //On click event handling
    const HandleOnClickUp=()=>{
        //settext("You clicked on button")
        //console.log("Handle OnClick");
        let newtext=txt.toUpperCase();
        settext(newtext);
        props.Showalert("success","You have done your text with Uppercase");
    }
    const HandleOnClickLo=()=>{
      //settext("You clicked on button")
      //console.log("Handle OnClick");
      let newtext=txt.toLowerCase();
      settext(newtext);
      props.Showalert("success","You have done your text with Lowercase");
  }
  //On change event handling
    const HandleOnChange=(event)=>{
        //console.log("Handle OnChange");
        settext(event.target.value);
        
    }

    const HandleClearText=(event)=>{
      let newtext="";
      settext(newtext);
      props.Showalert("success","cleared text");
  }

  const RemoveExtraSpaces=(event)=>{

       let textarr=txt.split(/[  ]+/);
       settext(textarr.join(" "))
       props.Showalert("success","Removed extra spaces");
  }
    
    const [txt, settext]= useState('Enter text here');
  return (   
      <>   
    <div className='container' >
    <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="5" value={txt} style={{backgoundColor:'green'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-1" onClick={HandleOnClickUp}> Convert to uppercase</button>
    <button className="btn btn-primary mx-2 my-1" onClick={HandleOnClickLo}> Convert to lower</button>
    <button className="btn btn-primary mx-2 my-1" onClick={HandleClearText}> Clear text</button>
    <button className="btn btn-primary mx-2 my-1" onClick={RemoveExtraSpaces}> Remove Extra Spaces</button>
    </div>
    <div className='container'>
    <h1>My text summary</h1>
    <p>Number of words {txt.split(" ").filter((element)=>{return element.length!==0}).length} and Number of charachters {txt.length}</p>
    <p>{0.008*txt.split(" ").filter((element)=>{return element.length!==0}).length} minutes need to read paragraph</p>
    <h2>Preview</h2>
    <p>{txt}</p>
    </div>  
    </>       
  )
}
