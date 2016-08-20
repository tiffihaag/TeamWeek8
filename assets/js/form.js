 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyBy0V5ES1QyLAT-p6EtG339Lzyem5HgPG0",
   authDomain: "foodtruck-adcc6.firebaseapp.com",
   databaseURL: "https://foodtruck-adcc6.firebaseio.com",
   storageBucket: "foodtruck-adcc6.appspot.com",
 };
 firebase.initializeApp(config);

  var database = firebase.database();

 // Declaring onclick function //
$("#search").on("click", function(){
    console.log("it works");
	// displays in firebase upside down //

    var name = "";
    var email = "";
    var business = "";
    var address = "";
    var city = "";
    var state = "";
    var zip = "";
    var date = "";
    var start = "";
    var end = "";
    var menu = "";
    var comment = "";

	name = $('#name').val().trim();
	email = $("#email").val().trim();
	business = $('#business').val().trim();
    address = $('#address').val().trim();
    city = $("#city").val().trim();
    state = $('#state').val().trim();
    zip = $('#zip').val().trim();
	date = $('#datepicker').val().trim();
    start = $('#start').val().trim();
    end = $('#end').val().trim();
	menu = $('#menu').val().trim();
	comment = $("#comment").val().trim();

	database.ref().push({
		name: name,
		email: email,
		business: business,
		address: address,
		city: city,
		state: state,
		zip: zip,
		date: date,
        start: start,
        end: end,
        menu: menu,
        comment: comment

	});
	return false;
 })

database.ref().on("child_added", function(snapshot){
    // console.log //
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().email);
    console.log(snapshot.val().business);
    console.log(snapshot.val().address);
    console.log(snapshot.val().city);
    console.log(snapshot.val().state);
    console.log(snapshot.val().zip);
    console.log(snapshot.val().date);
    console.log(snapshot.val().start);
    console.log(snapshot.val().end);
    console.log(snapshot.val().menu);
    console.log(snapshot.val().comment)


  var name = snapshot.val().name
  var email = snapshot.val().email
  var business = snapshot.val().business
  var address = snapshot.val().address
  var city = snapshot.val().city
  var state = snapshot.val().state
  var zip = snapshot.val().zip
  var dateTime = snapshot.val().date
  var start = snapshot.val().start
  var end = snapshot.val().end
  var menu = snapshot.val().menu
  var comment = snapshot.val().comment
});

  $( function() {
    $( "#datepicker" ).datepicker();
  });


    $(function() {
    $('#start').timepicker();
     });

    $(function() {
    $('#end').timepicker();
     });



If we need to clear the values off the form, this is the example on how
$('.trainName').val("");



//For the Search Bar
$("#searchDatabase").on("click", function(){
  var cityName = $("#searchMe").val();
  
//Match the city from the dropdown to the city field in the database

database.ref().on('child_added', function(childSnapshot) {
    console.log(childSnapshot.val());
    var tname = childSnapshot.val().name;
    var temail = childSnapshot.val().email;
    var tbusiness = childSnapshot.val().business;
    var taddress = childSnapshot.val().address;
    var tcity = childSnapshot.val().city;
    var tstate = childSnapshot.val().state;
    var tzip = childSnapshot.val().zip;
    var tdateTime = childSnapshot.val().dateTime;
    var tstart = childSnapshot.val().start;
    var tend = childSnapshot.val().end;
    var tmenu = childSnapshot.val().menu;
    var tcomment = childSnapshot.val().comment;
 
  var tableElem = $('<tr>').attr("dataName", childSnapshot.val().trainName);
    tableElem.append($('<td>').text(childSnapshot.val().tname));
    tableElem.append($('<td>').text(childSnapshot.val().temail));
    tableElem.append($('<td>').text(childSnapshot.val().tbusiness));
    tableElem.append($('<td>').text(childSnapshot.val().taddress));
    tableElem.append($('<td>').text(childSnapshot.val().tcity));
    tableElem.append($('<td>').text(childSnapshot.val().tstate));
    tableElem.append($('<td>').text(childSnapshot.val().tzip));
    tableElem.append($('<td>').text(childSnapshot.val().tdateTime));
    tableElem.append($('<td>').text(childSnapshot.val().tstart));
    tableElem.append($('<td>').text(childSnapshot.val().tend));
    tableElem.append($('<td>').text(childSnapshot.val().tmenu));
    tableElem.append($('<td>').text(childSnapshot.val().tcomment));
    $('#tBody').append(tableElem);
  }
