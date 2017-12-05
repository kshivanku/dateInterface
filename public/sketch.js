var socketDates;
socketDates = io.connect("https://dateinterface.herokuapp.com/");

var profilename;

$(document).ready(function() {
    loadpage("profileSelection");
    $("#writer_profile_box").click(function() {
        profilename = "writer";
        loadpage('scriptPage');
        $("#scriptPage h1").html("Date page for: <span style='font-weight:bold'>" + profilename + "</span>");
        console.log("profilename: " + profilename);
    });
    $("#date_profile_box").click(function() {
        profilename = "date";
        $("#scriptPage h2").html("Date page for: <span style='font-weight:bold'>" + profilename + "</span>");
        loadpage('scriptPage');
        console.log("profilename: " + profilename);
    });
});

socketDates.on('scriptCues', gotScriptCues);
function gotScriptCues(data) {
    if (data.intendedFor.indexOf(profilename) != -1) {
        $("#topics").empty();
        var topic = data.message.split(": ")[1];
        var topicDiv = `<h1>Talk about ` + topic + `</h1>`;
        $("#topics").append(topicDiv);
    }
}

function loadpage(page) {
    switch (page) {
        case 'profileSelection':
            $("#profileSelectionPage").css('display', 'block');
            $("#scriptPage").css('display', 'none');
            break;
        case 'scriptPage':
            $("#profileSelectionPage").css('display', 'none');
            $("#scriptPage").css('display', 'block');
            break;
    }
}
