import React, { useState } from 'react'
import './App.css'

function App() {

  const[num, setNum] = useState(0)

  return (
   <>
    <div className='main'> 
        <div className='first'>
            <img src="/Capture.PNG" width="100"/>
            
            <button id='watchlist-btn'>Watchlist {num}</button>
        </div>
        <br/>
        <hr/>

        <br/>
        <div className='second'>
              <div id='movie'>
                <img src="/the-sky-force.png" height="200" />
                
                <div id="watchlist">
                  <h2>The Sky Force</h2>
                  <img src="/add.png" />
                </div>
                
                
              </div>
              <div id='movie'>
                <img src="/the-sky-force.png" height="200" />
                
                <div id="watchlist">
                  <h2>The Sky Force</h2>
                  <img src="/add.png" />
                </div>
                
                
              </div>
              <div id='movie'>
                <img src="/the-sky-force.png" height="200" />
                
                <div id="watchlist">
                  <h2>The Sky Force</h2>
                  <img src="/add.png" />
                </div>
                
                
              </div>
              <div id='movie'>
                <img src="/the-sky-force.png" height="200" />
                
                <div id="watchlist">
                  <h2>The Sky Force</h2>
                  <img src="/add.png" />
                </div>
                
                
              </div>
              <div id='movie'>
                <img src="/the-sky-force.png" height="200" />
                
                <div id="watchlist">
                  <h2>The Sky Force</h2>
                  <img src="/add.png" />
                </div>
                
                
              </div>
        </div>
      <br></br>
        <div className='third'>
        <div id='movie'>
                <img src="/the-sky-force.png" height="200" />
                
                <div id="watchlist">
                  <h2>The Sky Force</h2>
                  <img src="/add.png" />
                </div>
                
                
              </div>
              <div id='movie'>
                <img src="/the-sky-force.png" height="200" />
                
                <div id="watchlist">
                  <h2>The Sky Force</h2>
                  <img src="/add.png" />
                </div>
                
                
              </div>
              <div id='movie'>
                <img src="/the-sky-force.png" height="200" />
                
                <div id="watchlist">
                  <h2>The Sky Force</h2>
                  <img src="/add.png" />
                </div>
                
                
              </div>
              <div id='movie'>
                <img src="/the-sky-force.png" height="200" />
                
                <div id="watchlist">
                  <h2>The Sky Force</h2>
                  <img src="/add.png" />
                </div>
                
                
              </div>
              <div id='movie'>
                <img src="/the-sky-force.png" height="200" />
                
                <div id="watchlist">
                  <h2>The Sky Force</h2>
                  <img src="/add.png" />
                </div>
                
                
              </div>
        </div>
    </div>
   </>
  )
}

export default App