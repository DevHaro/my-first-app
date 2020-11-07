import React from 'react';
import './App.css';

// Components
// import Forms from './components/Forms'
// import Navbar from './components/Navbar/Navbar'
// import ConditionalRendering from './components/ConditionalRendering'
// import Blog from './components/Blog'
import ListActive from './components/ListActive';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <ListActive />
      </header>      
    </div>
  )
}

export default App;