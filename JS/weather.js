
const API__KEY= "3c6e59be400a550fcc86c27b86e1fc0e"


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API__KEY}&units=metric`;
  fetch(url).then((response) => response.json())
  .then((data)=>{
      const weather=document.querySelector("#weather span:first-child");
      const city=document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText =data.name;
  })
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
} 

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

/* success한 곳의 function에는 javascript가 GeolocationPosition object를 하나의
input parameter로 제공해준다.  */
  