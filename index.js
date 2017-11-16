console.log("gday");
var imgCount = 8;
    var dir = 'images/';
    var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
    var images = new Array
            images[1] = "megha1.jpg",
            images[2] = "megha2.jpg",
            images[3] = "megha3.jpg",
            images[4] = "megha4.jpg",
            images[5] = "megha5.jpg",
            images[6] = "megha6.jpg",
            images[7] = "megha7.jpg",
            images[8] = "megha8.jpg",

	document.getElementById("first-row").style.backgroundImage = "url(" + dir + images[randomCount] + ")";
	document.getElementById("mainbutton").innerText = ""+randomCount+"/8";