import React, { useState } from 'react'
import './App.css'

function App() {

  const[count, setCount] = useState(0)
 
  const[movies, setMovies] = useState([
    {
    name:"The Sky Force",
    image:'/the-sky-force.png',
    watchlist:'/add.png'
    },
    {
      name:"SuperBoys of Malegaon",
      image:'/superboys.png',
      watchlist:'/add.png'
    },
    {
      name:"All That Breathes",
      image:"/all-that-breathes.png",
      watchlist:'/add.png'
    },
    {
      name:"Pink",
      image:"/pink.png",
      watchlist:'/add.png'
    },
    {
      name:"Queen",
      image:'/queen.png',
      watchlist:'/add.png'
    },
    {
      name:"Berlin",
      image:"/berlin.png",
      watchlist:'/add.png'
    },
    {
      name:"Crazxy",
      image:"/crazxy.png",
      watchlist:'/add.png'
    },
    {
      name:"Girls will be Girls",
      image:"/girls.png",
      watchlist:'/add.png'
    },
    {
      name:"Udta Punjab",
      image:"/punjab.png",
      watchlist:'/add.png'
    },
    {
      name:"3 Idiots",
      image:"/3idiots.png",
      watchlist:'/add.png'
    }
])

  const[selected, setSelected] = useState([])

  const addToWatchlist = (index) =>{

    if(movies[index].watchlist=='/remove.png'){
      setCount(count-1)
      movies[index].watchlist='/add.png'
      setMovies([...movies])

    }
    else{
      setCount(count+1)
      movies[index].watchlist='/remove.png'
      setMovies([...movies])
      setSelected([...selected,movies[index]])
    }
  }


  const showMovies = () =>{
    console.log(selected)
  }

  return (
   <>
    <div className='main'> 
        <div className='first'>
            <img src="/Capture.PNG" width="100"/>
            
            <button id='watchlist-btn' onClick={()=>{showMovies()}}>Watchlist : {count}</button>
        </div>
        <br/>
       
        <br/><br/>
        <br/>
        <div className='second'>

          {movies.map((item,index)=>
            <div id='movie' key={index}>
            <img src={item.image} height="200" />
            <div id="watchlist">
              <p id="para">{item.name}</p>
              <img 
              id="watchlist-image" 
              src={item.watchlist} 
              width="25" 
              onClick={()=>{addToWatchlist(index)}}/>
            </div>
          </div>
          )}
        </div>       
    </div>


   </>
  )
}

export default App