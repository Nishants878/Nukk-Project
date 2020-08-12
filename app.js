console.clear();
var popup = document.getElementsByClassName("pop-up-list")[0];
var overlay = document.getElementsByClassName("overlay-pop-up")[0];
var getButton = document.getElementsByClassName("info-wrapper")[0];
var button = document.getElementsByClassName("button")[0];
var orangeButton = document.getElementById('orange-button');
var closeBut = document.getElementsByClassName('pop-up-button')[0];
var changeSign = document.getElementsByClassName('close-button')[0];
var changeSignFirst = document.getElementsByClassName('line-1')[0];
var changeSignSecond = document.getElementsByClassName('line-2')[0];
var phoneDrop = document.getElementsByClassName('phone-drop')[0];
var body = document.getElementsByTagName('body')[0];
var exception = document.getElementsByClassName("exception-wrapper")[0]
var exceptionOne = document.getElementById("exception-wrapper-one")
var exceptionTwo = document.getElementById("free-quote-phone")
getButton.onclick = function () {
	popup.style.display = "block";
	overlay.style.display = "block";
}

changeSign.onclick = function () {

	if (changeSignFirst.style.transform == "translate(-44%, 0px) rotate(45deg)") {
		phoneDrop.style.display = "none";
		changeSignFirst.style.transform = "translate(-50%, -3px)";
		changeSignSecond.style.transform = "translate(-50%, -1px)";
	}
	else {
		phoneDrop.style.display = "flex";
		changeSignFirst.style.transform = "translate(-44%, 0px) rotate(45deg)";
		changeSignSecond.style.transform = "translate(-45%, -11px) rotate(-45deg)";
	}


}



exception.onclick = function () {
	popup.style.transform = "translateX(0)";
	overlay.style.display = "block";
}

exceptionOne.onclick = function () {
	popup.style.transform = "translateX(0)";
	overlay.style.display = "block";
}

exceptionTwo.onclick = function () {
	popup.style.transform = "translateX(0)";
	overlay.style.display = "block";
}

button.onclick = function () {
	popup.style.transform = "translateX(0)";
	overlay.style.display = "block";

}
orangeButton.onclick = function () {
	popup.style.transform = "translateX(0)";
	overlay.style.display = "block";
}
overlay.onclick = function () {
	popup.style.transform = "translateX(100%)";
	overlay.style.display = "none";
}
closeBut.onclick = function () {
	popup.style.transform = "translateX(100%)";
	overlay.style.display = "none";
}


changeSign.onclick = function () {

	if (changeSignFirst.style.transform == "translate(-44%, 0px) rotate(45deg)") {
		phoneDrop.style.transform = "translateY(-272%)";
		changeSignFirst.style.transform = "translate(-50%, -3px)";
		changeSignSecond.style.transform = "translate(-50%, -1px)";
	}
	else {

		phoneDrop.style.transform = "translateY(0)";
		changeSignFirst.style.transform = "translate(-44%, 0px) rotate(45deg)";
		changeSignSecond.style.transform = "translate(-45%, -11px) rotate(-45deg)";
	}


}
