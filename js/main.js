// check for local storage
if (localStorage) {
  // LocalStorage is supported!
  console.log(localStorage);
} else {
	alert('PLEASE UPDATE YOUR BROWSER TO USE THIS AWESOME DEV BOOTCAMP TOOL');
}


// return entry data from local storage
	var entryDate = JSON.parse(localStorage.entry);

	function findSchool() {

		// clear local storage
		localStorage.clear();

		// get input values for questions
	    var city = document.getElementById("q1").value;
	    var devType = document.getElementById("q2").value;
	    var timeCommit = document.getElementById("q3").value;
	    var environment = document.getElementById("q4").value;
	    var bankroll = document.getElementById("q5").value;
	    var codingLevel = document.getElementById("q6").value;
	    var gender = document.getElementById("q7").value;

	    // object to store local host data
	    var entry = {
	        "city": city,
	        "devType": devType,
	        "timeCommit": timeCommit,
	        "environment": environment,
	        "bankroll": bankroll,
	        "codingLevel": codingLevel,
	        "gender": gender
	    };

	    // save to local storage
	    localStorage.setItem("entry", JSON.stringify(entry));
	}

	function results() {			
		console.log('You have answered like this ' + '\n' + 'Location: ' + entryDate.city + '\n' + 'Dev Type: ' + entryDate.devType + '\n' + 'Dedication Time: ' + entryDate.timeCommit + '\n' + 'Class Type: ' + entryDate.environment + '\n' + 'Bank Roll: ' + entryDate.bankroll + '\n' + 'Skill Level: ' + entryDate.codingLevel + '\n' + 'Gender: ' + entryDate.gender );
	}

// TOGGLE QUESTIONAIRE 
	$('a#start').on('click', function () {
		console.log('hey');
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



// RANDOM STUFF

// AUTO COMPLETE OPTIONS
$(function() {
	// QUESTION 1 - Desired City
	var q1Tags = ['Akron','Atlanta','Austin','Boston','Boulder','Chicago','Dallas','Denver','Houston','Kansas City',
		'Las Vegas','Los Angeles','Louisville','Miami','Nashville','New York','Philadelphia','Portland','Salt Lake City','San Francisco','San Diego','Seattle','Washington, DC'];
	$('#q1').autocomplete({	source: q1Tags });
	// // QUESTION 2 - Developer Type
	// var q2Tags = ['Back End','Front End','Undecided'];	
	// $('#q2').autocomplete({	source: q2Tags });
	// // QUESTION 3 - Time Commitment
	// var q3Tags = ['10','20','30','40','50','60'];	
	// $('#q3').autocomplete({	source: q3Tags });
	// // QUESTION 4 - Learning Environment
	// var q4Tags = ['Online','In Person','Hybrid - (Flipped Class)'];	
	// $('#q4').autocomplete({	source: q4Tags });
	// // QUESTION 5 - Budget
	// var q5Tags = ['1000','2000','3000','4000','5000','6000','7000','8000','9000','10000','11000','12000','13000','14000','15000','16000','17000','18000','19000','20000'];	
	// $('#q5').autocomplete({	source: q5Tags });
	// // QUESTION 6 - Coding Level
	// var q6Tags = ['Beginner','Intermediate','Advanced'];	
	// $('#q6').autocomplete({	source: q6Tags });
	// // QUESTION 7 - Gender
	// var q7Tags = ['Female','Male','It is a secret'];	
	// $('#q7').autocomplete({	source: q7Tags });



});


// create school objects ftw
function school(bootcamp, city, devType, timeCommit, environment, bankroll, codingLevel, gender, hrefer, descriptions) {
    this.bootcamp = bootcamp;
    this.city = city;
    this.devType = devType;
    this.timeCommit = timeCommit;
    this.environment = environment;
    this.bankroll  = bankroll;
    this.codingLevel  = codingLevel;
    this.gender  = gender;    
    this.hrefer = hrefer;
    this.descriptions = descriptions;
    this.infos = function() {
        return bootcamp + ':' + '\n' + 'Answers: ' + '\n' +this.city+ ", " +this.devType+ ", " +this.timeCommit+ ", " +this.environment+ ", " +this.bankroll+ ", " +this.codingLevel+ ", " +this.gender;
    };
}




// school objects

var sch00 = new school(
	'Codify Academy', 
	'New York', 
	'Back End', 
	'10', 
	'hybrid', 
	'4000', 
	'beginner', 
	'either',
	'http://codifyacademy.com/', 
	'Learn to Code with a Mentor - Flipped Classroom Setting'
);

var sch01 = new school(
	'Codify Academy', 
	'Boston', 
	'Front End', 
	'10', 
	'Hybrid - (Flipped Class)', 
	'4000', 
	'Beginner', 
	'Female', 
	'http://codifyacademy.com/', 
	'Learn to Code with a Mentor - Flipped Classroom Setting'
);

var sch04 = new school(
	'Start-up Institute', 
	'Boston', 
	'Front End', 
	'10', 
	'Hybrid - (Flipped Class)', 
	'4000', 'Beginner', 
	'Female', 
	'http://www.startupinstitute.com/', 
	'Ramp up sessions available - update sam '
);
var sch05 = new school(
	'Dev Bootcamp', 
	'Boston', 
	'Front End', 
	'10', 
	'Hybrid - (Flipped Class)', 
	'4000', 
	'Beginner', 
	'Female', 
	'http://devbootcamp.com/', 
	'These basics are covered during our remote prep program, and provide the foundations for building for the Web.'
);
var sch02 = new school(
	'Codify Academy', 
	'Boston', 
	'Front End', 
	'30', 
	'hybrid', 
	'4000', 
	'beginner', 
	'either'
);
var sch03 = new school(
	'Codify Academy', 
	'Boston', 
	'Back End', 
	'40', 
	'hybrid', 
	'4000', 
	'beginner', 
	'either'
);

// schools array
var schools = [ sch00, sch01, sch02, sch03, sch04, sch05 ];
console.log( schools );

// SEARCH THROUGH SCHOOL OBJECTS
schools = jQuery.grep(schools, function (school) {
	return ( school.city === entryDate.city && school.devType === entryDate.devType && school.timeCommit === entryDate.timeCommit && school.environment === entryDate.environment && school.bankroll === entryDate.bankroll && school.codingLevel === entryDate.codingLevel && school.gender === entryDate.gender );
	
});

// RETURN THE TOP SCHOOL MATCH
$( "#box1 a" ).attr( "href", schools[0].hrefer );
$( "#box1 h3" ).text( schools[0].bootcamp );
$( "#box1 p" ).text( schools[0].descriptions );


