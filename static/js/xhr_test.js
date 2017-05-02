var lastDivId = 1;
jQuery('<div/>', {
    id: lastDivId,
    "class": 'recognizing'
}).appendTo('#lines');

// function createCORSRequest(method, url) {
//     var xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr) {
//         // Check if the XMLHttpRequest object has a "withCredentials" property.
//         // "withCredentials" only exists on XMLHTTPRequest2 objects.
//         xhr.open(method, url, true);
//     } else if (typeof XDomainRequest != "undefined") {
//         // Otherwise, check if XDomainRequest.
//         // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//         xhr = new XDomainRequest();
//         xhr.open(method, url);
//     } else {
//         // Otherwise, CORS is not supported by the browser.
//         xhr = null;
//     }
//     return xhr;
// }
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://watson-speech.mybluemix.net/api/speech-to-text/token",
//     "method": "GET",
//     "headers": {
//         "username": "1aa8c4e0-7be1-4a39-9316-50f5014dbda7",
//         "password": "jiBwnAiiMF3w",
//         "cache-control": "no-cache",
//         "postman-token": "19aee01b-d736-df73-db97-fa850b9bac25"
//     }
// }
// $.ajax(settings).done(function(response) {
//     console.log(response);
//     var token = response.text();
// });
// var data = null;
// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
// var url = 'https://watson-speech.mybluemix.net/api/speech-to-text/token';
// var xhr = createCORSRequest('GET', url);
// if (!xhr) {
//     console.log('CORS not supported');
//   }
// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState == XMLHttpRequest.DONE) {
//     console.log(this.responseText);
//     console.log(xhr);
//   }
// });
// xhr.onloadend = function() {
//   console.log('The end!');
// };
// // xhr.open("GET", "https://watson-speech.mybluemix.net/api/speech-to-text/token");
// xhr.setRequestHeader("username", "1aa8c4e0-7be1-4a39-9316-50f5014dbda7");
// xhr.setRequestHeader("password", "jiBwnAiiMF3w");
// // xhr.setRequestHeader("authorization", "Basic MWFhOGM0ZTAtN2JlMS00YTM5LTkzMTYtNTBmNTAxNGRiZGE3OmppQnduQWlpTUYzdw==");
// // xhr.setRequestHeader("cache-control", "no-cache");
// // xhr.setRequestHeader("postman-token", "5e6e2d22-16d6-e1fe-3d89-a800c57ea3b0");
// // xhr.send(data);
// xhr.send();
// fetch("https://watson-speech.mybluemix.net/api/speech-to-text/token", {
//     headers: {
//         Authorization: "Basic MWFhOGM0ZTAtN2JlMS00YTM5LTkzMTYtNTBmNTAxNGRiZGE3OmppQnduQWlpTUYzdw=="
//         // username: '1aa8c4e0-7be1-4a39-9316-50f5014dbda7',
//         // password: 'jiBwnAiiMF3w'
//     }
// }).then(function(response) {
//     if (response.ok) {
//         console.log('ok');
//         return response.text();
//     } else if (response.status == 401) {
//         console.log("not authorized!");
//     } else {
//         console.log("something happend");
//     }
// }).then(function(token) {
//     console.log(token);
// });

function start() {
    var token = $('#tokenDiv').text();
    console.log(token);
    console.log('hihi');
    // https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/speech-to-text/api
    // var token = 'qtYqQ%2BGwcByawqzAWhwJL1nXllP4NVa9X5FvggTHEkk%2FJimrn%2B70sM83W9JBwrbMesxPwJIfzrJGinohDPbWSYYgBTMLyW0%2FgUnoEomP5cy6RahX%2Bz4pxiTlyKfaByGfWBvya5qqFlBvjyP3DHI7N63uOXP6eeqEXRRGGwmRTZZWhpUQJ9VvBoQsjJhpiyzkTq4HUkA6UwKIrcOIhdNXOTzyRnE6Pv1AptEftuaSdCYA9CVAkONSrz%2FsYgD%2BP7fL3%2F7YoIhpLEfMn7nwo5AlNBEjUZescOIfLrEGu33TLXlUlVwHV9Ytdxi0a5%2BMMiOI6CzGzf1eKsN5XAS7cUNZvI%2BhbmTJZiPjZ7384ZootLBeEMQHN%2F7vr7YJDxqRR80qeI0qndwG%2FvWp%2Bejn1Av24XBXkdDrDGBAbLRn15a3LPDyrv7Qt2ua9rBpzxN5yema1LUdRJ5m7w5yEcJv5wBykDMoPlrBd6vPDH8XAHUWE5RIgo68XmoeLdP1EK%2B4A%2BIwifBSISgzp2qgBDjXnM9fg%2FY1Y5nrKcQZMjkNnOEGcQdiefLcCWpQgoOPgLfPuX%2FoOL04pF5Kx%2BNwXXL%2FtDuw39M4a517MF%2FfylfEti2NNud0zbeZWbMeU6%2BDnbfkOUp%2BcYBDAu5xS3xyRpHwxwFLm1dBfh1Su3Gq43x5eyBs%2FChBK3En%2BvI4f3qHUiC7Dn9AbOft8m7%2Fm5uhVpOx8QBsrv1gtoMjgVKWT17zq8oIw2QOgo3w2D7nJNQff2dI7GRo3sfjQ69WN%2BzQUzMAqOEd2x7nakak8NJ9TyMJa5M17c55uy6q%2BFG%2BjE4EfypJ65WoqU8jMkLfxo0NXcnD9HUgjbZ2O2sP0l%2FQy98C%2FNQrwWFM1sI2hwmTjMZsh%2Frfdn3pw788TNeHIBOUAaY%2BJXgh7lmjjY%2BX3qarIxFmx5KFNXkJdlcDP9Q%2B7gMAATfzlUIz';
    // fetch('https://watson-speech.mybluemix.net/api/speech-to-text/token', {
    //     mode: 'no-cors',
    //     headers: {
    //         // Authorization: 'Basic MWFhOGM0ZTAtN2JlMS00YTM5LTkzMTYtNTBmNTAxNGRiZGE3OmppQnduQWlpTUYzdw=='
    //         username: '1aa8c4e0-7be1-4a39-9316-50f5014dbda7',
    //         password: 'jiBwnAiiMF3w'
    //     }
    //     // body:'username=1aa8c4e0-7be1-4a39-9316-50f5014dbda7&password=jiBwnAiiMF3w'
    // }).then(function(response) {
    //     if (response.ok) {
    //         console.log('ok');
    //         return response.text();
    //     } else if (response.status == 401) {
    //         console.log("not authorized!");
    //     }
    // }).then(function(token) {
    // console.log(token);
    var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
        token: token,
        object_mode: false // default
        // outputElement: '#lines' // CSS selector or DOM Element
    });
    stream.setEncoding('utf8'); // get text instead of Buffers for on data events
    stream.on('data', function(data) {
        console.log(data);
        $('#' + lastDivId).text(data);
        lastDivId += 1;
        console.log(lastDivId);
        jQuery('<div/>', {
            id: lastDivId,
            "class": 'recognizing'
        }).appendTo('#lines');
        // auto scroll
        var lines = document.getElementById('lines');
        console.log("scrollHeight:" + lines.scrollHeight + ", top: " + lines.scrollTop);
        if (lines.scrollTop + 50 >= lines.scrollHeight - lines.clientHeight) lines.scrollTop = lines.scrollHeight;
        else console.log("scrolling");
    });
    stream.on('error', function(err) {
        console.log(err);
        start();
    });
    document.querySelector('#stopBtn').onclick = stream.stop.bind(stream);
    // }).catch(function(error) {
    //     console.log(error);
    // });
}