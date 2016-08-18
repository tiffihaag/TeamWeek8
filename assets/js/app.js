var googleUser = {};

  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '480535686459-1cn1iqo3np6uf08n9o5nmdto4vcm9pls.apps.googleusercontent.com',
        cookiepolicy: 'none',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
      function(googleUser) {
        document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

  function onSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();
    gapi.client.load('plus', 'v1', function () {
        var request = gapi.client.plus.people.get({
            'userId': 'me'
        });

        //Display the user details
        request.execute(function (resp) {
            var profileHTML = '<div class="profile"><div class="head">Welcome '+resp.name.givenName+'! <a href="javascript:void(0);" onclick="signOut();">Sign out</a></div>';
            profileHTML += '<img src="'+resp.image.url+'"/><div class="proDetails"><p>'+resp.displayName+'</p><p>'+resp.emails[0].value+'</p><p>'+resp.gender+'</p><p>'+resp.id+'</p><p><a href="'+resp.url+'">View Google+ Profile</a></p></div></div>';
            $('.userContent').html(profileHTML);
            $('#gSignIn').slideUp('slow');
        });
      $(".AfterLogin").show();
      $(".Login").hide();
    });
}

function onFailure(error) {
    alert(error);
    $(".AfterLogin").hide();
}

function renderButton() {
    gapi.signin2.render('gSignIn', {
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

//Firebase
var config = {
  apiKey: "AIzaSyBy0V5ES1QyLAT-p6EtG339Lzyem5HgPG0",
  authDomain: "foodtruck-adcc6.firebaseapp.com",
  databaseURL: "https://foodtruck-adcc6.firebaseio.com",
  storageBucket: "foodtruck-adcc6.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();

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