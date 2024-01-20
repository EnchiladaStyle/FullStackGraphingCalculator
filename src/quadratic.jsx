import React, {useState} from 'react';
import {drawFunction} from './window';

function createQuadraticValues(a, h, k){

    let rangepos = [];
    let rangeneg = [];
    let yValNeg = [];
    let yValPos = [];
    let xValPos = [];
    let xValNeg = [];

    a = a/10;
    h = h*10;
    k = k*10;
    
    
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
    
    for (let i=0; i<400; i++)
        {
    
            yValPos[i] = -(a * (rangepos[i] - h) * (rangepos[i] - h)) - k + 400;
            yValNeg[i] = -(a * (rangeneg[i] - h) * (rangeneg[i] - h)) - k + 400;
        }
        
    return {
        yValNeg: yValNeg,
        yValPos: yValPos,
        xValPos: xValPos,
        xValNeg: xValNeg
    }
}

    function QuadraticMenu(){
        const [a, setA] = useState(1);
        const [h, setH] = useState(0);
        const [k, setK] = useState(0);
    
        const handleAChange = (event) => {
            setA(Number(event.target.value));
        };
    
        const handleHChange = (event) => {
            setH(Number(event.target.value));
        };

        const handleKChange = (event) => {
            setK(Number(event.target.value));
        };
    
    const QuadraticValues = createQuadraticValues(a, h, k);
    
    return (

        <div className='menuContainer'>

<p>This is the Absolute Value function in transformation form. y = a|x-h|+k.</p>
        <p>a effects the slope, h moves horizontally, and k moves vertically.</p>

        <div className='subMenu'>
            <label>
                y=
                <input className='inputBox' type="number" value={a} onChange={handleAChange} />
            </label>
            <br />
    
            <label>
                (x-
                <input className='inputBox' type="number" value={h} onChange = {handleHChange} />
    
            </label>

            <label>
                )^2+
                <input className='inputBox' type="number" value={k} onChange = {handleKChange} />
                
            </label>
                
            <button onClick={() => {drawFunction(QuadraticValues.xValPos, QuadraticValues.xValNeg, QuadraticValues.yValPos, QuadraticValues.yValNeg)}}>
                    view function
            </button>
        </div>
        </div>
    )
    };


export default QuadraticMenu;