function start() {
    var token = $('#tokenDiv').text().trim();
    // var token = 'I4RLzAC4Ev4ZgnjYvePuNIFpGy%2FDttL5U%2F6bMWQu0tcbz2G5m2euximrwlv7fRG6324EfEl4sC%2FTkEgIeglwrgUPYKb4iv9EL7rld62TvU3vc9PrindyNELnMG7IiEFOGZczaEMFXTwmQdwtEfjc3Gxvczw1rg1x5jsB5ueZ0NnMSYA0SbrHlf7B%2BdrHlVg3CMCTeGembcz6h%2FzmMDDZYrK0ncWajUT8aEvsgrFnLbCgGlkKiY1Uijs291sSPJamcT0STJPE5aARBYIjQkX7wTbqXVbyuD%2BPx3Zlp6QnaUK%2BxuteHKigyQgyd9jaBra0hHcBVzx6NthB6Fe1F4uNAWmUNx1tQpjeLrIZE1s%2BK1zZsVrsqxuMs%2FlrsvlL3PcpunyWwEiD7zL0ud62gT45cO%2Boy2LZQVWKn5W3NrMLTY1kZ7hzYVanBBlT2I9u1s1uqU2WzcB9aLelPPQCndbWz7uqBo4YSUb4qd1LwpWmjggURgSk47I%2FID50%2FNaA0GnTfd6Rw6pow%2Bw0aUo8UsucA%2BBt8CjOUuR8Y2i2FL7AACHMLk7Nk8QN1BpJwn9Jja%2FqRMuSLeY2jYkHgPtPz6wbl12Rw7SIn%2BIf0ZjeoeZ21z56eqyX57I%2FEz9LN5KOyIM0klAmS8eENB6EpVJxCxgsz4b6Jxa%2BuLAbCOZYssJJGORdz4%2BR0E%2B49WjBMU2%2FYS1icwG6FGfuB72q22OROBZqXMq3hAxMyp1dnqJV90%2FxHvd0e25U0r4kPd3oB8BBkBZFG5KUgpuV%2FDYoFQs1mKQ3dOT95VbWGtY%2F22dyfqk1TJKBJYgM5pcL6ZNZSYNuPZvxg%2BLAgwBj%2BM8ijVEv7lgb3NbR070IdogB3RqqSLvUBh1b6oOoSNqTZDH0mf31bmXaN6Oq6H2xeLCZupo3pI%2FA645JW5X%2FLed1FI0ETfIGX%2FMFZPb6OYAYmNl0hcgDBpT8';
    console.log(token);
    console.log('hihi');
    var lastDivId = 1;
    jQuery('<div/>', {
        id: 'test' + lastDivId,
        "class": 'recognizing'
    }).appendTo('#lines');

    var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
        token: token,
        object_mode: false // default
    });
    stream.setEncoding('utf8'); // get text instead of Buffers for on data events
    stream.on('data', function(data) {
        console.log(data);
        $('#test' + lastDivId).text(data);
        lastDivId += 1;
        console.log(lastDivId);
        jQuery('<div/>', {
            id: 'test' + lastDivId,
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
    stream.on('stop', function(err) {
        console.log('end');
    });
    document.querySelector('#stopBtn').onclick = stream.stop.bind(stream);
}