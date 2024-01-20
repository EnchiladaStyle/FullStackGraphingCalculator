import React from 'react';
const signInEndpoint = "http://localhost:3001/user/signIn";
let accessToken = 0;


async function getData(){

    sessionStorage.setItem('userName', document.getElementById("userNameInput").value);

    let response = await fetch(signInEndpoint, {
        method: "POST",
        headers: {'content-type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            user_name: document.getElementById("userNameInput").value,
            password: document.getElementById("passwordInput").value
        }),
        mode: "cors"
    })

    if (response.ok){
        
        accessToken = await response.json();
        accessToken = accessToken.token;
        console.log(accessToken);
        sessionStorage.setItem('accessToken', accessToken);

        document.querySelector('#submitButton2').innerHTML="signed in! Click here to proceed";
        document.querySelector('#toKeyboard').setAttribute("href", "/home");
    }
}



function SignIn(){
    function handleClick(){
        getData();
    }
    return (
        <div className="credentials_div">
            <h1>Sign In and Get Graphing!</h1>
            <div className="usernameBox">
                <label>Username:</label>
                <input id="userNameInput" type="text"/>
            </div>

            <div className="passwordBox">
                <label>Password:</label>
                <input id="passwordInput" type="password"/>
            </div>

            <a id="toKeyboard">
                <button id="submitButton2" className="submitButton" onClick={handleClick}>
                    Submit
                </button>
            </a>
        </div>
    )
}

export default SignIn;