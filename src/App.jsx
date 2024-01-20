import './App.css';
import * as React from 'react';
import Window from './window'
import LinearMenu from './linear';
import Menu from './menu';
import QuadraticMenu from './quadratic';
import SinMenu from './sin';
import AbsoluteMenu from './absoluteValue';
import TangentMenu from './tangent';
import Banner from './banner';

function App() {

const [selectedFunction, setFunction] = React.useState('');

const handleFunctionChange = (event) => {
  setFunction(event.target.value);

};




  return (

    <div>

    <Banner></Banner>
      
    <div className='container'>

    <div>
    <Menu onFunctionChange={handleFunctionChange}></Menu>

    {selectedFunction === 'Linear' && <LinearMenu />}
    {selectedFunction === 'Quadratic' && <QuadraticMenu />}
    {selectedFunction === 'Sin' && <SinMenu />}
    {selectedFunction === 'Absolute Value' && <AbsoluteMenu />}
    {selectedFunction === 'Tangent' && <TangentMenu />}
    </div>
    
    
    <Window></Window>
    </div>
    </div>
  )
}

export default App;
