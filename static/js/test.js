var lastDivId = 1;
jQuery('<div/>', {
    id: lastDivId,
    "class": 'recognizing'
}).appendTo('#lines');

function start() {
    console.log('hihi');
    // https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/speech-to-text/api
    // var token = 'qtYqQ%2BGwcByawqzAWhwJL1nXllP4NVa9X5FvggTHEkk%2FJimrn%2B70sM83W9JBwrbMesxPwJIfzrJGinohDPbWSYYgBTMLyW0%2FgUnoEomP5cy6RahX%2Bz4pxiTlyKfaByGfWBvya5qqFlBvjyP3DHI7N63uOXP6eeqEXRRGGwmRTZZWhpUQJ9VvBoQsjJhpiyzkTq4HUkA6UwKIrcOIhdNXOTzyRnE6Pv1AptEftuaSdCYA9CVAkONSrz%2FsYgD%2BP7fL3%2F7YoIhpLEfMn7nwo5AlNBEjUZescOIfLrEGu33TLXlUlVwHV9Ytdxi0a5%2BMMiOI6CzGzf1eKsN5XAS7cUNZvI%2BhbmTJZiPjZ7384ZootLBeEMQHN%2F7vr7YJDxqRR80qeI0qndwG%2FvWp%2Bejn1Av24XBXkdDrDGBAbLRn15a3LPDyrv7Qt2ua9rBpzxN5yema1LUdRJ5m7w5yEcJv5wBykDMoPlrBd6vPDH8XAHUWE5RIgo68XmoeLdP1EK%2B4A%2BIwifBSISgzp2qgBDjXnM9fg%2FY1Y5nrKcQZMjkNnOEGcQdiefLcCWpQgoOPgLfPuX%2FoOL04pF5Kx%2BNwXXL%2FtDuw39M4a517MF%2FfylfEti2NNud0zbeZWbMeU6%2BDnbfkOUp%2BcYBDAu5xS3xyRpHwxwFLm1dBfh1Su3Gq43x5eyBs%2FChBK3En%2BvI4f3qHUiC7Dn9AbOft8m7%2Fm5uhVpOx8QBsrv1gtoMjgVKWT17zq8oIw2QOgo3w2D7nJNQff2dI7GRo3sfjQ69WN%2BzQUzMAqOEd2x7nakak8NJ9TyMJa5M17c55uy6q%2BFG%2BjE4EfypJ65WoqU8jMkLfxo0NXcnD9HUgjbZ2O2sP0l%2FQy98C%2FNQrwWFM1sI2hwmTjMZsh%2Frfdn3pw788TNeHIBOUAaY%2BJXgh7lmjjY%2BX3qarIxFmx5KFNXkJdlcDP9Q%2B7gMAATfzlUIz';
    fetch('https://watson-speech.mybluemix.net/api/speech-to-text/token',
      {
      header: {
        Authorization: 'Basic MWFhOGM0ZTAtN2JlMS00YTM5LTkzMTYtNTBmNTAxNGRiZGE3OmppQnduQWlpTUYzdw=='
      }
      // body:'username=1aa8c4e0-7be1-4a39-9316-50f5014dbda7&password=jiBwnAiiMF3w'
    }).then(function(response) {
        if(response.ok){
          console.log('ok');
          return response.text();
        }
        else if(response.status == 401){
          console.log("not authorized!");
        }
    }).then(function (token) {
    console.log(token);
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
    }).catch(function(error) {
        console.log(error);
    });  
}