import React, {useState} from 'react';
import { drawFunction } from "./window";

function createLinearValues(m, b){

let rangepos = [];
let rangeneg = [];
let yValNeg = [];
let yValPos = [];
let xValPos = [];
let xValNeg = [];

b=b*10;

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
        yValPos[i] = -(m * (rangepos[i]) + b) + 400;
        yValNeg[i] = -(m * (rangeneg[i]) + b) + 400;
    }

    return {
        yValNeg: yValNeg,
        yValPos: yValPos,
        xValPos: xValPos,
        xValNeg: xValNeg
    }
    
}

function LinearMenu(){
    const [m, setM] = useState(1);
    const [b, setB] = useState(0);

    const handleMChange = (event) => {
        setM(Number(event.target.value));
    };

    const handleBChange = (event) => {
        setB(Number(event.target.value));
    };


const linearValues = createLinearValues(m, b);

return (
    <div className='menuContainer'>

        <p>This is the linear function in intercept form. y = mx + b.</p>
        <p>m effects the slope, b effects the y intercept.</p>
    <div class='subMenu'>

        

        <label>
            y=
            <input type="number" class="inputBox" value={m} onChange={handleMChange} />
        </label>
        <br />

        <label>
            x+
            <input type="number" class="inputBox" value={b} onChange = {handleBChange} />

        </label>

        <button onClick={() => {drawFunction(linearValues.xValPos, linearValues.xValNeg, linearValues.yValPos, linearValues.yValNeg)}}>
                view function
        </button>
    </div>
    </div>
)
};

export default LinearMenu;