let hour = document.getElementById("hour");
let progressBar = document.getElementById("progressBar");


function showTime(){
	let date = new Date();
	let sec = date.getSeconds();
	let time = date.toLocaleTimeString();
	//hour.textContent =  hr;
	//minitue.textContent = minit;
	//second.textContent = sec;
	hour.innerText = time;
	progressBar.style.width = (sec / 60) * 100 + "%";
}

showTime();

setInterval(showTime, 1000);