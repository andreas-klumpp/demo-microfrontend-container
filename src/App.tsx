import React from 'react';
import './App.css';
import MicroFrontend from './MicroFrontend';

const {REACT_APP_MICROFRONTEND_1, REACT_APP_MICROFRONTEND_2} = process.env;

function MicroFrontend1() {
  return <MicroFrontend host={REACT_APP_MICROFRONTEND_1} name="microfrontend-1"/>
}

function MicroFrontend2() {
  return <MicroFrontend host={REACT_APP_MICROFRONTEND_2} name="microfrontend-2"/>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe src="http://localhost:3001" width="600" height="900">
          <p>Your browser does not support iframes.</p>
        </iframe>

        <iframe src="http://localhost:3002" width="600" height="900">
          <p>Your browser does not support iframes.</p>
        </iframe>
        {/* <div className='container'>
          <MicroFrontend1 />
          <MicroFrontend2 />
        </div> */}
      </header>
    </div>
  );
}

export default App;
