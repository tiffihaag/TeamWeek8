$(document).ready(function(){
	 var config = {
	    apiKey: "AIzaSyCemlq4m7k1Pd7G6uD6JHQIuqP3RmVsFRw",
	    authDomain: "fir-1-e0d32.firebaseapp.com",
	    databaseURL: "https://fir-1-e0d32.firebaseio.com",
	    storageBucket: "",
	  };
	  firebase.initializeApp(config);

	  var database = firebase.database();

	  var name;
	  var role;
	  // var startData;
	  var monthlyRate; 

	$('#submitButton').on('click', function(){
		name = $('#name').val().trim();
		role = $('#role').val().trim();
		// startDate = $('#startDate').val().trim();
		monthlyRate = $('#monthlyRate').val().trim();
		comment =$('#message').val().trim();
		console.log(name);
		console.log(role);
		console.log(startDate);
		console.log(monthlyRate);
		console.log(comment);

		var menu = "test1";
		var menu2 = "test2";
		var menu3 = "test3";
		var menu4 = "test4";

		var city = 'orlando';
		var city2 = 'winter park';
		var city3 = 'daytona';

		var truckName = 't1';
		var truckName2 = 't2';
		var truckName3 = 't3';
		var truckName4 = 't4';



		var truck1 = [truckName, menu];
		var truck2 = [truckName2, menu2];
		var truck3 = [truckName3, menu3];
		var truck4 = [truckName4, menu4];


		var loc1 = [city, truck1, truck2]
		var loc2 = [city2, truck3, truck4]
		//var loc3 = [city3, truck5, truck6]

		database.ref('foodTrucksData').set({
		locs: [loc1, loc2]
		// truck2: [name, role, comment],
		// truck3: [name, role, comment],
		// truck4: [name, role, comment]
		// location: role,
		// // email: email, 
		// // age: age,
		// comment: comment,
		// startDate: startDate,
		// monthlyRate: monthlyRate,
		// dateAdded: firebase.database.ServerValue.TIMESTAMP
		// console.log(dateAdded);
		});
		return false;
	});
	
	database.ref().on('child_added', function(snapshot){
		// if(snapshot.val() == null){
		// 	return;
		// }else{
			// var dataRow =$('<tr>');

			var nameDiv =(snapshot.val().name + "<br>");
			var roleDiv =(snapshot.val().role + "<br>");
			var commentDiv =(snapshot.val().comment + "<br>");
			var rateDiv =(snapshot.val().monthlyRate + "<br>");
			// var startDiv =(moment(snapshot.val().startDate).format("MMM Do YY") + "<br>");

			// (dataRow).append(nameDiv + roleDiv + commentDiv + rateDiv + startDiv);
			$('#name1').append(nameDiv);
			$('#role1').append(roleDiv);
			// $('#start').append(startDiv);
			$('#rate').append(rateDiv);
			$('#comment1').append(commentDiv);

			// $('#panel1').append(dataRow);
		// }

	});

	$('#searchButton').on('click', function(){
		database.ref('foodTrucksData').on('value', function(snapshot){
			var trucksInfo = snapshot.val().locs;
			//console.log(trucksInfo[0][0]);
			var search = $('#search').val().trim() 
			//console.log(search + "SEARCH ")
			for (i = 0; i < trucksInfo.length; i++){
				if (search == trucksInfo[i][0]){
					console.log('City to search ' + search);
					$('#trucks').append("trucks in " + search + ": " + trucksInfo[i][1][0] + '<br>' + trucksInfo[i][2][0])
					console.log('truck name: ' + trucksInfo[i][1][0])
				} else {
					console.log('Not the city');
				}
			}
			// if (search == trucksInfo[0][0]){
			// 	console.log('City to search ' + search)
			// 	console.log("WE MADE IT" + snapshot.val().trucks[2]);
			// } else if (search != trucksInfo[0][0])
			return false;
		});
	});




});