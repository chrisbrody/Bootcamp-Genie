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
	    var city = $("#q1").val();
	    var devType = $("input[name=q2]:checked").val();
	    var timeCommit = $("input[name=q3]:checked").val();
	    var environment = $("input[name=q4]:checked").val();
	    var bankroll = $("input[name=q5]:checked").val();
	    var codingLevel = $("input[name=q6]:checked").val();
	    var gender = $("input[name=q7]:checked").val();

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
		$('#quotes').hide();

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
	'San Francisco', 
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
	'San Francisco', 
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
	return ( school.city === entryDate.city );
	
});
console.log( schools );
// RETURN THE TOP SCHOOL MATCH
$( "#box1 a" ).attr( "href", schools[0].hrefer );
$( "#box1 h3" ).text( schools[0].bootcamp );
$( "#box1 p" ).text( schools[0].descriptions );



$("#fakeloader").fakeLoader({
	timeToHide:3200, //Time in milliseconds for fakeLoader disappear
	zIndex:"9999",//Default zIndex
	spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
	bgColor:"#2ecc71", //Hex, RGB or RGBA colors
});