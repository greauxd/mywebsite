// JavaScript source code

//Get element for image

function startbeat() {
	var elem = document.getElementById("heart");

	//Set interval delay
	setInterval(heartbeat(elem), 2000);
}


function heartbeat(elem) {
	//Changes height and width of image

	if (elem.style.height == "20px" && elem.style.width == "20px") {
		elem.style.height = "15px";
		elem.style.width = "15px";
	}


	else {
		elem.style.height = "20px";
		elem.style.width = "20px";
	}

}

