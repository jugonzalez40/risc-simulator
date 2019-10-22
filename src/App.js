import React from 'react';
import './App.css';
import Register from './components/register/Register';
import CPU from './components/cpu/CPU';

class App extends React.Component {

  constructor(props){
    console.log('??');
    super(props);
  }

  render() {
    return <div className="App">
      <div className="sec code border">
        <h5>Codigo</h5>
        <code>A piece of computer code</code>
      </div>

      <div className="sec canvas border ">
        <CPU />
      </div>

      <div className="sec register border">
        <Register />
      </div>
    </div>;
  }
}

export default App;
