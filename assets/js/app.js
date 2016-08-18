$(".AfterLogin").hide();

//Firebase
var config = {
  apiKey: "AIzaSyBy0V5ES1QyLAT-p6EtG339Lzyem5HgPG0",
  authDomain: "foodtruck-adcc6.firebaseapp.com",
  databaseURL: "https://foodtruck-adcc6.firebaseio.com",
  storageBucket: "foodtruck-adcc6.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();

//Google Sign In
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}

function onSignIn(googleUser) {
 var profile = googleUser.getBasicProfile();
 console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
 console.log('Name: ' + profile.getName());
 console.log('Image URL: ' + profile.getImageUrl());
 console.log('Email: ' + profile.getEmail());
}

function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  $(".AfterLogin").show();
  $(".Login").hide();
  }

  function onFailure(error) {
  console.log(error);
  $(".AfterLogin").hide();
  }

//Google Map
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 10
        });
      }

//For Google Map Markers to show trucks
// function initMap() {
//   var myLatLng = {lat: -25.363, lng: 131.044};

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: myLatLng
//   });

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Hello World!'
//   });
// }