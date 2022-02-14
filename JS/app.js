const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

/*  
위 3줄은
const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");
과 같다
*/

const HIDDEN_CLASSNAME = "hidden"


function onLoginsubmit(event){
    event.preventDefault();
    const username= loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log("username");
    greeting.innerText= `hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/* event에는 방금 실행된 submit event에대한 정보가 담겨있다. */

/* preventDefault() <-- 어떤 function에 대한 브라우저가 기본적으로 수행하는 동작을 막다.
= submit의 default event인 새로고침을 prevent하다 */

loginForm.addEventListener("submit", onLoginsubmit);