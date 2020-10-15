import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Yonatan from '../Assets/Yonatan.jpg'
import Jeremy from '../Assets/Jeremy.jpg'
import Eden from '../Assets/Eden.jpg'
import '../styles/User.css'
  class User extends Component {
  
    render() {
    return (
        <div className = "background">
            <h1 className = "Who">Who's watching?</h1>
        <div className='user' >
        <Link to= "/catalog"><img src={Yonatan} className={`Yonatan-logo`} alt="logo" /></Link>
        <Link to = "/catalog"><img src={Jeremy} className={`Jeremy-logo`} alt="logo" /></Link>
        <Link to = "/catalog"><img src={Eden} className={`Eden-logo`} alt="logo" /></Link>
        </div>
        </div>
        )
    }
    
  }        
export default User;
