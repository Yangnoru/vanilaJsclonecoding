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
const USERNAME_KEY = "username"


function onLoginsubmit(event){
    const username= loginInput.value;

    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText= `hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/* event에는 방금 실행된 submit event에대한 정보가 담겨있다. */

/* preventDefault() <-- 어떤 function에 대한 브라우저가 기본적으로 수행하는 동작을 막다.
= submit의 default event인 새로고침을 prevent하다 */


const savedUsername =localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginsubmit);
}else{
    paintGreetings(savedUsername);
}


/* onLoginsubmit이라는 함수에서 선언된 const username 은 savedUsername이 null인경우 실행되면서 사용된다.
이와동시에 local storage에는 usrname키와 const username값이 저장된다. 
그리고 다시 page를 열 경우 savedUsername은 null 이 아니기에
else 구문이 시작된다. greeting의 hidden클래스가 사라져도 내용은 보이지 않는다.
username은 새로고침과함께 저장되지 않았고 우리는 const username을 기억하고 가져오는것이
아닌 localstorage에 있는 값을 가져오기 때문이다. 따라서 greeting의 innertext를
다시한번 savedUsername으로 채워줘야한다. */