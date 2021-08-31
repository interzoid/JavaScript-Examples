// Get API key at www.interzoid.com/register
// npm install xmlhttprequest

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://api.interzoid.com/getglobalnumberinfo?intlnumber=+4906979550");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-api-key", "YOURAPIKEY");

xhr.send(data);
