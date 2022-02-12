const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

/*  
위 3줄은
const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");
과 같다
*/

function handleLoginBtnClick(){
    console.dir(loginInput.value);
    console.log("click!!!!");
}


loginButton.addEventListener("click", handleLoginBtnClick);