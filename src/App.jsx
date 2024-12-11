import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Child } from './components/Component'

function App() {

  const [displayName, setDisplayName]= useState("");

  const login =(name)=>{
    setDisplayName(name);
  }

    
  return (
    <div>

      <h2>Hola {displayName}</h2>
      <Child

      handleLogin={login}
      
      ></Child>

    </div>

  )
}

export default App

//1