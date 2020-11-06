import React from 'react';
import './App.css';

// Components
// import Forms from './components/Forms'
// import Navbar from './components/Navbar/Navbar'
import ConditionalRendering from './components/ConditionalRendering'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Forms />   */}
      {/* <Navbar /> */}
      <ConditionalRendering />
      </header>      
    </div>
  )
}

export default App;