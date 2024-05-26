import React, {useEffect} from 'react';
const saveEndpoint = 'http://localhost:3001/data/save'
const loadEndpoint = 'http://localhost:3001/data'
const deleteEndpoint = 'http://localhost:3001/data/delete'

export async function drawLine(clear=false){

    let accessToken = sessionStorage.getItem('accessToken');

    if (clear && accessToken){

        await fetch(deleteEndpoint, {
            headers: {
                'content-type': 'application/json;charset=utf-8',
                authorization: 'Bearer ' + accessToken
            },
            method: "DELETE",
            mode:  "cors"
        })

    }
    
    let window = document.getElementById('window')
    const context = window.getContext('2d')
    context.clearRect(0, 0, window.width, window.height);
    
    context.beginPath(0,400)
    context.moveTo(0,400)
    context.lineTo(800,400);
    context.moveTo(400,0);
    context.lineTo(400,800);

    for (let i=0; i<800; i+=10){
        context.moveTo(396,i);
        context.lineTo(404,i);
        context.moveTo(i,396);
        context.lineTo(i,404)
    }

    

    if (accessToken){
        
        let response = await fetch(loadEndpoint, {
            headers: {
                'content-type': 'application/json;charset=utf-8',
                authorization: 'Bearer ' + accessToken
            },
            method: "GET",
            mode:  "cors"
        })

        if (response.ok){
            let savedData = await response.json();
            
            

            for (let i=0; i<savedData.data.length; i++){
                

                drawFunction(savedData.data[i].xValPos.split(',').map(Number), savedData.data[i].xValNeg.split(',').map(Number), savedData.data[i].yValPos.split(',').map(Number), savedData.data[i].yValNeg.split(',').map(Number), false)
            }
        }


    }

    


    context.stroke();
}

export function drawFunction(xValPos, xValNeg, yValPos, yValNeg, newFunction=true){
    let window = document.getElementById('window')
    const context = window.getContext('2d')

    context.clearRect(1000, 1000, window.width, window.height)

    context.moveTo(xValPos[0], yValPos[0])
    
    
    for (let i=0; i<400; i++){
        if (yValPos[i] - yValPos[i-1] > 700){
            context.moveTo(xValPos[i], yValPos[i])
        }
        
        context.lineTo(xValPos[i], yValPos[i])
        
        
    }

    context.moveTo(xValNeg[0], yValNeg[0])
   

    for (let i=0; i<700; i++){
        if (Math.abs(yValNeg[i] - yValNeg[i-1]) > 700){
            context.moveTo(xValNeg[i], yValNeg[i])
        }
        
        context.lineTo(xValNeg[i], yValNeg[i])
        
    }

    context.stroke();

    let accessToken = sessionStorage.getItem('accessToken');

    if (accessToken && newFunction){
        updateDatabase(xValPos, xValNeg, yValPos, yValNeg)
    }

    

  }

function Window(){
        useEffect(() => {
        drawLine();
      }, []);

    return(
            <canvas id='window' width='800' height={'800'}>
            </canvas>
            
    )
}


async function updateDatabase(xValPos, xValNeg, yValPos, yValNeg){

    let accessToken = sessionStorage.getItem('accessToken');

    await fetch(saveEndpoint, {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            authorization: 'Bearer ' + accessToken
        },
        method: "POST",
        body: JSON.stringify({
            xValPos: xValPos,
            xValNeg: xValNeg,
            yValPos: yValPos,
            yValNeg: yValNeg
        }),
        mode:  "cors"
    })

}



export default Window;