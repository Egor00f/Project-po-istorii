$(function () {
    $("#content").load("data.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#content").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
})