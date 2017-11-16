console.log("gday");
var imgCount = 8;
    var dir = 'images/';
    var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
    var images = new Array
            images[1] = "megha1.JPG",
            images[2] = "megha2.JPG",
            images[3] = "megha3.JPG",
            images[4] = "megha4.JPG",
            images[5] = "megha5.JPG",
            images[6] = "megha6.JPG",
            images[7] = "megha7.JPG",
            images[8] = "megha8.JPG",

	document.getElementById("first-row").style.backgroundImage = "url(" + dir + images[randomCount] + ")";
	document.getElementById("mainbutton").innerText = ""+randomCount+"/8";