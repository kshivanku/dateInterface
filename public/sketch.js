var socketDates;
socketDates = io.connect("https://dateinterface.herokuapp.com/");

var profilename;

$(document).ready(function(){
  loadpage("profileSelection");
  $("#writer_profile_box").click(function(){
    profilename = "writer";
    loadpage('scriptPage');
    console.log("profilename: " + profilename);
  });
  $("#date_profile_box").click(function(){
    profilename = "date";
    loadpage('scriptPage');
    console.log("profilename: " + profilename);
  });
});

socketDates.on('scriptCues', gotScriptCues);
function gotScriptCues(data) {
  if (data.intendedFor.indexOf(profilename) != -1) {
    console.log(data);
  }
}

function loadpage(page) {
  switch(page){
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
