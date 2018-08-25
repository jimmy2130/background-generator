var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");


function setGradient(){
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	h3.textContent = body.style.background + ";";	
}

function setRandomColor(){
	var randomColor = Math.floor(Math.random()*15728640+1048576).toString(16);
	return randomColor;
}

function setRandom(){
	var randomColor = setRandomColor();
	var randomColor2 = setRandomColor();

	color1.value = "#" + randomColor;
	color2.value = "#" + randomColor2;

	setGradient();	
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandom);

