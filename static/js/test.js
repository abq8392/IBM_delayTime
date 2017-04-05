var lastDivId = 1;
jQuery('<div/>', {
    id: lastDivId,
    "class": 'recognizing'
}).appendTo('#lines');


function start() {
    var token = $('#tokenDiv').text();
    console.log(token);
    console.log('hihi');

    var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
        token: token,
        object_mode: false // default
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

}