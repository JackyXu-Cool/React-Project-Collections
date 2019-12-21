import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';


function App() {
  return (
    <div> 
      <Header />
      <MemeGenerator />
      <footer>
      	<p>An easy meme generator developed by React.js</p>
      </footer>
    </div>
  );
}

export default App;
