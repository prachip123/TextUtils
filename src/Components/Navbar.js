import React from 'react'
import PropTypes from 'prop-types'

// import { BrowserRouter as Router} from 'react-router-dom'



export default function Navbar(props) {



  return (
    // <Router>
    <div>
      {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
      
      {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='light'?props.colormode:'dark'}`}> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/Textform" color="cyan">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">{props.about}</a>
          </li>       
        </ul>
      
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" >Search</button>
          </form> */}
          <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
          </div>
          {/* <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" onClick={props.togglemodeblue} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" style={{color: 'white'}} htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div> */}
          {/* <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" onClick={props.togglemodegreen} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable green mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" onClick={props.togglemodered} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable red mode</label>
          </div> */}
          {/* <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable navbar dark mode</label>
          </div> */}
      </div>
      </div>
      </nav>
    </div>
     
  )
}

Navbar.propTypes={

    title:PropTypes.string.isRequired,
    about:PropTypes.string
}

 Navbar.defaultProps={
    title:'Set title here'
} 