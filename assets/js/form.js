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
    var business = "";
    var location = "";
    var date= "";
    var menu = "";

	name = $('#name').val().trim();
	business = $('#business').val().trim();
    location = $('#location').val().trim();
	date = $('#datepicker').val();
	menu = $('#menu').val().trim();


	database.ref().push({
		name: name,
		business: business,
		location: location,
		date: date,
        menu: menu

	});
	return false;
 })

database.ref().on("child_added", function(snapshot){
    // console.log //
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().business);
    console.log(snapshot.val().location);
    console.log(snapshot.val().date);
    console.log(snapshot.val().menu)


    var name = snapshot.val().name
  var business = snapshot.val().business
  var location = snapshot.val().location
  var dateTime = snapshot.val().date
  var menu = snapshot.val().menu
});

  $( function() {
    $( "#datepicker" ).datepicker();
  });


    $(function() {
    $('#timeChoice').timepicker();
     });

    
  $("#datepicker").on("click", function(){
    var dates = [];
    var date = $("#newDate").html();
     dates.push(date);
  });
           


