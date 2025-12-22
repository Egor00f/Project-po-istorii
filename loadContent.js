$(function () {
    $("#ref").load("ref.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#ref").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
    $("#prs").load("prs.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#prs").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
})