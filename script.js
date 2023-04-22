window.onload = function() {
    setTimeout(function() {
        var splash = document.getElementById("splash");
        splash.classList.add("hide");
        setTimeout(function() {
            window.location.replace("login.html");
        }, 1000);
    }, 1000);
};
