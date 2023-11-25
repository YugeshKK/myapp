import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
export const Main = ({input}) => {

    const [data, setData]= useState([]);
    const [three, setThree]= useState([]);
    const [additional, setAdditional]= useState(null);




   input=  input ? input : 'game of thrones'

    useEffect(() => {   
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
          .then(response => {
            setData(response.data);
            const data= response.data.items;
            setThree(data.slice(0, 3));
            console.log(three)
            setData(data.slice(3));
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [input]); 


  return (
    <div className='main'>
        {three.length ? (
        <div className='cont'>
          {three.map(post => (
            <>

            <div className="cover" key={post.id}>
                <img src={post.volumeInfo.imageLinks.thumbnail} alt="" />
                <div className="text">
                <h4 style={{fontSize:'18px'}}>{post.volumeInfo.title}</h4>
                <p style={{fontSize:'12px'}}>{post.volumeInfo.description.slice(0, 140)}</p>
                <button onClick={()=>{
                    let x= post.volumeInfo.previewLink;
                    window.location.href=x;
                }}>Read Now!</button>
                 <button onClick={()=>{
                    let x= post.volumeInfo.infoLink;
                    window.location.href=x;
                }}>More Info</button>
                </div>
            </div>
            </>
            
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <h4 style={{fontSize:'27px', marginTop:'40px'}}>More Books</h4>

        {data.length ? (
            <div className="container">
                {
                    data.map(post =>(
                        <div key={post.id} onClick={()=>{
                            setAdditional(
                                <div>
                <button onClick={()=>{
                    let x= post.volumeInfo.previewLink;
                    window.location.href=x;
                }}>Read Now!</button>
                 <button onClick={()=>{
                    let x= post.volumeInfo.infoLink;
                    window.location.href=x;
                }}>More Info</button>
                                </div>
                            )
                        }}>
                            <img src={post.volumeInfo.imageLinks.thumbnail} alt="" />
                            {additional}
                        </div>
                    ))
                }
            </div>
        ) :
        ( <p>Loading...</p> )}

    </div>

  )
}
