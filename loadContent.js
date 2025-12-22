$(function () {
    $("#ref").load("data.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#ref").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
    $("#prs").load("data.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#prs").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
})