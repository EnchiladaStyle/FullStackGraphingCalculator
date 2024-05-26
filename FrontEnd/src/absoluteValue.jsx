import React, {useState} from 'react';
import {drawFunction} from './window';

function createAbsoluteValues(a, h, k){

    h = h*10;
    k=k*10;

    let rangepos = [];
    let rangeneg = [];
    let yValNeg = [];
    let yValPos = [];
    let xValPos = [];
    let xValNeg = [];

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

for (let i = 0; i < 400; i++)
    {
        yValPos[i] = -(a * Math.abs(rangepos[i] - h)) - k + 400;
        yValNeg[i] = -(a * Math.abs(rangeneg[i] - h)) - k + 400;
    }

    return {
        yValNeg: yValNeg,
        yValPos: yValPos,
        xValPos: xValPos,
        xValNeg: xValNeg
    }
        
}


function AbsoluteMenu(){
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

const AbsoluteValues = createAbsoluteValues(a, h, k);

return (
    <div className='menuContainer'>
        <p>This is the Absolute Value function in transformation form. y = a|x-h|+k.</p>
        <p>a effects the slope, h moves horizontally, and k moves vertically.</p>
    <div class='subMenu'>
        <label>
            y=
            <input class='inputBox' type="number" value={a} onChange={handleAChange} />
        </label>
        <br />

        <label>
            |x-
            <input class='inputBox' type="number" value={h} onChange = {handleHChange} />

        </label>

        <label>
            |+
            <input class='inputBox' type="number" value={k} onChange = {handleKChange} />
            
        </label>
            
        <button onClick={() => {drawFunction(AbsoluteValues.xValPos, AbsoluteValues.xValNeg, AbsoluteValues.yValPos, AbsoluteValues.yValNeg)}}>
                view function
        </button>
    </div>
    </div>
)
};


export default AbsoluteMenu;

