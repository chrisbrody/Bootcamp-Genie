// STORE ARRAY TO COMPUTE RESULTS
if (localStorage) {
  // LocalStorage is supported!
  console.log("hello storage");
} else {
	alert('PLEASE UPDATE YOUR BROWSER TO USE THIS AWESOME DEV BOOTCAMP TOOL');
}


var answer_array = [];


// RESULTS
	function results() {
		var html5docs = JSON.parse(localStorage.answer_array);
		alert('You have answered like this ' + '\n' + 'Location: ' + html5docs[0] + '\n' + 'Dev Type: ' + html5docs[1] + '\n' + 'Dedication Time: ' + html5docs[2] + '\n' + 'Class Type: ' + html5docs[3] + '\n' + 'Bank Roll: ' + html5docs[4] + '\n' + 'Skill Level: ' + html5docs[5] + '\n' + 'Gender: ' + html5docs[6] );
	}


// QUESTION 1 
	function nyc() {
		var a = "Nyc";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function sf() {
		var a = "Sf";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function boston() {
		var a = "Boston";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}


// QUESTION 2
	function fed() {
		var a = "Front End Dev";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function bed() {
		var a = "Back End Dev";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function noDev() {
		var a = "I am not sure what type of dev yet";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}


// QUESTION 3
	function partTime() {
		var a = "Part Time";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function fullTime() {
		var a = "Full Time";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function noTime() {
		var a = "I am not sure how much spare time I have";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}


// QUESTION 4
	function online() {
		var a = "Online";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function inPerson() {
		var a = "In Person";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function hybrid() {
		var a = "Hybrid";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}


// QUESTION 5
	function smallBank() {
		var a = "$0 - $6000";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function mediumBank() {
		var a = "$6000 - $12000";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function largeBank() {
		var a = "$12k+";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}


// QUESTION 6
	function beginner() {
		var a = "beginner";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function intermediate() {
		var a = "intermediate";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function advanced() {
		var a = "advanced";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}


// QUESTION 7
	function male() {
		var a = "male";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function female() {
		var a = "female";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}
	function secret() {
		var a = "secret";
		answer_array.push(a);
		console.log(answer_array);
		localStorage.answer_array = JSON.stringify(answer_array);
	}