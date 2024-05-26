import React from 'react';
const signUpEndpoint = "http://localhost:3001/user/createUser";

function creatNewUser(){

    fetch(signUpEndpoint, {
        method: "POST",
        headers: {'content-type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            user_name: document.getElementById("userNameInput").value,
            password: document.getElementById("passwordInput").value
        }),
        mode: "cors"
    });
    }





function SignUp(){

    function handleButtonClick(){
        creatNewUser();
    }
    return (
        <div>
    
    <div className="credentials_div">
        <h1>Sign Up and Get Graphing!</h1>
        <div className="usernameBox">
            <label>Username:</label>
            <input id="userNameInput" type="text"/>
        </div>

        <div className="passwordBox">
            <label>Password:</label>
            <input id="passwordInput" type="password"/>
        </div>

        <a href="./signIn">
            <button id="submitButton" className="submitButton" onClick={handleButtonClick}>
                Submit
            </button>
        </a>
    </div>
    
</div>
    )
}

export default SignUp;