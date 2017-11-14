// Initialize Firebase
var config = {
  apiKey: "AIzaSyDB7c6Uf8dcA5m8jrWEyjKSPK7crGENyyQ",
  authDomain: "audiencepoll-7e23c.firebaseapp.com",
  databaseURL: "https://audiencepoll-7e23c.firebaseio.com",
  projectId: "audiencepoll-7e23c",
  storageBucket: "audiencepoll-7e23c.appspot.com",
  messagingSenderId: "580263770976",
};
firebase.initializeApp(config);
var database = firebase.database();

var ref = database.ref("allusers");
ref.on('value', gotData, errData);

var count = 1;
function gotData(data){
  console.log(data.val())
  var users = Object.keys(data);
  if(data.val() != null && count == 1){
    $("h3").html("Your date is going: Terrible");
    count++;
  }
  else if(data.val() != null && count == 2){
    $("h3").html("Save this date by telling a personal story!");
    count = 1;
  }
}

function errData(err){
  console.log(err);
}


var questions = [
  {
    "question_id": "Both01",
    "question_text": "How is the date going so far?",
    "pop_answer": null
  },
  {
    "question_id": "HIM01",
    "question_text": "Quick, save the conversation! What should he talk about next?",
    "pop_answer": null
  },
  {
    "question_id": "HER01",
    "question_text": "What do you think is the most important quality that he is looking for in his partner?",
    "pop_answer": null
  }
]
