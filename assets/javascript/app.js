  var config = {
	    apiKey: "AIzaSyBy0V5ES1QyLAT-p6EtG339Lzyem5HgPG0",
	    authDomain: "foodtruck-adcc6.firebaseapp.com",
	    databaseURL: "https://foodtruck-adcc6.firebaseio.com",
	    storageBucket: "foodtruck-adcc6.appspot.com",
	  };
	  firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/8c312b60d67290eb/geolookup/conditions/q/IA/Cedar_Rapids.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
});
