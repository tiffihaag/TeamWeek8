 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyBy0V5ES1QyLAT-p6EtG339Lzyem5HgPG0",
   authDomain: "foodtruck-adcc6.firebaseapp.com",
   databaseURL: "https://foodtruck-adcc6.firebaseio.com",
   storageBucket: "foodtruck-adcc6.appspot.com",
 };
 firebase.initializeApp(config);

  var database = firebase.database();

$(document).ready(function(){

 // Declaring onclick function //
$("#search").on("click", function(){
  $('#formId').empty();
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
  	}); //ref.push

  	return false;

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
      }); //child added
  }); //onclick function

    $(function() {
      $("#datepicker").datepicker();
    });

    $(function() {
      $('#start').timepicker();
    });

    $(function() {
      $('#end').timepicker();
    });

    //Stuff For the Search Bar on index.html
    $("#searchDatabase").on("click", function(){
      var cityName = $("#searchMe").val();
      console.log("hello");
      console.log("From database: " + cityName);

    database.ref().on("child_added", function(childSnapshot) {
      console.log("checking this " + childSnapshot.val().city);
      var cityInData = (childSnapshot.val().city);

      if (cityInData = cityName) {
        database.ref().on("value", function(snapshot) {
        console.log ("Works even though it's one equal sign");
      }); //database.ref on value function
        $('.searchResults').append("<div class='tableStuff'><span id='tableName'><b>"+childSnapshot.val().name+"</b> </span></br><span id='tableEmail'> "+childSnapshot.val().email+"</span></br><span id='tableBusiness'> "+childSnapshot.val().business+"</span></br><span id='tableAddress'> "+childSnapshot.val().address+"</span></br><span id='tableCity'> "+childSnapshot.val().city+"</span></br><span id='tableState'> "+childSnapshot.val().state+"</span></br><span id='tableZip'> "+childSnapshot.val().zip+"</span></br><span id='tableDateTime'> "+childSnapshot.val().date+"</span><span id='tableStart'> "+childSnapshot.val().start+"</span></br><span id='tableEnd'> "+childSnapshot.val().end+"</span></br><span id='tableComment'> "+childSnapshot.val().comment+"</span></br></br></div>");
        
      }; //city equals city in database
    }); //for child_added childSnapshot
  }); //for searchDatabase on click
}); //doc.ready function




  
