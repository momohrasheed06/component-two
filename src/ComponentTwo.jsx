import React from 'react';
import './ComponentTwo.css';
import dark from './dark.jpg';
import light from './light.jpg';

function ComponentTwo() {
  return (
    <div className='flex-row'>
        <div className='dark'>
            <img src = {dark} alt = 'dark'></img>
        </div>
        <div className='about'>
            <div className='about-me'>
               <h2>About Me</h2>
                <p>Name: Momoh Abdulrasheed</p>
                <p>I.D No: ITF/NECA/No-5</p>
                <p>Skills: HTML/CSS, Javascript, React.Js.</p>
                <p>Connect with me: github.com/momohrasheed06</p> 
            </div>    
        </div>
        <div className='light'>
        <img src = {light} alt = 'light'></img>
        </div>
    </div>
  )
}

export default ComponentTwo;