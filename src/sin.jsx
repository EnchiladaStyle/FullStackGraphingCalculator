import React, {useState} from 'react';
import {drawFunction} from './window';

function createSinValues(a, b, c, d){

    let rangepos = [];
    let rangeneg = [];
    let yValNeg = [];
    let yValPos = [];
    let xValPos = [];
    let xValNeg = [];

    b=b/10;
    d=d*10;
    c=c*10;
    a=a*10;
    


    for (let i =0; i < 400; i++)
    {
        xValPos[i] = i + 400;
        xValNeg[i] = 400 - i;
    }

    for (let i = 0; i < 400; i++)
    {
        rangepos[i] = i;
        rangeneg[i] = 0 - i;
    }

    b = b / 10;
    
    a = a * 10;

    for (let i=0; i<400; i++){

        yValPos[i] = Math.round(-(a * Math.sin(b * (rangepos[i] + d))) - c + 400);
        yValNeg[i] = Math.round(-(a * Math.sin(b * (rangeneg[i] + d))) - c + 400);
    }
    
    return{
        yValNeg: yValNeg,
        yValPos: yValPos,
        xValPos: xValPos,
        xValNeg: xValNeg
    }

}

function SinMenu(){
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);

    const handleAChange = (event) => {
        setA(Number(event.target.value));
    };

    const handleBChange = (event) => {
        setB(Number(event.target.value));
    };

    const handleCChange = (event) => {
        setC(Number(event.target.value));
    };

    const handleDChange = (event) => {
        setD(Number(event.target.value));
    };

const SinValues = createSinValues(a, b, d, c);

return (
    <div className='menuContainer' >

        <p>This is the Sin function in transformation form. y = aSin(b(x + c)) + d.</p>
        <p>a effects the amplitude, b effects the period, c moves horizontally and d moves vertically</p>
        

        
    <div class='subMenu'>
        <label>
            y=
            <input class='inputBox' type="number" value={a} onChange={handleAChange} />
        </label>
        <br />

        <label>
            sin(
            <input class='inputBox' type="number" value={b} onChange = {handleBChange} />

        </label>

        <label>
            (x+
            <input class='inputBox' type="number" value={c} onChange = {handleCChange} />

        </label>

        <label>
            ))+
            <input class='inputBox' type="number" value={d} onChange = {handleDChange} />

        </label>

        <button onClick={() => {drawFunction(SinValues.xValPos, SinValues.xValNeg, SinValues.yValPos, SinValues.yValNeg)}}>
                view function
        </button>
    </div>
    </div>
)
};


export default SinMenu;