function showLengthConverter() {
	document.getElementById("length-converter").style.display = "block";
	document.getElementById("time-converter").style.display = "none";
	document.getElementById("area-converter").style.display = "none";
	document.getElementById("volume-converter").style.display = "none";
}



function showTimeConverter() {
	document.getElementById("length-converter").style.display = "none";
	document.getElementById("time-converter").style.display = "block";
	document.getElementById("area-converter").style.display = "none";
	document.getElementById("volume-converter").style.display = "none";
}

function showAreaConverter() {
	document.getElementById("length-converter").style.display = "none";
	document.getElementById("time-converter").style.display = "none";
	document.getElementById("area-converter").style.display = "block";
	document.getElementById("volume-converter").style.display = "none";
}

function showVolumeConverter() {
	document.getElementById("length-converter").style.display = "none";
	document.getElementById("time-converter").style.display = "none";
	document.getElementById("area-converter").style.display = "none";
	document.getElementById("volume-converter").style.display = "block";
}



function lengthConverter() {

	const input = parseFloat(document.getElementById("length-input").value);
	const unit = document.getElementById("length-unit").value;
	let meter, centimeter, kilometer, feet, inches;

	if (unit === "meter") {
		meter = input;
		centimeter = input * 100;
		kilometer = input / 1000;
		feet = input * 3.28084;
		inches = feet * 12;
	} else if (unit === "centimeter") {
		meter = input / 100;
		centimeter = input;
		kilometer = input / 100000;
		feet = input * 0.032808;
		inches = input * 0.39370;
	} else if (unit === "kilometer") {
		meter = input * 1000;
		centimeter = input * 100000;
		kilometer = input;
		feet = input * 3280.84;
		inches = feet * 12;
	} else if (unit === "feet") {
		meter = input * 0.3048;
		centimeter = input * 30.48;
		kilometer = input * 0.0003048;
		feet = input;
		inches = feet * 12;
	} else if (unit === "inch") {
		meter = input * 0.0254;
		centimeter = input * 2.54;
		kilometer = input * 0.0000254;
		feet = input * 0.0833333;
		inches = input;
	}

	document.getElementById("meter").innerHTML = meter.toFixed(2);
	document.getElementById("centimeter").innerHTML = centimeter.toFixed(2);
	document.getElementById("kilometer").innerHTML = kilometer.toFixed(2);
	document.getElementById("feet").innerHTML = feet.toFixed(2);
	document.getElementById("inches").innerHTML = inches.toFixed(2);
}



function timeConverter() {

	const input = parseFloat(document.getElementById("time-input").value);
	const unit = document.getElementById("time-unit").value;
	let seconds, minutes, hours;

	if (unit === "seconds") {
		seconds = input;
		minutes = input * 0.0166666667;
		hours = input * 0.00027777;
	} else if (unit === "minutes") {
		seconds = input * 60;
		minutes = input;
		hours = input * 0.0166666667;
	} else if (unit === "hours") {
		seconds = input * 3600;
		minutes = input * 60;
		hours = input;
	}

	document.getElementById("seconds").innerHTML = seconds.toFixed(2);
	document.getElementById("minutes").innerHTML = minutes.toFixed(2);
	document.getElementById("hours").innerHTML = hours.toFixed(2);
}

function areaConverter() {
	const input = parseFloat(document.getElementById("area-input").value);
	const unit = document.getElementById("area-unit").value;
	let meter, centimeter, kilometer, inch, foot;

	if (unit === " meter") {
		meter = input;
		centimeter = input * 10000;
		kilometer = input * 1e-6;
		foot = input * 10.7639104;
		inch = input * 1550.0031;
	}
	else if (unit === " centimeter") {
		meter = input * 0.0001;
		centimeter = input;
		kilometer = input * 1e-10;
		foot = input * 0.0010763;
		inch = input * 0.15500031;
	}
	else if (unit === " kilometer") {
		meter = input * 1000000;
		centimeter = input * 1e10;
		kilometer = input;
		foot = input * 10763910.4;
		inch = foot * 1.5500031e9;
	}
	else if (unit === " foot") {
		meter = input * 0.09290304;
		centimeter = input * 929.0304;
		kilometer = input * 9.290904e-8;
		foot = input;
		inch = foot * 144;
	}
	else if (unit === " inch") {
		meter = input * 0.00064516;
		centimeter = input * 6.4516;
		kilometer = input * 6.4516e-10;
		foot = input * 0.00694444;
		inch = input;
	}

	document.getElementById(" meter").innerHTML = meter.toFixed(2);
	document.getElementById(" centimeter").innerHTML = centimeter.toFixed(2);
	document.getElementById(" kilometer").innerHTML = kilometer.toFixed(2);
	document.getElementById(" foot").innerHTML = foot.toFixed(2);
	document.getElementById(" inch").innerHTML = inch.toFixed(2);
}

function volumeConverter() {
	const input = parseFloat(document.getElementById("volume-input").value);
	const unit = document.getElementById("volume-unit").value;
	let cmeter, ccentimeter, ckilometer, cmilimeter, cliter;

	if (unit === "cmeter") {
		cmeter = input;
		ccentimeter = input * 1000000;
		ckilometer = input * 1e-9;
		cliter = input * 1000;
		cmilimeter = input * 1000000000;
	}
	else if (unit === "ccentimeter") {
		cmeter = input * 0.000001;
		ccentimeter = input;
		ckilometer = input * 9.99999999 - 16;
		cliter = input * 0.001;
		cmilimeter = input * 1000;
	}
	else if (unit === "ckilometer") {
		cmeter = input * 1000000000;
		ccentimeter = input * 1000000000000000;
		ckilometer = input;
		cliter = input * 1000000000000;
		cmilimeter = input * 100000000000000;
	}
	else if (unit === "cmilimeter") {
		cmeter = input * 1.E-9;
		ccentimeter = input * 0.001;
		ckilometer = input * 1.E-18;
		cliter = input * 0.000001;
		cmilimeter = input;
	}
	else if (unit === "cliter") {
		cmeter = input * 0.001;
		ccentimeter = input * 1000;
		ckilometer = input * 1.E-12;
		cliter = input;
		cmilimeter = input * 1000000;
	}

	document.getElementById("cmeter").innerHTML = cmeter.toFixed(2);
	document.getElementById("ccentimeter").innerHTML = ccentimeter.toFixed(2);
	document.getElementById("ckilometer").innerHTML = ckilometer.toFixed(2);
	document.getElementById("cliter").innerHTML = cliter.toFixed(2);
	document.getElementById("cmilimeter").innerHTML = cmilimeter.toFixed(2);
}
