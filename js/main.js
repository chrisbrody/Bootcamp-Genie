// check for local storage
if (localStorage) {
  // LocalStorage is supported!
  console.log("hello storage");
} else {
	alert('PLEASE UPDATE YOUR BROWSER TO USE THIS AWESOME DEV BOOTCAMP TOOL');
}



// VERSION 2

	// return entry data from local storage
	var entryDate = JSON.parse(localStorage.entry);

	function findSchool() {

		// clear local storage
		localStorage.clear();

		// get input values for questions
	    var city = document.getElementById("q1").value;
	    var devType = document.getElementById("q2").value;
	    var time = document.getElementById("q3").value;
	    var environment = document.getElementById("q4").value;
	    var bankroll = document.getElementById("q5").value;
	    var codingLevel = document.getElementById("q6").value;
	    var gender = document.getElementById("q7").value;

	    // object to store localhost data
	    var entry = {
	        "city": city,
	        "devType": devType,
	        "time": time,
	        "environment": environment,
	        "bankroll": bankroll,
	        "codingLevel": codingLevel,
	        "gender": gender
	    };

	    // save to local storage
	    localStorage.setItem("entry", JSON.stringify(entry));
	};

	function results() {			
		alert('You have answered like this ' + '\n' + 'Location: ' + entryDate.city + '\n' + 'Dev Type: ' + entryDate.devType + '\n' + 'Dedication Time: ' + entryDate.time + '\n' + 'Class Type: ' + entryDate.environment + '\n' + 'Bank Roll: ' + entryDate.bankroll + '\n' + 'Skill Level: ' + entryDate.codingLevel + '\n' + 'Gender: ' + entryDate.gender );
	}

	// TOGGLE QUESTIONAIRE 
	$('#start').on('click', function () {

		// hide intro
		$('#main').hide();

		// change background image
		$('body').toggleClass('bg1');

		// reveal questionnaire
		$('#fs-form-wrap').toggleClass('hidden');
	});

	// ON FORM SUBMIT
	$('.fs-submit').on('click', function () {

		// run findSchool function	
		findSchool();

		// redirect to results page
		window.location.href="results.php";	
	});


