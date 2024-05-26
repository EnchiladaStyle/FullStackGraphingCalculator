import { drawLine } from "./window";

function Menu({onFunctionChange}){
    return(
        <div id='mainMenu'>

            <label>Choose a function to graph</label>
            <select onChange={onFunctionChange}>
                <option>choose</option>
                <option>Linear</option>
                <option>Quadratic</option>
                <option>Absolute Value</option>
                <option>Sin</option>
                <option>Tangent</option>

            </select>

            <button onClick={() => {drawLine(true)}}>
                clear
            </button>

        </div>
    )
}

export default Menu;