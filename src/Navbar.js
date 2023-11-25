import React, { useState } from 'react'
import img from './images/one.svg'
import heart from './images/heart.png'
import bell from './images/bell.png'
import diam from './images/diamond.png'
import ks from './images/HK.jpg'


export const Navbar = ({handleClick}) => {

  const[input, setInp]= useState();


  return (
    <div className='nav'>
        <div className="one">
          <img src={img} width={64}alt="" />
            <h4>KeazoN <span style={{color:"whitesmoke", fontWeight:'lighter'}}>BOOKS</span></h4>
        </div>
        <div className="two">
          <input type="text" name="" id=""
            value={input}
            onChange={(e)=>{
              setInp(e.target.value);
            }}  
           placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...' />
          <button onClick={()=>{
            handleClick(input)
          }}>search</button>
        </div>
        <div className="three">
          <img src={heart} alt="" height='30px'/>
          <img src={bell} alt="" height='30px'/>
          <img src={diam} alt="" height='30px'/>
          <img src={ks}  alt="" height='30px' style={{borderRadius:'50px', border:'1px solid white'}} width='30px'/>
        </div>
    </div>
  )
}
