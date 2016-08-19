  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDbm7Gj4IrW52itBHXsV4R5wRG5rOGnWzU",
    authDomain: "first-new-project.firebaseapp.com",
    databaseURL: "https://first-new-project.firebaseio.com",
    storageBucket: "first-new-project.appspot.com",
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


 

