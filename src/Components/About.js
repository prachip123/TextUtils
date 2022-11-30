
import React, { useState } from 'react'



export default function About() {

  const[mystyle, Setmystyle]=useState(
    {

      color: 'white',
      backgroundColor: 'black'
    }
  )

  const[btntext,Setbtntext] = useState("Black Mode Enable");
   
  const ChangeStyle=()=>{

    if(mystyle.color === 'white')
    {
        Setmystyle(
          {
            color: 'black',
            backgroundColor: 'white'
          }
        );

        Setbtntext("White Mode Enable");
    }
    else
    {
      Setmystyle(
        {
          color: 'white',
          backgroundColor: 'black'
        }
      )

      Setbtntext("Black Mode Enable");
    }
  }

  // let mystyle={

  //   color: 'white',
  //   backgroundColor: 'black'
  // }

  return (
    
    <div className="container" style={mystyle}>
      <h2>About us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
        TextUtils gives you a way to analyze your text quickly and efficently.It calculate word count, character count.
        It also tells time to read paraghraph.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
        TextUtil is free charachter counter tool and word count statistics for given text. You can make your text
        uppercase, lowercase. You can remove extra spaces in given text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
      <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
        This tool works in web browsers such as Chrome, Firefox, Internet explorer, Safari, Opera. It suits
        to count characters in facebook, blog, books, excel document, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
<button type="button" className="btn btn-primary" onClick={ChangeStyle}>
  {btntext}
</button>
</div>
    </div>
    
  )
}


