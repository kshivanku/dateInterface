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

function gotData(data){
  console.log(data.val())
}

function errData(err){
  console.log(err);
}
