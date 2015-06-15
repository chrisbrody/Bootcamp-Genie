// check for local storage

	if (localStorage) {
	  // localStorage is supported!
	  console.log(localStorage);
	} else {
		alert('PLEASE UPDATE YOUR BROWSER TO USE THIS AWESOME TOOL');
	}

// toggle questionnaire  

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

// on form submit

	$('.fs-submit').on('click', function () {

		// run findSchool function	
		findSchool();

		// redirect to results page
		window.location.href="results.php";	
	});

// return entry data from local storage

	var entryDate = JSON.parse(localStorage.entry);

// find a school function

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

// auto complete options for cities

	
		// QUESTION 1 - Desired City
		var 
		q1Tags = [
			'Akron','Albuquerque','Amsterdam','Asheville','Atlanta','Austin','Bali','Baltimore','Bangalore','Barcelona','Berlin','Bloomington','Boston','Boulder','Brisbane','Brussels','Calgary','Canary Islands','Cedar City','Charleston','Charlotte','Chicago','Cincinnati','Cleveland','Cluj, Romania','Columbia','Costa Rica','Dallas','Dayton','Denver','Detroit','Durham','Fort Collins','Fort Lauderdale','Fresno','Greenville','Greensboro','Hybrid (Online & In-person)','Hong Kong','Honolulu','Houston','Hyderabad, India','Indianapolis','Iowa City','Irvine','Jacksonville','Jersey City','Kansas City','Las Vegas','Little Rock','Louisville','London','Los Angeles','Madrid','Melbourne','Miami','Minneapolis','Modiin','Monterey','Montreal','Milwaukee','Nancy','Nashville','New Orleans','New York','Nairobi','Omaha','Online','Orlando','Ottawa','Pacific Coast, Ecuador','Paris','Philadelphia','Phoenix','Portland','Provo','Redmond','Salt Lake City','San Antonio','San Diego','San Francisco','San Jose','Seattle','Silicon Valley','Singapore','St. Louis','St. Paul','Sydney','Tampa,','Toronto','Vancouver','Warsaw','Washington','Wellington, New Zealand'
		];
		var previousValue = "";
		$('#q1').autocomplete({	
			source: q1Tags 
		}).keyup(function() {
		    var isValid = false;
		    for (i in q1Tags) {
		        if (q1Tags[i].toLowerCase().match(this.value.toLowerCase())) {
		            isValid = true;
		        }
		    }
		    if (!isValid) {
		        this.value = previousValue
		    } else {
		        previousValue = this.value;
		    }
		});


// console results - not needed for live version

	function results() {			
		console.log('You have answered like this ' + '\n' + 'Location: ' + entryDate.city + '\n' + 'Dev Type: ' + entryDate.devType + '\n' + 'Dedication Time: ' + entryDate.timeCommit + '\n' + 'Class Type: ' + entryDate.environment + '\n' + 'Bank Roll: ' + entryDate.bankroll + '\n' + 'Skill Level: ' + entryDate.codingLevel + '\n' + 'Gender: ' + entryDate.gender );
	}

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
	
	// School names matching to ID in spread sheet
		var school001 = 'Dev Bootcamp',
		school002 = 'General Assembly',
		school003 = 'App Academy',
		school004 = 'Hack Reactor',
		school005 = 'Coding Dojo',
		school006 = 'Launch Academy',
		school007 = 'RocketU',
		school008 = 'Flatiron School',
		school009 = 'Hackbright Academy',
		school010 = 'gSchool',
		school011 = 'Starter League',
		school012 = 'Polycademy',
		school013 = 'Disruption Institute',
		school014 = 'Bitmaker Labs',
		school015 = 'DaVinci Coders',
		school016 = 'RefactorU',
		school017 = 'Hacker School',
		school018 = 'hackerYou',
		school019 = 'Mobile Makers Academy',
		school021 = 'Tealeaf Academy',
		school023 = '10x.org.il',
		school024 = 'Portland Code School',
		school025 = 'Bloc',
		school026 = 'Startup Institute',
		school027 = 'Code Fellows',
		school028 = 'Nashville Software School',
		school029 = 'Thinkful',
		school030 = 'Coder Camps',
		school031 = 'HardCoder Labs',
		school032 = 'Epicodus',
		school033 = 'Sydney Dev Camp',
		school034 = 'Makers Academy',
		school035 = 'Software Craftsmanship Guild',
		school036 = 'Makersquare',
		school037 = 'Craftsmanship Academy',
		school038 = 'Delta Program',
		school039 = 'Fullstack Academy',
		school040 = 'DevPoint Labs',
		school041 = 'Smart Factory',
		school042 = 'The Iron Yard',
		school043 = 'Jaaga',
		school044 = 'Supacoderz',
		school045 = 'Grand Circus',
		school046 = 'Lighthouse Labs',
		school047 = 'Deep Dive Coders',
		school048 = 'Zipfian Academy',
		school049 = 'Vivo School of Technology',
		school050 = 'CodeCore Bootcamp',
		school052 = 'Tech Academy Portland',
		school053 = 'DevMountain',
		school054 = 'Coder Factory',
		school055 = 'CodePath',
		school056 = 'Dojo Dev Camp',
		school057 = 'Steer',
		school058 = 'Code Chicago',
		school059 = 'Codeup',
		school060 = 'AIT Learning',
		school061 = 'Ruby On The Beach',
		school062 = 'BrainStation',
		school063 = 'Dev/Iowa Bootcamp',
		school064 = 'Tech Talent South',
		school065 = 'Omaha Code School',
		school066 = 'Coding House',
		school067 = 'Metis',
		school068 = 'tradecraft',
		school069 = 'Geekwise Academy',
		school070 = 'TurnToTech',
		school071 = 'Anyone Can Learn To Code',
		school072 = 'DevRubyCamp',
		school073 = 'We Got Coders',
		school074 = 'Dev Champs',
		school075 = 'Sabio.la',
		school076 = 'SeedPaths',
		school077 = 'Designation',
		school078 = 'New York Code + Design Academy',
		school079 = 'Turing',
		school080 = 'Coder Vox',
		school081 = 'Wyncode',
		school082 = 'Ada',
		school083 = 'Hackership',
		school084 = 'Ironhack',
		school085 = 'Skillcrush',
		school086 = 'Codecamp Charleston',
		school087 = 'Coding Campus',
		school088 = 'Nairobi Dev School',
		school089 = 'Dev League',
		school090 = 'Tech Bootcamps',
		school091 = 'Betamore Academy',
		school092 = 'Fire Bootcamp',
		school093 = 'iKompass',
		school094 = 'LearningFuze',
		school095 = 'Philly Dev Camp',
		school096 = 'Make School',
		school097 = 'TalentBuddy',
		school098 = 'Dev Academy',
		school099 = 'The Data Incubator',
		school100 = 'Insight',
		school101 = 'Alchemy Lab',
		school102 = 'CareerFoundry',
		school103 = 'The coded',
		school104 = 'Go Live Labs',
		school105 = 'Code Union',
		school107 = 'Coder Cadre',
		school108 = 'Midwest Hacker School',
		school109 = 'Coder"s Lab',
		school110 = 'Big Nerd Ranch',
		school111 = 'Koru',
		school112 = 'Shillington School',
		school113 = 'Marcademy',
		school114 = 'School of Devs',
		school115 = 'The App Academy NL',
		school116 = 'Hacker Coding Academy',
		school117 = 'Coder Foundry',
		school118 = 'Skaled',
		school119 = 'Angelhack Education',
		school120 = 'Designlab',
		school121 = 'Byte Academy',
		school122 = 'RockIT Bootcamp',
		school123 = 'HappyFunCorp Technology Academy',
		school124 = 'Market Campus',
		school125 = 'Viking Code School',
		school126 = 'gr8code',
		school127 = 'Concordia University Coding Bootcamp',
		school128 = 'The Firehose Project',
		school129 = 'Stackademy',
		school130 = 'Skill Distillery',
		school131 = 'CodeClub',
		school132 = 'Digital Professional Institute',
		school133 = 'Interface Web School',
		school134 = 'Eleven Fifty',
		school135 = 'Coderoute',
		school136 = 'Austin Coding Academy',
		school137 = 'Product School',
		school138 = 'Simplon',
		school139 = 'The Hacking School',
		school140 = 'DecodeMTL',
		school141 = 'Outlandish Labs',
		school142 = 'Athena Tech Academy',
		school143 = 'Science to Data Science',
		school144 = 'Square Code Camp',
		school145 = 'PDX Code Guild',
		school146 = 'Hackership San Francisco',
		school147 = 'Big D Code',
		school148 = 'Ward 5 Code Camp',
		school149 = 'Bit Bootcamp',
		school150 = 'NYC Data Science',
		school151 = 'Notch8 LEARN',
		school153 = 'Le Wagon',
		school154 = 'Base10 Academy',
		school155 = 'GoCode',
		school156 = 'Claim Academy',
		school157 = 'Prime Digital Academy',
		school158 = 'Isomer',
		school159 = 'Codecademy Labs',
		school160 = 'Pen and Paper Coding',
		school161 = 'Academy X',
		school162 = 'Lumenbrite',
		school163 = 'Founders & Coders',
		school164 = 'We Can Code IT',
		school165 = 'CodeStream Labs',
		school166 = 'Data Science Dojo',
		school167 = 'Data Science for Social Good',
		school168 = 'Microsoft Research Data Science Summer School',
		school169 = 'Apprentice.io',
		school170 = 'CODED',
		school171 = 'Treehouse',
		school172 = 'Hungry Academy',
		school173 = 'invasivecode',
		school174 = 'Codify Academy',
		school175 = 'AcadGild',
		school176 = 'The Institute for Statistics Education',
		school177 = 'devCodeCamp',
		school178 = 'Moringa School';
	// City names matching to ID in spread sheet
		var 
		city01 = 'Chicago',
		city02 = 'Akron',
		city03 = 'Albuquerque',
		city04 = 'Austin',
		city05 = 'Bangalore',
		city06 = 'Berlin',
		city07 = 'Boston',
		city08 = 'Boulder',
		city09 = 'Denver',
		city10 = 'Detroit',
		city11 = 'Greenville',
		city12 = 'Hong Kong',
		city13 = 'Houston',
		city14 = 'Jacksonville',
		city15 = 'Kansas City',
		city16 = 'Las Vegas',
		city17 = 'London',
		city18 = 'Los Angeles',
		city19 = 'Minneapolis',
		city20 = 'Modiin',
		city21 = 'Montreal',
		city22 = 'Nashville',
		city23 = 'New York',
		city24 = 'Online',
		city25 = 'Ottawa',
		city26 = 'Portland',
		city27 = 'Provo',
		city28 = 'Raleigh',
		city29 = 'Salt Lake City',
		city30 = 'San Antonio',
		city31 = 'San Diego',
		city32 = 'San Francisco',
		city33 = 'Seattle',
		city34 = 'Sydney',
		city35 = 'Toronto',
		city36 = 'Vancouver',
		city37 = 'Washington',
		city38 = 'Silicon Valley',
		city39 = 'Dallas',
		city40 = 'Pacific Coast, Ecuador',
		city41 = 'Canary Islands',
		city42 = 'Iowa City',
		city43 = 'Atlanta'
		city44 = 'Asheville',
		city45 = 'Omaha',
		city46 = 'Fresno',
		city47 = 'Charleston',
		city48 = 'Melbourne',
		city49 = 'Singapore',
		city50 = 'Miami',
		city51 = 'Barcelona',
		city52 = 'Madrid',
		city53 = 'Durham',
		city54 = 'Nairobi',
		city55 = 'Honolulu',
		city56 = 'Baltimore',
		city57 = 'Brisbane',
		city58 = 'Wellington, New Zealand',
		city59 = 'Phoenix',
		city60 = 'Warsaw',
		city61 = 'Amsterdam',
		city62 = 'Tampa',
		city63 = 'Orlando',
		city64 = 'Bali',
		city65 = 'St. Paul',
		city66 = 'Redmond',
		city67 = 'Irvine',
		city68 = 'Indianapolis',
		city69 = 'Cedar City',
		city70 = 'Louisville',
		city71 = 'Cincinnati',
		city72 = 'St. Louis',
		city73 = 'Dayton',
		city74 = 'Cluj, Romania',
		city75 = 'Hyderabad, India',
		city76 = 'San Jose',
		city77 = 'Milwaukee',
		city78 = 'Jersey City',
		city79 = 'Columbia, SC',
		city80 = 'Monterey',
		city81 = 'Paris',
		city82 = 'Brussels',
		city83 = 'Nancy',
		city84 = 'Charlotte',
		city85 = 'Costa Rica',
		city86 = 'Bloomington',
		city87 = 'Greensboro, NC',
		city88 = 'Hybrid (Online & In-person)',
		city89 = 'Philadelphia',
		city90 = 'Cleveland',
		city91 = 'Fort Collins',
		city92 = 'New Orleans',
		city93 = 'Fort Lauderdale',
		city94 = 'Calgary',
		city95 = 'Little Rock';
	// Developer Type
		var 
		devType1 = 'frontEnd',
		devType2 = 'fullStack',
		devType3 = 'dataSci',
		devType4 = 'ux',
		devType5 = 'app';
	// Time Commitment
		var
		ft = 'fullTime',
		pt = 'partTime';
	// Class Type
		var
		online = 'online',
		inPerson = 'inPerson',
		hybrid = 'hybrid';
	// Bank Roll
		var 
		sm = 'small',
		md = 'medium',
		lg = 'large';
	// Skill Level
		var
		begin = 'beginner',
		inter = 'intermediate',
		adv   = 'advnaced';
	// Gender
		var 
		m = 'male',
		f = 'female';
	// URL matches to School ID
		var 
		schoolUrl001 = 'https://www.coursereport.com/schools/dev-bootcamp',
		schoolUrl002 = 'https://www.coursereport.com/schools/general-assembly',
		schoolUrl003 = 'https://www.coursereport.com/schools/app-academy#/about',
		schoolUrl004 = 'https://www.coursereport.com/schools/hack-reactor#/about',
		schoolUrl005 = 'https://www.coursereport.com/schools/coding-dojo#/about',
		schoolUrl006 = 'https://www.coursereport.com/schools/launch-academy#/about',
		schoolUrl007 = 'https://www.coursereport.com/schools/rocketu#/about',
		schoolUrl008 = 'https://www.coursereport.com/schools/flatiron-school#/about',
		schoolUrl009 = 'https://www.coursereport.com/schools/hackbright-academy#/about',
		schoolUrl010 = 'https://www.coursereport.com/schools/gschool#/about',
		schoolUrl011 = 'https://www.coursereport.com/schools/starter-league#/about',
		schoolUrl012 = 'https://www.coursereport.com/schools/polycademy#/about',
		schoolUrl013 = 'https://www.coursereport.com/schools/disruption-institute#/about',
		schoolUrl014 = 'https://www.coursereport.com/schools/bitmaker-labs#/about',
		schoolUrl015 = 'https://www.coursereport.com/schools/davinci-coders#/about',
		schoolUrl016 = 'https://www.coursereport.com/schools/refactoru#/about',
		schoolUrl017 = 'https://www.coursereport.com/schools/hacker-school#/about',
		schoolUrl018 = 'https://www.coursereport.com/schools/hackeryou#/about',
		schoolUrl019 = 'https://www.coursereport.com/schools/mobile-makers-academy#/about',
		schoolUrl021 = 'https://www.coursereport.com/schools/tealeaf-academy',
		schoolUrl023 = 'https://www.coursereport.com/schools/10x-org-il#/about',
		schoolUrl024 = 'https://www.coursereport.com/schools/portland-code-school#/about',
		schoolUrl025 = 'https://www.coursereport.com/schools/bloc#/about',
		schoolUrl026 = 'https://www.coursereport.com/schools/startup-institute#/about',
		schoolUrl027 = 'https://www.coursereport.com/schools/code-fellows#/about',
		schoolUrl028 = 'https://www.coursereport.com/schools/nashville-software-school#/about',
		schoolUrl029 = 'https://www.coursereport.com/schools/thinkful#/about',
		schoolUrl030 = 'https://www.coursereport.com/schools/coder-camps#/about',
		schoolUrl031 = 'https://www.coursereport.com/schools/hardcoder-labs#/about',
		schoolUrl032 = 'https://www.coursereport.com/schools/epicodus#/about',
		schoolUrl033 = 'https://www.coursereport.com/schools/sydney-dev-camp#/about',
		schoolUrl034 = 'https://www.coursereport.com/schools/makers-academy#/about',
		schoolUrl035 = 'https://www.coursereport.com/schools/software-craftsmanship-guild#/about',
		schoolUrl036 = 'https://www.coursereport.com/schools/makersquare#/about',
		schoolUrl037 = 'https://www.coursereport.com/schools/craftsmanship-academy#/about',
		schoolUrl038 = 'https://www.coursereport.com/schools/delta-program#/about',
		schoolUrl039 = 'https://www.coursereport.com/schools/fullstack-academy#/about',
		schoolUrl040 = 'https://www.coursereport.com/schools/devpoint-labs#/about',
		schoolUrl041 = 'https://www.coursereport.com/schools/smart-factory#/about',
		schoolUrl042 = 'https://www.coursereport.com/schools/the-iron-yard#/about',
		schoolUrl043 = 'https://www.coursereport.com/schools/jaaga#/about',
		schoolUrl044 = 'https://www.coursereport.com/schools/supacoderz#/about',
		schoolUrl045 = 'https://www.coursereport.com/schools/grand-circus#/about',
		schoolUrl046 = 'https://www.coursereport.com/schools/lighthouse-labs#/about',
		schoolUrl047 = 'https://www.coursereport.com/schools/deep-dive-coders#/about',
		schoolUrl048 = 'https://www.coursereport.com/schools/zipfian-academy#/about',
		schoolUrl049 = 'https://www.coursereport.com/schools/vivo-school-of-technology#/about',
		schoolUrl050 = 'https://www.coursereport.com/schools/codecore-bootcamp#/about',
		schoolUrl052 = 'https://www.coursereport.com/schools/tech-academy-portland#/about',
		schoolUrl053 = 'https://www.coursereport.com/schools/devmountain#/about',
		schoolUrl054 = 'https://www.coursereport.com/schools/coder-factory#/about',
		schoolUrl055 = 'https://www.coursereport.com/schools/codepath#/about',
		schoolUrl056 = 'https://www.coursereport.com/schools/dojo-dev-camp#/about',
		schoolUrl057 = 'https://www.coursereport.com/schools/steer#/about',
		schoolUrl058 = 'https://www.coursereport.com/schools/code-chicago#/about',
		schoolUrl059 = 'https://www.coursereport.com/schools/codeup#/about',
		schoolUrl060 = 'https://www.coursereport.com/schools/ait-learning#/about',
		schoolUrl061 = 'https://www.coursereport.com/schools/ruby-on-the-beach#/about',
		schoolUrl062 = 'https://www.coursereport.com/schools/brainstation#/about',
		schoolUrl063 = 'https://www.coursereport.com/schools/dev-iowa-bootcamp#/about',
		schoolUrl064 = 'https://www.coursereport.com/schools/tech-talent-south',
		schoolUrl065 = 'https://www.coursereport.com/schools/omaha-code-school#/about',
		schoolUrl066 = 'https://www.coursereport.com/schools/coding-house#/about',
		schoolUrl067 = 'https://www.coursereport.com/schools/metis#/about',
		schoolUrl068 = 'https://www.coursereport.com/schools/tradecraft#/about',
		schoolUrl069 = 'https://www.coursereport.com/schools/geekwise-academy#/about',
		schoolUrl070 = 'https://www.coursereport.com/schools/turntotech#/about',
		schoolUrl071 = 'https://www.coursereport.com/schools/anyone-can-learn-to-code#/about',
		schoolUrl072 = 'https://www.coursereport.com/schools/devrubycamp#/about',
		schoolUrl073 = 'https://www.coursereport.com/schools/we-got-coders#/about',
		schoolUrl074 = 'https://www.coursereport.com/schools/dev-champs#/about',
		schoolUrl075 = 'https://www.coursereport.com/schools/sabio-la',
		schoolUrl076 = 'https://www.coursereport.com/schools/seedpaths#/about',
		schoolUrl077 = 'https://www.coursereport.com/schools/designation#/about',
		schoolUrl078 = 'https://www.coursereport.com/schools/new-york-code-design-academy#/about',
		schoolUrl079 = 'https://www.coursereport.com/schools/turing#/about',
		schoolUrl080 = 'https://www.coursereport.com/schools/coder-vox#/about',
		schoolUrl081 = 'https://www.coursereport.com/schools/wyncode#/about',
		schoolUrl082 = 'https://www.coursereport.com/schools/ada#/about',
		schoolUrl083 = 'https://www.coursereport.com/schools/hackership#/about',
		schoolUrl084 = 'https://www.coursereport.com/schools/ironhack#/about',
		schoolUrl085 = 'https://www.coursereport.com/schools/skillcrush#/about',
		schoolUrl086 = 'https://www.coursereport.com/schools/codecamp-charleston#/about',
		schoolUrl087 = 'https://www.coursereport.com/schools/coding-campus#/about',
		schoolUrl088 = 'https://www.coursereport.com/schools/nairobi-dev-school',
		schoolUrl089 = 'https://www.coursereport.com/schools/dev-league#/about',
		schoolUrl090 = 'https://www.coursereport.com/schools/tech-bootcamps#/about',
		schoolUrl091 = 'https://www.coursereport.com/schools/betamore-academy#/about',
		schoolUrl092 = 'https://www.coursereport.com/schools/fire-bootcamp#/about',
		schoolUrl093 = 'https://www.coursereport.com/schools/ikompass#/about',
		schoolUrl094 = 'https://www.coursereport.com/schools/learningfuze#/about',
		schoolUrl095 = 'https://www.coursereport.com/schools/philly-dev-camp#/about',
		schoolUrl096 = 'https://www.coursereport.com/schools/make-school#/about',
		schoolUrl097 = 'https://www.coursereport.com/schools/talentbuddy#/about',
		schoolUrl098 = 'https://www.coursereport.com/schools/dev-academy#/about',
		schoolUrl099 = 'https://www.coursereport.com/schools/the-data-incubator#/about',
		schoolUrl100 = 'https://www.coursereport.com/schools/insight#/about',
		schoolUrl101 = 'https://www.coursereport.com/schools/alchemy-lab#/about',
		schoolUrl102 = 'https://www.coursereport.com/schools/careerfoundry#/about',
		schoolUrl103 = 'https://www.coursereport.com/schools/the-coded#/about',
		schoolUrl104 = 'https://www.coursereport.com/schools/go-live-labs#/about',
		schoolUrl105 = 'https://www.coursereport.com/schools/code-union#/about',
		schoolUrl107 = 'https://www.coursereport.com/schools/coder-cadre#/about',
		schoolUrl108 = 'https://www.coursereport.com/schools/midwest-hacker-school#/about',
		schoolUrl109 = 'https://www.coursereport.com/schools/coder-s-lab#/about',
		schoolUrl110 = 'https://www.coursereport.com/schools/big-nerd-ranch#/about',
		schoolUrl111 = 'https://www.coursereport.com/schools/koru#/about',
		schoolUrl112 = 'https://www.coursereport.com/schools/shillington-school#/about',
		schoolUrl113 = 'https://www.coursereport.com/schools/marcademy#/about',
		schoolUrl114 = 'https://www.coursereport.com/schools/school-of-devs#/about',
		schoolUrl115 = 'https://www.coursereport.com/schools/the-app-academy-nl#/about',
		schoolUrl116 = 'https://www.coursereport.com/schools/hacker-coding-academy#/about',
		schoolUrl117 = 'https://www.coursereport.com/schools/coder-foundry#/about',
		schoolUrl118 = 'https://www.coursereport.com/schools/skaled#/about',
		schoolUrl119 = 'https://www.coursereport.com/schools/angelhack-education#/about',
		schoolUrl120 = 'https://www.coursereport.com/schools/designlab#/about',
		schoolUrl121 = 'https://www.coursereport.com/schools/byte-academy#/about',
		schoolUrl122 = 'https://www.coursereport.com/schools/rockit-bootcamp#/about',
		schoolUrl123 = 'https://www.coursereport.com/schools/happyfuncorp-technology-academy#/about',
		schoolUrl124 = 'https://www.coursereport.com/schools/market-campus#/about',
		schoolUrl125 = 'https://www.coursereport.com/schools/viking-code-school#/about',
		schoolUrl126 = 'https://www.coursereport.com/schools/gr8code#/about',
		schoolUrl127 = 'https://www.coursereport.com/schools/concordia-university-coding-bootcamp#/about',
		schoolUrl128 = 'https://www.coursereport.com/schools/the-firehose-project#/about',
		schoolUrl129 = 'https://www.coursereport.com/schools/stackademy#/about',
		schoolUrl130 = 'https://www.coursereport.com/schools/skill-distillery#/about',
		schoolUrl131 = 'https://www.coursereport.com/schools/codeclub#/about',
		schoolUrl132 = 'https://www.coursereport.com/schools/digital-professional-institute#/about',
		schoolUrl133 = 'https://www.coursereport.com/schools/interface-web-school#/about',
		schoolUrl134 = 'https://www.coursereport.com/schools/eleven-fifty#/about',
		schoolUrl135 = 'https://www.coursereport.com/schools/coderoute#/about',
		schoolUrl136 = 'https://www.coursereport.com/schools/austin-coding-academy#/about',
		schoolUrl137 = 'https://www.coursereport.com/schools/product-school#/about',
		schoolUrl138 = 'https://www.coursereport.com/schools/simplon#/about',
		schoolUrl139 = 'https://www.coursereport.com/schools/the-hacking-school#/about',
		schoolUrl140 = 'https://www.coursereport.com/schools/decodemtl#/about',
		schoolUrl141 = 'https://www.coursereport.com/schools/outlandish-labs#/about',
		schoolUrl142 = 'https://www.coursereport.com/schools/athena-tech-academy#/about',
		schoolUrl143 = 'https://www.coursereport.com/schools/science-to-data-science#/about',
		schoolUrl144 = 'https://www.coursereport.com/schools/square-code-camp#/about',
		schoolUrl145 = 'https://www.coursereport.com/schools/pdx-code-guild#/about',
		schoolUrl146 = 'https://www.coursereport.com/schools/hackership-san-francisco#/about',
		schoolUrl147 = 'https://www.coursereport.com/schools/big-d-code#/about',
		schoolUrl148 = 'https://www.coursereport.com/schools/ward-5-code-camp#/about',
		schoolUrl149 = 'https://www.coursereport.com/schools/bit-bootcamp#/about',
		schoolUrl150 = 'https://www.coursereport.com/schools/nyc-data-science#/about',
		schoolUrl151 = 'https://www.coursereport.com/schools/notch8-learn#/about',
		schoolUrl153 = 'https://www.coursereport.com/schools/le-wagon#/about',
		schoolUrl154 = 'https://www.coursereport.com/schools/base10-academy#/about',
		schoolUrl155 = 'https://www.coursereport.com/schools/gocode#/about',
		schoolUrl156 = 'https://www.coursereport.com/schools/claim-academy#/about',
		schoolUrl157 = 'https://www.coursereport.com/schools/prime-digital-academy#/about',
		schoolUrl158 = 'https://www.coursereport.com/schools/isomer#/about',
		schoolUrl159 = 'https://www.coursereport.com/schools/codecademy-labs#/about',
		schoolUrl160 = 'https://www.coursereport.com/schools/pen-and-paper-coding#/about',
		schoolUrl161 = 'https://www.coursereport.com/schools/academy-x#/about',
		schoolUrl162 = 'https://www.coursereport.com/schools/lumenbrite#/about',
		schoolUrl163 = 'https://www.coursereport.com/schools/founders-coders#/about',
		schoolUrl164 = 'https://www.coursereport.com/schools/we-can-code-it#/about',
		schoolUrl165 = 'https://www.coursereport.com/schools/codestream-labs#/about',
		schoolUrl166 = 'https://www.coursereport.com/schools/data-science-dojo#/about',
		schoolUrl167 = 'https://www.coursereport.com/schools/data-science-for-social-good#/about',
		schoolUrl168 = 'https://www.coursereport.com/schools/microsoft-research-data-science-summer-school#/about',
		schoolUrl169 = 'https://www.coursereport.com/schools/apprentice-io#/about',
		schoolUrl170 = 'https://www.coursereport.com/schools/coded#/about',
		schoolUrl171 = 'https://www.coursereport.com/schools/treehouse#/about',
		schoolUrl172 = 'https://www.coursereport.com/schools/hungry-academy#/about',
		schoolUrl173 = 'https://www.coursereport.com/schools/invasivecode#/about',
		schoolUrl174 = 'https://www.coursereport.com/schools/codify-academy#/about',
		schoolUrl175 = 'https://www.coursereport.com/schools/acadgild#/about',
		schoolUrl176 = 'https://www.coursereport.com/schools/the-institute-for-statistics-education#/about',
		schoolUrl177 = 'https://www.coursereport.com/schools/devcodecamp#/about',
		schoolUrl178 = 'https://www.coursereport.com/schools/moringa-school#/about';
	// Description matched to school ID
		var 
		schoolDesc001 = 'General Assembly puts great emphasis on one-on-one mentorship and values experiential learning over traditional classroom lectures. Graduates of the program will have robust experience in Ruby on Rails, HTML5 & CSS, JavaScript.',
		schoolDesc002 = 'General Assembly, aims to create a global community of individuals empowered to pursue work they love, by offering full-time immersive programs, long-form courses, and classes and workshops on the most relevant skills of the 21st century.',
		schoolDesc003 = 'App Academy is an immersive 12-week web development course with campuses in San Francisco and New York City. App Academy promises to prepare graduates with all the skills they need to begin a career as a professional web developer.',
		schoolDesc004 = 'Hack Reactor is a 12-week software engineering course that promises to teach students how to think like engineers and build production-grade web applications. The program emphasizes project-based learning, hack/pair programming',
		schoolDesc005 = 'Coding Dojo provides an immersive 12-week onsite and online coding bootcamp for aspiring web developers. The Coding Dojo curriculum covers 3 full stacks; also known as software stacks/bundles in 12 weeks.',
		schoolDesc006 = 'Launch Academy aims to create world class software developers through a full-service bootcamp in Boston. After this 10-week, immersive learning experience aspiring software developers will be transformed into contributing members of the development community.',
		schoolDesc007 = 'RocketU offers a 12-week, on-campus developer bootcamp where students will learn advanced HTML & CSS, JavaScript, advanced web technologies, Python, MVC framework, data modeling, product development, communications and self-development.',
		schoolDesc008 = 'The Flatiron School is an intensive, full-time school in New York City for individuals who love to create. Flatiron teaches students to build awesome things with code and prides itself on being a school for passionate people who want to love what they do.',
		schoolDesc009 = 'Hackbright Academy is the engineering fellowship for women and in 10 weeks will take students from beginners to software engineers. This accelerated bootcamp in San Francisco teaches the fundamentals of computer science and modern web development.',
		schoolDesc010 = 'gSchool turns smart and driven beginners into marketable, contributing members of development teams over the course of our 24 week long developer training programs.',
		schoolDesc011 = 'Their program Starter School is a nine-month, in-person grad school for people who want to learn how to build software and start companies. The school focuses on a small class of highly motivated people, hands-on labs, deep-dive workshops, and focused product development.',
		schoolDesc012 = 'Polycademy is an 11-week program in Canberra, Australia that teaches students to envision, build, and deploy web applications. Polycademy teaches students inspiration, teamwork, MVP, intellectual property, solution stack, and prepares students to code.',
		schoolDesc013 = 'Disruption Institute is an intensive 12-week program focused on getting students to build and ship ideas and learn by doing instead of through lectures.',
		schoolDesc014 = 'Bitmaker Labs is an educational experience for the 21st century. Their 9-week programming bootcamp will immerse students in Toronto"s startup ecosystem and expose students to Canada"s technology sector.',
		schoolDesc015 = 'The DaVinci Coders Ruby on Rails training program is a full-immersion 11-week training program designed to teach people with drive and passion the fine art of computer programming.',
		schoolDesc016 = 'RefactorU is a selective, 10-week, hands-on, immersive web application development bootcamp in Boulder, CO. Students will create applications and build a portfolio of projects to share with employers while developing a peer and advisor network for life.',
		schoolDesc017 = 'acker School is a three-month, full-time school in New York for becoming a better programer. Hacker School is free and provides space, structure, time to focus, and a built-in community of smart builders dedicated to self-improvement.',
		schoolDesc018 = 'hackerYou offers Toronto"s best full- and part-time courses for people who want to learn to code. hackerYou is ideal for people looking to climb the corporate ladder, upgrade their skills, or start a new career.',
		schoolDesc019 = 'Mobile Makers is a full-time, 8-week, intensive program in Chicago, IL that will turn beginner students into iOS developers.',
		schoolDesc021 = 'Tealeaf Academy is an online school for developers offering a professional grade curriculum designed to teach students to build production quality apps and become ready for jobs as developers at leading tech companies.',
		schoolDesc023 = 'Leading bootcamp program in Modiin, Israel.',
		schoolDesc024 = 'Portland Code School offers programs for novices and code hobbyists looking to enrich their skillset. Students will learn from experienced programmers and develop the skills necessary to join leading tech companies.',
		schoolDesc025 = 'Bloc is a 12-week online apprenticeship designed to teach students the fundamentals of web development. No experience is required and students can pursue this curriculum anywhere, at any time guided by a personal mentor.',
		schoolDesc026 = 'Startup Institute is the leader in transformational education, helping individuals launch careers in startups that align their passion with their profession.',
		schoolDesc027 = 'Code Fellows offers 8-week intensive development accelerators in Seattle, Wash. and Portland, Ore.',
		schoolDesc028 = 'Their innovative bootcamp program revolves around six months of intensive training and mentoring followed by real project work as an apprentice developer.',
		schoolDesc029 = 'Thinkful is an online school that brings a robust learning community to you. Students will receive ongoing support and personalized feedback as they gain skills online, and the program pairs their structured curriculum with one-on-one mentorship to accelerate your learning.',
		schoolDesc030 = 'Coder Camps camps are 9 weeks long and require great attitudes, drive to learn, and a passion for technology.',
		schoolDesc031 = 'The HardCoder bootcamp is 9 weeks of intensive programming in the heart of Montreal that aims to teach you web development and jumpstart your career.',
		schoolDesc032 = "Epicodus is a four month, forty hour per week, in-person class on&nbsp;programming. Students' learn everything they need to know to get a job as a web developer or build a startup's app.",
		schoolDesc033 = "Sydney Dev Camp teaches students to become confident web developers in a 10-week, in-class, intenstive training program. Students will learn from and be mentored by the industry's top programmers.",
		schoolDesc034 = 'Makers Academy is a highly selective 12 week full-time program (preceded by a four week pre-course) which teaches web development in London.',
		schoolDesc035 = 'Over the course of a 12-week immersive bootcamp in Akron, OH, the Software Craftsmanship Guild takes driven beginners or more experienced students pasisonate about development and prepares them to compete for jobs as professional developers.',
		schoolDesc036 = 'MakerSquare is a 12-week immersive career accelerator program in Austin and San Francisco that aims to turn ambitious beginners looking to learn computer programming into marketable software engineers.',
		schoolDesc037 = 'During skills immersion, students will learn test-driven development of object-oriented programming, web application development using Ruby, Rails, HTML, SASS, JavaScript, SQL, no-SQL, mobile development for iOS, data structures, design patterns, agile software development, and much more.',
		schoolDesc038 = 'The Delta Program is a collection of passionate people looking to change the future of mobile technology. In this online learning community, students will learn to build powerful programs under the guidance of industry experts.',
		schoolDesc039 = 'Fullstack Academy is a an immersive, full-time, 3-month web development course in New York City that strives to prepare students for top development jobs at tech firms and startups.',
		schoolDesc040 = "DevPoint Labs is an 11-week coding and entrepreneur bootcamp in Silicon Slopes, Utah. DevPoint Labs' approach to learning combines pair programming with traditional lectures and a mix of group projects, lean methodologies, hackathons and one on one mentorship from instructors.",
		schoolDesc041 = "Smart Factory is a self-proclaimed software school for smart people. It's a school for designers, engineers, and website owners who want to expand their skillset to meet growing market demands for expertise.",
		schoolDesc042 = 'The Iron Yard Academy teaches intensive, three-month courses that mentor you into a professional junior-level programmer. The program goes far beyond tactical skills and teaches you to think like a software engineer.',
		schoolDesc043 = 'One of the many programs Jaaga hosts is a one-year program that strives to prepare students to become solid software developers trained to build the next generation of web and mobile applications.',
		schoolDesc044 = 'Supacoderz is an extremely competitive, hands-on development training program designed to turn complete novices into web developers ready for every level web development jobs upon the successful completion of the 10-week program.',
		schoolDesc045 = 'Grand Circus is a multi-faceted training institute in Detroit with a mission to elevate the city"s tech community. Grand Circus is the home for learning, co-working, and events in Detroit.',
		schoolDesc046 = 'Lighthouse Labs, is an 8 week developer bootcamp that focuses on the long term success of their graduates. The 8-week programs (iOS and Web Development) include small class sizes, monthly start dates.',
		schoolDesc047 = 'Deep Dive Coders is a 2 1/2-month web programming bootcamp and computer training facility located in downtown Albuquerque, NM.',
		schoolDesc048 = 'Zipfian is an intensive, 12-week program in San Francisco, CA aims to graduate proficient data scientists. The curriculum has been crafted by practicioners in the field and is based on hands-on projects and real-world applications.',
		schoolDesc049 = 'Vivo School of Technology was founded by Brian Knight in Middleburg, FL to fill the glaring need of companies desperate to hire properly-trained entry-level developers.',
		schoolDesc050 = "CodeCore is Western Canada's first developer school. Based in Vancouver, CodeCore Bootcamp recruits the best and brightest applicants and immerses students in an intensive, 8-week developer bootcamp.",
		schoolDesc052 = 'Tech Academy Portland (formerly Prosper IT Academy) is an immersive, self-paced developer bootcamp that focuses on creating well-rounded .NET developers.',
		schoolDesc053 = 'DevMountain offers both after-hours and immersive 12-week coding bootcamp programs in Provo and Salt Lake City, UT where students are trained and mentored by industry experts.',
		schoolDesc054 = 'Coder Factory is an intensive bootcamp located in the heart of Sydney. The programming bootcamp&nbsp;offers a 24 week Fast Track program divided into two sections.',
		schoolDesc055 = 'CodePath is the brainchild of two tech enthusiasts with a passion for teaching, Timothy Lee and Nathan Esquenazi. Their program offers a combination of online courses and in-person workshops.',
		schoolDesc056 = 'Startup Dojo is a 9-week intensive, full-time course based in Provo, UT designed to educate, empower, and employ aspiring web developers.',
		schoolDesc057 = "Steer is devoted to teaching the world to design and code using practical, real-world examples, and they've started in London.",
		schoolDesc058 = "Code Chicago offers a series of 12-week programming courses at Chicago's innovation center. Students will have strong understandings of basic programming syntax and structures as well as have designed, implemented, and deployed functional web and/or mobile applications.",
		schoolDesc059 = 'Founded in 2013, Codeup is a 12-week, in-person web programming bootcamp taught by top instructors at Geekdom in downtown San Antonio, TX.',
		schoolDesc060 = 'AIT Learning is a Washington, DC area based information technology bootcamp company that will turn students from nobodies into coding rockstars.',
		schoolDesc061 = 'Ruby on the Beach focuses on small groups, includes accommodation, and is based in a fabulous tropical study location. ',
		schoolDesc062 = 'BrainStation is a progressive technology school in Toronto that offers education for the next generation of creators. Their innovative platform is designed for individuals of all skill levels.',
		schoolDesc063 = 'Dev/Iowa Bootcamp is a 9-week web development program that focuses on turning you into a professional web developer. ',
		schoolDesc064 = 'Tech Talent South offers full and part-time programs to give students a great foundation in web development.',
		schoolDesc065 = 'Omaha Code School promises to turn students from novices to hireable web developers in 12-weeks through 800 hours of hyper-relevant training, creating a portfolio of 2-4 impressive projects.',
		schoolDesc066 = 'Coding House is a 60 Day Full Immersion Software Development Bootcamp in Silicon Valley designed for rapid retention and comprehension.',
		schoolDesc067 = 'The Metis Data Science Bootcamp is an immersive experience. Students receive intensive, on-site instruction, access to an extensive network of speakers and mentors, and ongoing career coaching and job placement support.',
		schoolDesc068 = 'Tradecraft is a full time, 12-week, in-person immersive training program in San Francisco for people who want to become either a ux designer, growth hacker or sales and business development professional.',
		schoolDesc069 = 'Geekwise Academy is an accelerated training program that wants to create more geeks.  Their six-week programs teach trainees real-world, in-demand technology skills, as defined by specific employers.',
		schoolDesc070 = 'TurnToTech is a 12-week iOS training program based in New York City that aims to produce well-rounded software engineers, not just programmers.',
		schoolDesc071 = 'Anyone Can Learn To Code, based in Chicago, can turn you into a web developer in 12 weeks- and you don&#39;t even have to quit your job.',
		schoolDesc072 = 'Dev Ruby Camp is the first coding bootcamp in Singapore and promises that graduates will gain the competency to be a world-class junior developer, regardless of ambition.',
		schoolDesc073 = 'We Got Coders is a consultancy that recruits, trains and places top web developer talent. The consultancy works with start-ups, agencies and government to deliver consultants specialising in full-stack web development with Ruby.',
		schoolDesc074 = 'DevChamps is a coding academy in Dallas, Texas, working to accelerate students to the next level in their programming careers.',
		schoolDesc075 = 'Sabio sees an imbalance in the current tech landscape, and their mission is to strategically train underrepresented and underemployed individuals to diversify the technology workforce.',
		schoolDesc076 = 'SeedPaths teaches young, low-income adults how to develop software in an intensive, 8-week boot camp and then assists them in securing employment in the IT industry.',
		schoolDesc077 = 'DESIGNATION is a full-time, immersive design course with the primary goal to turn you into a hireable candidate for innovative and tech-focused companies.',
		schoolDesc078 = 'Students in the New York Code + Design Academy Web Development Immersive will learn a full-stack, including HTML5, CSS3, FTP, JavaScript, jQuery, Ruby, Rails, Database Theory, ActiveRecord, Command Line, Git, and Collaborative Software Development.',
		schoolDesc079 = 'Turing is not a bootcamp. It is a seven-month, full-time training program to turn driven students into professional developers.',
		schoolDesc080 = 'Coder Vox aims to give their graduates the skills needed to be proficient and independent coders. Located in Austin, Texas, the school teaches hard technical skills as well as soft skills like problem solving and perspective.',
		schoolDesc081 = 'Wyncode is a bootcamp based in Miami that aims to teach practical and relevant skills to motivated individuals, whether your goal is to get a job or to start your own company.',
		schoolDesc082 = 'Aptly named after the first programmer Ada Lovelace, the Ada Developers Academy is a 27-week program in downtown Seattle. Ada is a not-for-profit software school, exclusively for women. ',
		schoolDesc083 = 'Hackership is a self-directed, 12-week program for advanced developers who want to learn new technologies and sills. Based in Berlin, Germany,',
		schoolDesc084 = 'Ironhack is an immersive bootcamp with locations in Madrid, Barcelona, and Miami, offering intensive 8-week courses in Web Development and Mobile iOS development.',
		schoolDesc085 = 'Skillcrush wants to teach you digital skills to kickstart your career. Choose from their "Blueprints," 12-week online courses in Web Design or Web Development',
		schoolDesc086 = 'CODEcamp offers a series of 4-week evening courses and one-day intensive trainings for those looking to improve their current skills or learn new technologies.',
		schoolDesc087 = "Coding Campus teaches skills to help students change careers, expand their current realm of knowledge, or build products. Coding Campus offers both full and part time courses, as well as remote, online courses for those who can't attend in person",
		schoolDesc088 = 'Nairobi Dev School is a 12-week program that teaches students Ruby on Rails using a project-based curriculum.',
		schoolDesc089 = "Dev League is Hawaii's first web development program, offering full-time and part-time courses to turn students into entry-level web developers.",
		schoolDesc090 = 'Tech Bootcamps offers an 8-week intensive training course teaching the popular CMS-based tool Drupal.',
		schoolDesc091 = "The first school of it's kind in Baltimore, Betamore Academy offers part time classes in Front End and Back End Web Development.",
		schoolDesc092 = 'The founders of Fire Bootcamp created their courses to prepare students for jobs in enterprise. Fire Bootcamp focuses on ASP.NET MVC5, HTML5, CSS, jQuery, JavaScript, Github, and management frameworks like SCRUM.',
		schoolDesc093 = ' iKompass provides short-form trainings in Cloud technology, project management, iOS & Android. Their most intensive course is a 4-week immersive in Web Development.',
		schoolDesc094 = 'LearningFuze is a full immersion 12-week web development training program that aims to bridge the gap between the growing demand for capable developers and the vast shortage in supply.',
		schoolDesc095 = "The 5-week developer bootcamp aims to fuel Philadelphia's tech scene, training college students and recent graduates to be employable junior web developers.",
		schoolDesc096 = 'Make School (formerly MakeGamesWithUs) is a highly selective 2 month full-time program where students will learn to code and ship their first product, an iPhone game!',
		schoolDesc097 = 'The Talentbuddy mentorship programs helps students grow their web development skills with the help of expert software developers.',
		schoolDesc098 = "New Zealand-based Dev Academy has licensed the Dev Bootcamp curriculum, so most of the guiding principles and structure closely resemble Dev Bootcamp's.",
		schoolDesc099 = 'Data Incubator is an intensive six-week bootcamp that takes applicants who have already learned engineering and science skills, and equips them with the final skills to be self-sufficient, productive contributors.',
		schoolDesc100 = 'Insight is an intensive six week post-doctoral training fellowship bridging the gap between academia and data science in Silicon Valley and New York.',
		schoolDesc101 = "The Alchemy Program attracts entrepreneurs and hackers, and while applicants don't need programming experience to attend, they should have a strong desire to code and ability to learn quickly.",
		schoolDesc102 = 'CareerFoundry combines the flexibility of online learning with the proven guidance of mentors, training students to become employable developers in three months.',
		schoolDesc103 = 'codEd is a 3-month web development bootcamp in New York City that aims to foster collaboration around social improvements through app development education.',
		schoolDesc104 = 'Go Live Labs offers UI training to professionals from varying backgrounds. Choose from beginner, intermediate, and advanced training- graduates of the advanced training will complete a project and get help perfecting their resumes.',
		schoolDesc105 = 'Created by former Dev Bootcamp cofounder Jesse Farmer and RubyOnRailsTutor founder John Davidson, Code Union is an online solution to learning new technical skills without quitting your job.',
		schoolDesc107 = 'Coder Cadre is a 9-week bootcamp in Los Angeles that teaches both beginners and those with experience to be confident coders.',
		schoolDesc108 = 'The Midwest Hacker School is a six-month course in Omaha, Nebraska, that aims to help students learn a new career or get ahead in their existing career by working on real projects.',
		schoolDesc109 = "Coder's Lab is an intensive coding bootcamp in Warsaw, Poland. Coder's Lab offers two tracks- a 9-week, full-time program and a 16-weekend, part-time course.",
		schoolDesc110 = 'Big Nerd Ranch is a technical training program with campuses in Georgia and Northern&nbsp;California. Big Nerd Ranch offers corporate training, as well as 5-7 day bootcamps that focus on a variety of topics, including iOS, Ruby, Python, and Android.',
		schoolDesc111 = 'Koru is an immersive, experiential education program in Seattle, San Francisco, and Boston that teaches recent college graduates relevant skills in a real-work setting and helps get them hired at high-growth companies.',
		schoolDesc112 = 'Shillington School is a three-month, full-time Graphic Design school that caters to beginners. Shillington is focused on the entire design process, and instructors take students through the design process from from beginning to end.',
		schoolDesc113 = 'Marcademy is a digital marketing training program for Military Veterans and current members of the Guard or Reserve. Accepted students will learn skills to become an entry-level digital marketer, and will get career support and peer support.',
		schoolDesc114 = 'School of Devs is a 10-week, full-time program set in the PeopleSpace coworking and tech community in Orange County.',
		schoolDesc115 = 'The App Academy NL is a training company in Amsterdam. The school offers full-time iOS and Android coding courses where students learn to develop native mobile apps.',
		schoolDesc116 = 'Hacker Coding Academy is a 12-week, low cost coding school in San Francisco that trains students to be hireable programmers, contractors, or startup employees.',
		schoolDesc117 = 'Coder Foundry is a training program that teaches three-month courses to a variety of skill levels and assists with finding students their dream jobs',
		schoolDesc118 = 'Skaled Startup Sales School is a 4-week, immersive program that teaches startup founders and employees the key foundations of Sales needed to succeed.',
		schoolDesc119 = 'Angelhack Education is a collaboration with One Month Rails, a trusted online learn-to-code program, that combines the efficacy of the One Month Rails curriculum with the support of instructors and classmates.',
		schoolDesc120 = 'Designlab teaches in-demand UX/UI design skills through fun, part-time, online courses. Designlab courses consist primarily of hands-on projects and 1-on-1 mentorship from expert designers',
		schoolDesc121 = 'Byte Academy is a bootcamp in New York that teaches tools to be successful in finance and technology. While students wishing to pursue technology careers in any domain are welcome, Byte Academy emphasizes topics in the financial domain.',
		schoolDesc122 = 'RockIT is an immersive, 12-week web development bootcamp in Phoenix. RockIT teaches beginners skills to become entry level web developers.',
		schoolDesc123 = 'HappyFunCorp Technology Academy is a bootcamp in Brooklyn, NY developed and taught by development shop HappyFunCorp. HFC Academy emphasizes real-world experiences for their students, exposing students to development teams, problems, and solutions.',
		schoolDesc124 = 'Market Campus is a 9-week, part-time digital marketing bootcamp set in Provo, Utah (aka Silicon Slopes). Whether applicants are looking for a digital marketing job or want to market their own websites, Market Campus delivers the skills and knowledge needed to compete in the industry.',
		schoolDesc125 = 'Viking Code School is a 12-week online program that helps serious students become web developers with Ruby on Rails. Classes are limited to 8 carefully selected students who work together throughout the program to solve challenges and build projects. ',
		schoolDesc126 = 'gr8code is a coding school in Tampa, Florida, founded by three successful women who saw a need for affordable coding education. gr8code offers summer programs for kids and a full-time, 9-week front-end engineering school for adults who are ready to change careers',
		schoolDesc127 = 'Concordia University Coding Bootcamp is a collaboration between Concordia University and e-learning company The Learning House. ',
		schoolDesc128 = 'The Firehose Project is an immersive online apprenticeship that aims to help you launch your idea into a real web application. Students will start coding on day one, and will work 1-on-1 with an experienced mentor to build their coding skills. ',
		schoolDesc129 = 'Stackademy offers full-time, intensive, and current courses in web development. Located in Berlin, a fast-growing startup hub in Europe',
		schoolDesc130 = 'Skill Distillery is an intensive 19-week program based in Denver, Colorado. The Java-centric course is divided into four, 4-week sessions called "quads." Students learn fundamentals, foundational technologies, and JavaScript libraries during the quads.',
		schoolDesc131 = 'CodeClub is a software development training program based in Los Angeles, California. CodeClub offers both weekend-only and weekday courses to accommodate varying time commitments.',
		schoolDesc132 = 'Digital Professional Institute is a Chicago-based school that teaches courses in programming, digital marketing and digital media. Digital Professional Institute is committed to teaching concrete skills that can be put to immediate use in your current or future career.',
		schoolDesc133 = 'Interface Web School is a 10-week intensive web development program, where students will learn to build their own web applications and be effective software developers.',
		schoolDesc134 = 'Eleven Fifty is a unique accelerated learning environment where students learn in prolific Indianapolis, Indiana home and are rubbing elbows with techie Scott himself, who has started a dozen+ companies, raised over $250 million in capital, and is responsible for voice-mail, as we know it today.',
		schoolDesc135 = 'Coderoute is a 12 week full-time web developer training course based in London. The course is designed with the explicit purpose of getting students employed.',
		schoolDesc136 = 'Austin Coding Academy is a programming school in Austin, Texas that teaches aspiring developers and entrepreneurs the skills they need to enter the coding world.',
		schoolDesc137 = 'Product School is a 6-week night-program for developers in San Francisco designed to get graduates jobs as Product Managers.',
		schoolDesc138 = 'Simplon is a 6-month training program teaching Ruby on Rails in Romania. Simplon accepts both beginners and experienced programmers, teaching web and mobile applications using the most advanced technologies and programming languages. ',
		schoolDesc139 = "The Hacking School is India's first coding school, a 13-week program that teaches fullstack JavaScript programming. The curriculum places less emphasis on lecture, and students should expect to start coding on Day One.",
		schoolDesc140 = 'DecodeMTL is an 8-week Front-End Web Development program that teaches students to build beautifully crafted and well coded simple websites.',
		schoolDesc141 = 'Outlandish Labs is a software development consultancy in Atlanta, Georgia, that trains students to be professional developers.',
		schoolDesc142 = 'Athena Tech Academy offers a 10-week, full-time course to kickstart a career in big data. Applicants should be junior to intermediate developers who have programming experience in any of the major languages (Java, Python, C, C++) or Computer Science graduates.',
		schoolDesc143 = 'Science to Data Science is a five-week workshop in London that trains analytical PhDs and scientists in the skills needed to be hired into data science roles.',
		schoolDesc144 = 'Code Camp is an annual program hosted by&nbsp;Square to inspire, educate, and empower the next generation of women in technology.',
		schoolDesc145 = 'PDX Code Guild is an immersive training program that teaches students to be&nbsp;<span>Python-based Junior Developers in Portland, Oregon. ',
		schoolDesc146 = 'Hackership is a one-month, part-time program&nbsp;that introduces students to coding in San Francisco. Hackership offers courses in Ruby on Rails, iOS/Swift, and Full-Stack JavaScript, using the One Month Rails and Bit Fountain learning platforms to guide the curriculum.',
		schoolDesc147 = 'Big D Code offers part-time and full-time classes teaching web and mobile development in Dallas, Texas. Utilizing a refined curriculum, a solid employer network, and individualized attention.',
		schoolDesc148 = 'WARD 5 Code Camp is an intensive 12-week, part-time Ruby on Rails training program in Milwauke, Wisconsin. WARD 5 trains beginner-level coders to be entry-level Ruby developers.',
		schoolDesc149 = 'Bit Bootcamp offers part-time and full-time courses to teach the skills needed for a career in data analytics. Applicants should have a&nbsp;background in SQL, and an object oriented programming like Java, C#, or C++, as well as solid math and problem-solving skills.',
		schoolDesc150 = 'NYC Data Science Academy offers a 12-week immersive bootcamp that teaches the key concepts across all areas of data science.',
		schoolDesc151 = 'The LEARN bootcamp is a collaboration between web development consultancy&nbsp;Notch8 and the Epicodus curriculum.',
		schoolDesc153 = 'Le Wagon is a Ruby on Rails focused bootcamp based out of Paris. The offered bootcamps are 9 weeks long. Graduates of Le Wagon will be proficient in Ruby on Rails, JavaScript, APIs, Github, and Heroku.',
		schoolDesc154 = 'Base10 Academy is an immersive 8-week IT administration school. The curriculum targets entry-level positions in the industry.',
		schoolDesc155 = 'GoCode is a travel-focused coding bootcamp specializing in Python based in Costa Rica. The program offers job assistance throughout and scholarships for women and local communities.',
		schoolDesc156 = 'Claim Academy is a new developer bootcamp, the first of its kind in St. Louis. They offer 12-week classes in Java, .NET, and Quality Engineering with a focus on collaboration between students and professional preparation.',
		schoolDesc157 = 'Developed and launched by software development company<span>&nbsp;</span>the Nerdery,&nbsp;Prime Digital Academy seeks to produce homegrown software engineers and web developers.',
		schoolDesc158 = 'Isomer is a 4-month bootcamp focused on full-stack JavaScript in Salt Lake City, Utah. At Isomer, students learn to code as part of a team working on larger, more complex web applications for real-world, non-profit sites.',
		schoolDesc159 = 'Codecademy focuses on lab based education with an emphasis on individual online learning. The lab model allows students the flexibility to work on their own time with weekly guidance from their TAs, combining the best of both.',
		schoolDesc160 = 'Pen and Paper Coding is a New York based introductory coding course. The course is meant to teach the fundamentals of programming, not specific to any single language.',
		schoolDesc161 = 'With branches across California, Academy X offers public enrollment training programs&nbsp;for students looking to learn the basics of web development.',
		schoolDesc162 = 'Lumenbrite specializes in software skills training and consulting for digital media and marketing. The company has established enterprise Adobe Authorized Training Centers in Austin, Houston and Phoenix, but also works with partner locations throughout the United States.',
		schoolDesc163 = 'Founders & Coders is a community of developers and coding academy based in London. As a not-for-profit coding school, all of their funds go back into improving existing programs and helping graduates find employment.',
		schoolDesc164 = 'Founded in 2013, We Can Code IT is based out of Cleveland, Ohio. It is a 3 month fullstack coding bootcamp focusing on JavaScript and related languages&nbsp;using educational methods perfected at MIT.',
		schoolDesc165 = 'Code Stream Labs is a dev shop based out of San Francisco. They offer courses in Full Stack Development, iOS, Android, Ruby, and UX Design.',
		schoolDesc166 = 'Data Science Dojo is a data science bootcamp based out of Seattle, WA and Silicon Valley. The bootcamp is 5 days covering both data science and data engineering.',
		schoolDesc167 = 'The Eric and Wendy Schmidt Data Science for Social Good summer fellowship is a program through the University of Chicago that allows aspiring data scientists to work on real world problems in the fields of education, health, energy, and more.',
		schoolDesc168 = 'Microsoft Research Data Science Summer School, or DS3, is an eight week, intensive summer program meant as an introduction to data science for prospective graduate students in the New York City area.',
		schoolDesc169 = 'The next generation of web designers and developers get their start here. apprentice.io provides designers and developers with a top-notch apprenticeship and connects them with leading employers.',
		schoolDesc170 = 'CODED classes are taught by Marc-Andr&eacute; Cournoyer, creator of Thin - the high performance web server used at Heroku, CloudFoundry, and many other big sites.',
		schoolDesc171 = 'The extensive Treehouse library of step-by-step video courses and training exercises will give you a wide range of competitive, in-demand technology skills that will help you land your next dream job or build your startup idea.',
		schoolDesc172 = "The Hungry Academy is a unique and game changing five-month learning experience. It&#39;s your opportunity to push yourself to the limits. At Hungry Academy you'll",
		schoolDesc173 = "iNVASIVECODE is a team of Senior iOS developers (ex Apple) based in San Francisco. Offering close individualized iOS Developer Training Classes&nbsp;where programmers learn Apple's newest development tools.",
		schoolDesc174 = 'It is a 16 week course, over weekends, featuring a combination of classroom learning and projects that carry over outside of class. Students will collaborate with other students and instructors and build up their personal portfolio over the course of the program.',
		schoolDesc175 = 'AcadGild is an online technology education startup founded by IT professionals and based out of India and California. Their focus is on mentor-based technology education and the completion of projects by students to build up their portfolios.',
		schoolDesc176 = 'The Institute for Statistics Education at Statistics.com is a pioneer in high quality, student-centered online education. They offered their first course in 2002 and now offer over 110 courses and four certificate programs. ',
		schoolDesc177 = "devCodeCamp is Wisconsin's first and only accredited coding school. Based out of Milwaukee, the program is 15 weeks of immersive coding including a 3 week introductory subLevel to establish a fundamental baseline for all students.",
		schoolDesc178 = 'Moringa School is an intensive tech education&nbsp;program based out of Nairobi, Kenya. Moringa School offers courses in mobile and web development as well as a 12 week bootcamp.';

// SCHOOL PROTOTYPES

	// Dev Bootcamp      - school 001
		var school0001_01_1 = new school(
			school001, 
			city01, 
			devType2, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m,
			schoolUrl001,
			schoolDesc001
		);
		var school0001_23_1 = new school(
			school001, 
			city23, 
			devType2, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m,
			schoolUrl001,
			schoolDesc001
		);
		var school0001_32_1 = new school(
			school001, 
			city32, 
			devType2, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m,
			schoolUrl001,
			schoolDesc001
		);
	// Generaly Assembly - school 002
		var school0002_12_1 = new school(
			school002, 
			city12, 
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_12_2 = new school(
			school002, 
			city12, 
			devType4, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_17_1 = new school(
			school002, 
			city17, 
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_17_2 = new school(
			school002, 
			city17, 
			devType4, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_18_1 = new school(
			school002, 
			city18, 
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_18_2 = new school(
			school002, 
			city18, 
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_18_3 = new school(
			school002, 
			city18, 
			devType3, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_18_4 = new school(
			school002, 
			city18, 
			devType4, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_23_1 = new school(
			school002, 
			city23, 
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_23_2 = new school(
			school002, 
			city23, 
			devType4, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_24_1 = new school(
			school002, 
			city24, 
			devType2, 
			pt, 
			online, 
			sm, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_32_1 = new school(
			school002, 
			city32, 
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_33_1 = new school(
			school002, 
			city33, 
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_34_1 = new school(
			school002, 
			city34, 
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_37_1 = new school(
			school002, 
			city37, 
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
		var school0002_43_1 = new school(
			school002, 
			city43, 
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m,
			schoolUrl002,
			schoolDesc002
		);
	// App Academy       - school 003
		var school0003_23_1 = new school(
			school003, 
			city23,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl003,
			schoolDesc003
		);
		var school0003_32_1 = new school(
			school003, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl003,
			schoolDesc003
		);
	// Hack Reactor      - school 004
		var school0004_24_1 = new school(
			school004, 
			city24,
			devType1, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m, 
			schoolUrl004,
			schoolDesc004
		);
		var school0004_32_1 = new school(
			school004, 
			city32,
			devType1, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m, 
			schoolUrl004,
			schoolDesc004
		);	
	// Coding Dojo       - school 005
		var school0005_18_1 = new school(
			school005, 
			city18,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl005,
			schoolDesc005
		);
		var school0005_24_1 = new school(
			school005, 
			city24,
			devType2, 
			pt, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl005,
			schoolDesc005
		);
		var school0005_33_1 = new school(
			school005, 
			city33,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl005,
			schoolDesc005
		);
		var school0005_38_1 = new school(
			school005, 
			city38,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl005,
			schoolDesc005
		);
		var school0005_88_1 = new school(
			school005, 
			city88,
			devType2, 
			pt, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl005,
			schoolDesc005
		);
	// Launch Academy    - school 006
		var school0006_07_1 = new school(
			school006, 
			city07,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m, 
			schoolUrl006,
			schoolDesc006
		);
	// RocketU           - school 007
		var school0007_32_1 = new school(
			school007, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl007,
			schoolDesc007
		);
	// Flatiron School   - school 008
		var school0008_23_1 = new school(
			school008, 
			city23,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl008,
			schoolDesc008
		);
		var school0008_23_2 = new school(
			school008, 
			city23,
			devType5, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl008,
			schoolDesc008
		);
	// Hackbright        - school 009
		var school0009_32_1 = new school(
			school009, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			f, 
			schoolUrl009,
			schoolDesc009
		);
	// gSchool           - school 010
		var school0010_08_1 = new school(
			school010, 
			city08,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl010,
			schoolDesc010
		);
		var school0010_09_1 = new school(
			school010, 
			city09,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl010,
			schoolDesc010
		);
		var school0010_09_2 = new school(
			school010, 
			city09,
			devType3, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl010,
			schoolDesc010
		);
		var school0010_32_1 = new school(
			school010, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl010,
			schoolDesc010
		);
		var school0010_32_2 = new school(
			school010, 
			city32,
			devType3, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl010,
			schoolDesc010
		);
		var school0010_33_1 = new school(
			school010, 
			city33,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl010,
			schoolDesc010
		);
		var school0010_33_2 = new school(
			school010, 
			city33,
			devType3, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl010,
			schoolDesc010
		);
		var school0010_91_1 = new school(
			school010, 
			city91,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl010,
			schoolDesc010
		);
	// Starter League    - school 011
		var school0011_01_1 = new school(
			school011, 
			city01,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl011,
			schoolDesc011
		);
	// Polycademy        - school 012
		var school0012_34_1 = new school(
			school012, 
			city34,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl012,
			schoolDesc012
		);
	// Disruption Inst   - school 013
		var school0013_15_1 = new school(
			school013, 
			city15,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl013,
			schoolDesc013
		);
	// Bitmaker Labs     - school 014
		var school0014_35_1 = new school(
			school014, 
			city35,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl014,
			schoolDesc014
		);
		var school0014_35_2 = new school(
			school014, 
			city35,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl014,
			schoolDesc014
		);
		var school0014_35_3 = new school(
			school014, 
			city35,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl014,
			schoolDesc014
		);
	// DaVinci Coders    - school 015
		var school0015_08_1 = new school(
			school015, 
			city08,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl015,
			schoolDesc015
		);
		var school0015_08_2 = new school(
			school015, 
			city08,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl015,
			schoolDesc015
		);
		var school0015_08_3 = new school(
			school015, 
			city08,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl015,
			schoolDesc015
		);
	// RefactorU         - school 016
		var school0016_08_1 = new school(
			school016, 
			city08,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl016,
			schoolDesc016
		);
		var school0016_08_2 = new school(
			school016, 
			city08,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl016,
			schoolDesc016
		);
		var school0016_08_3 = new school(
			school016, 
			city08,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl016,
			schoolDesc016
		);
		var school0016_24_1 = new school(
			school016, 
			city24,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl016,
			schoolDesc016
		);
		var school0016_24_2 = new school(
			school016, 
			city24,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl016,
			schoolDesc016
		);
	// Recurse(Hacker)Sch- school 017
		var school0017_23_1 = new school(
			school017, 
			city23,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			adv, 
			m, 
			schoolUrl017,
			schoolDesc017
		);
	// hackerYou         - school 018
		var school0018_35_1 = new school(
			school018, 
			city35,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl018,
			schoolDesc018
		);
	// Mobile Makers Acad- school 019
		var school0019_23_1 = new school(
			school019, 
			city23,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl019,
			schoolDesc019
		);
		var school0019_24_1 = new school(
			school019, 
			city24,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl019,
			schoolDesc019
		);
		var school0019_32_1 = new school(
			school019, 
			city32,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl019,
			schoolDesc019
		);
	// Tealeaf Academy   - school 021
		var school0021_24_1 = new school(
			school021, 
			city24,
			devType2, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl021,
			schoolDesc021
		);
		var school0021_24_2 = new school(
			school021, 
			city24,
			devType5, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl021,
			schoolDesc021
		);
	// 10x.org.il        - school 023
		var school0023_20_1 = new school(
			school112, 
			city20,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl023,
			schoolDesc023
		);
	// Portland Code Sch - school 024
		var school0024_26_1 = new school(
			school024, 
			city26,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl024,
			schoolDesc024
		);
		var school0024_26_2 = new school(
			school024, 
			city26,
			devType4, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl024
			,
			schoolDesc024
		);
	// Bloc              - school 025
		var school0025_on_1 = new school(
			school025, 
			city24,
			devType1, 
			ft, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl025,
			schoolDesc025
		);
		var school0025_on_2 = new school(
			school025, 
			city24,
			devType2, 
			ft, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl025,
			schoolDesc025
		);
		var school0025_on_3 = new school(
			school025, 
			city24,
			devType4, 
			ft, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl025,
			schoolDesc025
		);
		var school0025_on_4 = new school(
			school025, 
			city24,
			devType5, 
			ft, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl025,
			schoolDesc025
		);
	// Startup Institue  - school 026
		var school0026_01_1 = new school(
			school026, 
			city01,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_01_2 = new school(
			school026, 
			city01,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_01_3 = new school(
			school026, 
			city01,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_01_4 = new school(
			school026, 
			city01,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_07_1 = new school(
			school026, 
			city07,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_07_2 = new school(
			school026, 
			city07,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_07_3 = new school(
			school026, 
			city07,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_07_4 = new school(
			school026, 
			city07,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_17_1 = new school(
			school026, 
			city17,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_17_2 = new school(
			school026, 
			city17,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_17_3 = new school(
			school026, 
			city17,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_17_4 = new school(
			school026, 
			city17,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_23_1 = new school(
			school026, 
			city23,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_23_2 = new school(
			school026, 
			city23,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_23_3 = new school(
			school026, 
			city23,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
		var school0026_23_4 = new school(
			school026, 
			city23,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl026,
			schoolDesc026
		);
	// Code Fellows      - school 027
		var school0027_01_1 = new school(
			school027, 
			city01,
			devType2, 
			ft, 
			inPerson, 
			md, 
			inter, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_26_1 = new school(
			school027, 
			city26,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_26_2 = new school(
			school027, 
			city26,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_26_3 = new school(
			school027, 
			city26,
			devType2, 
			ft, 
			inPerson, 
			md, 
			inter, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_26_4 = new school(
			school027, 
			city26,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			inter, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_26_5 = new school(
			school027, 
			city26,
			devType5, 
			ft, 
			inPerson, 
			md, 
			inter, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_26_6 = new school(
			school027, 
			city26,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			inter, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_33_1 = new school(
			school027, 
			city26,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_33_2 = new school(
			school027, 
			city26,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_33_3 = new school(
			school027, 
			city26,
			devType2, 
			ft, 
			inPerson, 
			md, 
			inter, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_33_4 = new school(
			school027, 
			city26,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			inter, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_33_5 = new school(
			school027, 
			city26,
			devType5, 
			ft, 
			inPerson, 
			md, 
			inter, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
		var school0027_33_6 = new school(
			school027, 
			city26,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			inter, 
			m, 
			schoolUrl027,
			schoolDesc027
		);
	// Nashville Software- school 028
		var school0028_22_1 = new school(
			school028, 
			city22,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl028,
			schoolDesc028
		);
		var school0028_22_2 = new school(
			school028, 
			city22,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl028,
			schoolDesc028
		);
		var school0028_22_3 = new school(
			school028, 
			city22,
			devType2, 
			pt, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl028,
			schoolDesc028
		);
	// Thinkful          - school 029
		var school0029_24_1 = new school(
			school029, 
			city24,
			devType1, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl029,
			schoolDesc029
		);
		var school0029_24_2 = new school(
			school029, 
			city24,
			devType2, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl029,
			schoolDesc029
		);
		var school0029_24_3 = new school(
			school029, 
			city24,
			devType3, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl029,
			schoolDesc029
		);
		var school0029_24_4 = new school(
			school029, 
			city24,
			devType4, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl029,
			schoolDesc029
		);
		var school0029_24_5 = new school(
			school029, 
			city24,
			devType5, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl029,
			schoolDesc029
		);
	// Coder Camps       - school 030
		var school0030_13_1 = new school(
			school030, 
			city13,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl030,
			schoolDesc030
		);
		var school0030_24_1 = new school(
			school030, 
			city24,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl030,
			schoolDesc030
		);
		var school0030_32_1 = new school(
			school030, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl030,
			schoolDesc030
		);
		var school0030_32_2 = new school(
			school030, 
			city32,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl030,
			schoolDesc030
		);
		var school0030_33_1 = new school(
			school030, 
			city33,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl030,
			schoolDesc030
		);
		var school0030_37_1 = new school(
			school030, 
			city37,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl030,
			schoolDesc030
		);
	// HardCoder Labs    - school 031
		var school0031_26_1 = new school(
			school031, 
			city26,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl031,
			schoolDesc031
		);
	// Epicodus          - school 032
		var school0032_26_1 = new school(
			school032, 
			city26,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl032,
			schoolDesc032
		);
	// Sydney Dev Camp   - school 033
		var school0033_34_1 = new school(
			school033, 
			city34,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl033,
			schoolDesc033
		);
	// Makers Academy    - school 034
		var school0034_17_1 = new school(
			school034, 
			city17,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl034,
			schoolDesc034
		);
		var school0034_24_1 = new school(
			school034, 
			city24,
			devType2, 
			ft, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl034,
			schoolDesc034
		);
	// Software craft    - school 035
		var school0035_02_1 = new school(
			school035, 
			city02,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl035,
			schoolDesc035
		);
	// Maker Square      - school 036
		var school0036_04_1 = new school(
			school036, 
			city04,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl036,
			schoolDesc036
		);
		var school0036_32_1 = new school(
			school036, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl036,
			schoolDesc036
		);
	// Craftsmanship Acad- school 037
		var school0037_28_1 = new school(
			school037, 
			city28,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl037,
			schoolDesc037
		);
	// Delta Program     - school 038
		var school0038_04_1 = new school(
			school038, 
			city04,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl038,
			schoolDesc038
		);
	// Fullstack Academy - school 039
		var school0039_23_1 = new school(
			school039, 
			city23,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl039,
			schoolDesc039
		);
		var school0039_23_2 = new school(
			school039, 
			city23,
			devType2, 
			pt, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl039,
			schoolDesc039
		);
	// DevPoint Labs     - school 040
		var school0040_16_1 = new school(
			school040, 
			city16,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl040,
			schoolDesc040
		);
		var school0040_16_2 = new school(
			school040, 
			city16,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl040,
			schoolDesc040
		);
		var school0040_29_1 = new school(
			school040, 
			city29,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl040,
			schoolDesc040
		);
		var school0040_29_2 = new school(
			school040, 
			city29,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl040,
			schoolDesc040
		);
		var school0040_29_3 = new school(
			school040, 
			city29,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl040,
			schoolDesc040
		);
	// Smart Factory     - school 041
		var school0041_19_1 = new school(
			school041, 
			city19,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			adv, 
			m, 
			schoolUrl041,
			schoolDesc041
		);
	
	// Jaaga             - school 043
		var school0043_05_1 = new school(
			school043, 
			city05,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl043,
			schoolDesc043
		);
	// Supacoderz        - school 044
		var school0044_17_1 = new school(
			school044, 
			city17,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl044,
			schoolDesc044
		); 
	// Grand Circus      - school 045
		var school0045_10_1 = new school(
			school045, 
			city10,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl045,
			schoolDesc045
		);
		var school0045_10_2 = new school(
			school045, 
			city10,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl045,
			schoolDesc045
		);
		var school0045_10_3 = new school(
			school045, 
			city10,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl045,
			schoolDesc045
		);
	// Lighthouse Labs   - school 046
		var school0046_35_1 = new school(
			school046, 
			city35,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl046,
			schoolDesc046
		);
		var school0046_35_2 = new school(
			school046, 
			city35,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl046,
			schoolDesc046
		);
		var school0046_35_3 = new school(
			school046, 
			city35,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl046,
			schoolDesc046
		);
		var school0046_36_1 = new school(
			school046, 
			city36,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl046,
			schoolDesc046
		);
		var school0046_36_2 = new school(
			school046, 
			city36,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl046,
			schoolDesc046
		);
		var school0046_36_3 = new school(
			school046, 
			city36,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl046,
			schoolDesc046
		);
		var school0046_94_1 = new school(
			school046, 
			city94,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl046,
			schoolDesc046
		);
	// Deep Dive Coders  - school 047
		var school0047_03_1 = new school(
			school047, 
			city03,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl047,
			schoolDesc047
		);
	// Zipfian Academy   - school 048
		var school0048_32_1 = new school(
			school048, 
			city32,
			devType3, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m, 
			schoolUrl048,
			schoolDesc048
		);
	// Vivo School of Tec- school 049
		var school0049_14_1 = new school(
			school049, 
			city14,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl049,
			schoolDesc049
		);
	// CodeCore Bootcamp - school 050
		var school0050_36_1 = new school(
			school050, 
			city36,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl050,
			schoolDesc050
		);
		var school0050_36_2 = new school(
			school050, 
			city36,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl050,
			schoolDesc050
		);
	// Tech Academy Port - school 052
		var school0052_26_1 = new school(
			school052, 
			city26,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl052,
			schoolDesc052
		);
	// Dev Mountain      - school 053
		var school0053_27_1 = new school(
			school053, 
			city27,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl053,
			schoolDesc053
		);
		var school0053_27_2 = new school(
			school053, 
			city27,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl053,
			schoolDesc053
		);
		var school0053_27_3 = new school(
			school053, 
			city27,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl053,
			schoolDesc053
		);	
		var school0053_29_1 = new school(
			school053, 
			city29,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl053,
			schoolDesc053
		);
		var school0053_29_2 = new school(
			school053, 
			city29,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl053,
			schoolDesc053
		);	
	// Coder Factory     - school 054
		var school0054_34_1 = new school(
			school054, 
			city34,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl054,
			schoolDesc054
		);
	// DevMountain       - School 055
		var school0055_27_1 = new school(
			school055, 
			city27,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl055,
			schoolDesc055
		);
		var school0055_27_2 = new school(
			school055, 
			city27,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl055,
			schoolDesc055
		);
		var school0055_27_3 = new school(
			school055, 
			city27,
			devType4, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl055,
			schoolDesc055
		);
		var school0055_27_4 = new school(
			school055, 
			city27,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl055,
			schoolDesc055
		);
		var school0055_29_1 = new school(
			school055, 
			city29,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl055,
			schoolDesc055
		);
		var school0055_29_2 = new school(
			school055, 
			city29,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl055,
			schoolDesc055
		);
	// Dojo Dev Camp     - school 056
		var school0056_27_1 = new school(
			school056, 
			city27,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl056,
			schoolDesc056
		);
	// Steer             - school 057
		var school0057_17_1 = new school(
			school057, 
			city17,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl057,
			schoolDesc057
		);
	// Code Chicago      - school 058
		var school0058_01_1 = new school(
			school058, 
			city01,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl058,
			schoolDesc058
		);
		var school0058_01_2 = new school(
			school058, 
			city01,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl058,
			schoolDesc058
		);		
	// Codeup            - school 059
		var school0059_30_1 = new school(
			school059, 
			city30,
			devType1, 
			pt, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl059,
			schoolDesc059
		);	
		var school0059_30_2 = new school(
			school059, 
			city30,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl059,
			schoolDesc059
		);	
	// AIT Learning      - school 060
		var school0060_33_1 = new school(
			school060, 
			city37,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl060,
			schoolDesc060
		);
	// Ruby on the Beach - school 061
		var school0061_35_1 = new school(
			school061, 
			city35,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl061,
			schoolDesc061
		);
	// BrainStation      - school 062
		var school0062_35_1 = new school(
			school062, 
			city35,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl062,
			schoolDesc062
		);
		var school0062_35_2 = new school(
			school062, 
			city35,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl062,
			schoolDesc062
		);
		var school0062_35_3 = new school(
			school062, 
			city35,
			devType4, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl062,
			schoolDesc062
		);
		var school0062_35_4 = new school(
			school062, 
			city35,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl062,
			schoolDesc062
		);
		var school0062_36_1 = new school(
			school062, 
			city36,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl062,
			schoolDesc062
		);
		var school0062_36_2 = new school(
			school062, 
			city36,
			devType4, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl062,
			schoolDesc062
		);
	// Dev/Iowa Bootcamp - school 063
		var school0063_42_1 = new school(
			school063, 
			city42,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl063,
			schoolDesc063
		);
	// Tech talent south - school 064
		var school0064_28_1 = new school(
			school064, 
			city28,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl064,
			schoolDesc064
		);
		var school0064_28_2 = new school(
			school064, 
			city28,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl064,
			schoolDesc064
		);
		var school0064_43_1 = new school(
			school064, 
			city43,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl064,
			schoolDesc064
		);
		var school0064_43_2 = new school(
			school064, 
			city43,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl064,
			schoolDesc064
		);
		var school0064_44_1 = new school(
			school064, 
			city44,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl064,
			schoolDesc064
		);
		var school0064_44_2 = new school(
			school064, 
			city44,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl064,
			schoolDesc064
		);
		var school0064_47_1 = new school(
			school064, 
			city47,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl064,
			schoolDesc064
		);
		var school0064_47_2 = new school(
			school064, 
			city47,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl064,
			schoolDesc064
		);
		var school0064_92_1 = new school(
			school064, 
			city92,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl064,
			schoolDesc064
		);
		var school0064_92_2 = new school(
			school064, 
			city92,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl064,
			schoolDesc064
		);
	// Omaha Code School - school 065
		var school0065_32_1 = new school(
			school065, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl065,
			schoolDesc065
		);	
	// Coding House      - school 066
		var school0066_32_1 = new school(
			school066, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl066,
			schoolDesc066
		);	
		var school0066_32_2 = new school(
			school066, 
			city32,
			devType2, 
			pt, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl066,
			schoolDesc066
		);	
	// Metis             - school 067
		var school0067_23_1 = new school(
			school067, 
			city23,
			devType3, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl067,
			schoolDesc067
		);
	// tradecraft        - school 068
		var school0068_32_1 = new school(
			school068, 
			city32,
			devType4, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl068,
			schoolDesc068
		);
	// Geekwise Academy  - school 069
		var school0069_46_1 = new school(
			school069, 
			city46,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl069,
			schoolDesc069
		);
	// TurntoTech        - school 070
		var school0070_23_1 = new school(
			school070, 
			city23,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl070,
			schoolDesc070
		);
		var school0070_23_2 = new school(
			school070, 
			city23,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl070,
			schoolDesc070
		);
		var school0070_23_3 = new school(
			school070, 
			city23,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl070,
			schoolDesc070
		);
	// Anyone can learn  - school 071
		var school0071_01_1 = new school(
			school071, 
			city01,
			devType2, 
			pt, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl071,
			schoolDesc071
		);
	// DevRubyCamp       - school 072
		var school0072_49_1 = new school(
			school072, 
			city49,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl072,
			schoolDesc072
		);
	// We Got Coders     - school 073
		var school0073_17_1 = new school(
			school073, 
			city17,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl073,
			schoolDesc073
		);
	// Dev Champs        - school 074

	// Sabio             - school 075
		var school0075_18_1 = new school(
			school075, 
			city18,
			devType1, 
			pt, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl075,
			schoolDesc075
		);
	// SeedPaths         - school 076
		var school0076_09_1 = new school(
			school076, 
			city09,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl076,
			schoolDesc076
		);
	// Designation       - school 077
		var school0077_01_1 = new school(
			school077, 
			city01,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl077,
			schoolDesc077
		);
		var school0077_72_1 = new school(
			school077, 
			city72,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl077,
			schoolDesc077
		);
	// NY Code & Design  - school 078
		var school0078_23_1 = new school(
			school078, 
			city23,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl078,
			schoolDesc078
		);
		var school0078_23_2 = new school(
			school078, 
			city23,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl078,
			schoolDesc078
		);
		var school0078_23_3 = new school(
			school078, 
			city23,
			devType4, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl078,
			schoolDesc078
		);
		var school0078_23_4 = new school(
			school078, 
			city23,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl078,
			schoolDesc078
		);
		var school0078_89_1 = new school(
			school078, 
			city89,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl078,
			schoolDesc078
		);
		var school0078_89_2 = new school(
			school078, 
			city89,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl078,
			schoolDesc078
		);
	// Turing            - school 079
		var school0079_09_1 = new school(
			school079, 
			city09,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m, 
			schoolUrl079,
			schoolDesc079
		);
	// Coder Vox         - school 080
		var school0080_04_1 = new school(
			school080, 
			city04,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl080,
			schoolDesc080
		);
	// Wyncode           - school 081
		var school0081_26_1 = new school(
			school081, 
			city50,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl081,
			schoolDesc081
		);
		var school0081_26_2 = new school(
			school081, 
			city50,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl081,
			schoolDesc081
		);
	// Ada               - school 082
		var school0082_33_1 = new school(
			school082, 
			city33,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			f, 
			schoolUrl082,
			schoolDesc082
		);
	// Hackership        - school 083
		var school0083_06_1 = new school(
			school083, 
			city06,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			adv, 
			m, 
			schoolUrl083,
			schoolDesc083
		);
	// Iron Hack         - school 084
		var school0084_50_1 = new school(
			school084, 
			city50,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl084,
			schoolDesc084
		);
		var school0084_51_1 = new school(
			school084, 
			city51,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl084,
			schoolDesc084
		);
		var school0084_51_2 = new school(
			school084, 
			city51,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl084,
			schoolDesc084
		);
		var school0084_52_1 = new school(
			school084, 
			city52,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl084,
			schoolDesc084
		);
		var school0084_52_2 = new school(
			school084, 
			city52,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl084,
			schoolDesc084
		);
	// Skillcrush        - school 085
		var school0085_24_1 = new school(
			school085, 
			city24,
			devType1, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl085,
			schoolDesc085
		);
		var school0085_24_2 = new school(
			school085, 
			city24,
			devType2, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl085,
			schoolDesc085
		);
	// Codecamp Charlest - school 086
		var school0086_47_1 = new school(
			school086, 
			city47,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl086,
			schoolDesc086
		);
		var school0086_47_2 = new school(
			school086, 
			city47,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl086,
			schoolDesc086
		);
		var school0086_47_3 = new school(
			school086, 
			city47,
			devType4, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl086,
			schoolDesc086
		);
		var school0086_47_4 = new school(
			school086, 
			city47,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl086,
			schoolDesc086
		);
	// Coding Campus     - school 087
		var school0087_27_1 = new school(
			school087, 
			city27,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl087,
			schoolDesc087
		);
		var school0087_27_2 = new school(
			school087, 
			city27,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl087,
			schoolDesc087
		);
		var school0087_27_3 = new school(
			school087, 
			city27,
			devType1, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl087,
			schoolDesc087
		);
	// Nairobi Dev School- school 088
		var school0088_54_1 = new school(
			school088, 
			city54,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl088,
			schoolDesc088
		);
	// Dev League        - school 089
		var school0089_55_1 = new school(
			school089, 
			city55,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl089,
			schoolDesc089
		);
	// Tech Bootcamps    - school 090
		var school0090_07_1 = new school(
			school090, 
			city07,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl090,
			schoolDesc090
		);
	// Betamore Academy  - school 091
		var school0091_56_1 = new school(
			school091, 
			city56,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl091,
			schoolDesc091
		);
		var school0091_56_2 = new school(
			school091, 
			city56,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl091,
			schoolDesc091
		);
	// Fire Bootcamp     - school 092
		var school0092_32_1 = new school(
			school092, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			adv, 
			m, 
			schoolUrl092,
			schoolDesc092
		);
		var school0092_34_1 = new school(
			school092, 
			city34,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			adv, 
			m, 
			schoolUrl092,
			schoolDesc092
		);
		var school0092_48_1 = new school(
			school092, 
			city48,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			adv, 
			m, 
			schoolUrl092,
			schoolDesc092
		);
	// iKompass          - school 093
		var school0093_49_1 = new school(
			school093, 
			city49,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl093,
			schoolDesc093
		);
	// LearningFuze      - school 094
		var school0094_67_1 = new school(
			school094, 
			city67,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m, 
			schoolUrl094,
			schoolDesc094
		);
		var school0094_67_2 = new school(
			school094, 
			city67,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl094,
			schoolDesc094
		);
	// Philly Dev Camp   - school 095
		var school0095_89_1 = new school(
			school095, 
			city89,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl095,
			schoolDesc095
		);
	// Make School       - school 096
		var school0096_23_1 = new school(
			school096, 
			city23,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl096,
			schoolDesc096
		);
		var school0096_32_1 = new school(
			school096, 
			city32,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl096,
			schoolDesc096
		);
	// TalentBuddy       - school 097
		var school0097_24_1 = new school(
			school097, 
			city24,
			devType1, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl097,
			schoolDesc097
		);
		var school0097_36_1 = new school(
			school097, 
			city36,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl097,
			schoolDesc097
		);
	// Dev Academy       - school 098
		var school0098_58_1 = new school(
			school098, 
			city58,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl098,
			schoolDesc098
		);
	// The Data Incubator- school 099
		var school0099_23_1 = new school(
			school099, 
			city23,
			devType3, 
			ft, 
			inPerson, 
			sm, 
			adv, 
			m, 
			schoolUrl099,
			schoolDesc099
		);
	// Insight           - school 100
		var school0100_23_1 = new school(
			school100, 
			city23,
			devType3, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl100,
			schoolDesc100
		);
		var school0100_38_1 = new school(
			school100, 
			city38,
			devType3, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl100,
			schoolDesc100
		);
	// Alchemy Lab       - school 101
		var school0101_59_1 = new school(
			school101, 
			city59,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl101,
			schoolDesc101
		);
	// CareerFoundry     - school 102
		var school0102_24_1 = new school(
			school102, 
			city24,
			devType2, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl102,
			schoolDesc102
		);
		var school0102_24_2 = new school(
			school102, 
			city24,
			devType4, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl102,
			schoolDesc102
		);
	// The codED         - school 103
		var school0103_24_1 = new school(
			school103, 
			city24,
			devType5, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl103,
			schoolDesc103
		);
	// Go Live Labs      - school 104
		var school0104_38_1 = new school(
			school104, 
			city38,
			devType2, 
			ft, 
			inPerson, 
			md, 
			adv, 
			m, 
			schoolUrl104,
			schoolDesc104
		);
	// Code Union        - school 105
		var school0105_24_1 = new school(
			school105, 
			city24,
			devType2, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl105,
			schoolDesc105
		);
	// Coder Cadre       - school 107
		var school0107_18_1 = new school(
			school107, 
			city18,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl107,
			schoolDesc107
		);
	// Midwest Hacker sch- school 108
		var school0108_45_1 = new school(
			school108, 
			city45,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl108,
			schoolDesc108
		);
	// Coder's Lab       - school 109
		var school0109_60_1 = new school(
			school109, 
			city60,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl109,
			schoolDesc109
		);
		var school0109_60_2 = new school(
			school109, 
			city60,
			devType2, 
			pt, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl109,
			schoolDesc109
		);
	// Big Nerd Ranch    - school 110
		var school0110_43_1 = new school(
			school110, 
			city80,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl110,
			schoolDesc110
		);
		var school0110_43_2 = new school(
			school110, 
			city80,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl110,
			schoolDesc110
		);
		var school0110_80_1 = new school(
			school110, 
			city80,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl110,
			schoolDesc110
		);
		var school0110_80_2 = new school(
			school110, 
			city80,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl110,
			schoolDesc110
		);
	// Koru              - school 111
		var school0111_07_1 = new school(
			school111, 
			city07,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl111,
			schoolDesc111
		);
		var school0111_32_1 = new school(
			school111, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl111,
			schoolDesc111
		);
		var school0111_33_1 = new school(
			school111, 
			city33,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl111,
			schoolDesc111
		);
	// Shillington Sch   - school 112
		var school0112_23_1 = new school(
			school112, 
			city23,
			devType1, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl112,
			schoolDesc112
		);
	// Marcademy         - school 113
		var school0113_32_1 = new school(
			school113, 
			city32,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			adv, 
			m, 
			schoolUrl113,
			schoolDesc113
		);
	// School of Devs    - school 114
		var school0114_18_1 = new school(
			school114, 
			city18,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl114,
			schoolDesc114
		);
	// The App Acad NL   - school 115
		var school0115_61_1 = new school(
			school115, 
			city61,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl115,
			schoolDesc115
		);
		var school0115_61_2 = new school(
			school115, 
			city61,
			devType5, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl115,
			schoolDesc115
		);
	// Hacker Coding Acd - school 116
		var school0116_32_1 = new school(
			school116, 
			city32,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl116,
			schoolDesc116
		);
		var school0116_32_2 = new school(
			school116, 
			city32,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl116,
			schoolDesc116
		);
		var school0116_32_3 = new school(
			school116, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl116,
			schoolDesc116
		);
		var school0116_32_4 = new school(
			school116, 
			city32,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl116,
			schoolDesc116
		);
	// Coder Foundry     - school 117
		var school0117_87_1 = new school(
			school117, 
			city87,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl117,
			schoolDesc117
		);
		var school0117_87_2 = new school(
			school117, 
			city87,
			devType2, 
			pt, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl117,
			schoolDesc117
		);
	// Skaled            - school 118
		var school0118_23_1 = new school(
			school118, 
			city23,
			devType4, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl118,
			schoolDesc118
		);
	// Angelhack Edu     - school 119
		var school0119_32_1 = new school(
			school119, 
			city32,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl119,
			schoolDesc119
		);
	// Designlab         - school 120
		var school0120_24_1 = new school(
			school120, 
			city24,
			devType4, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl120,
			schoolDesc120
		);
	// Byte Academy      - school 121
		var school0121_23_1 = new school(
			school121, 
			city23,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl121,
			schoolDesc121
		);
	// Rocket Bootcamp   - school 122
		var school0122_17_1 = new school(
			school122, 
			city17,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl122,
			schoolDesc122
		);
		var school0122_59_1 = new school(
			school122, 
			city59,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl122,
			schoolDesc122
		);
	// HappyFunCorp acad - school 123
		var school0123_21_1 = new school(
			school123, 
			city21,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl123,
			schoolDesc123
		);
	// Market Campus     - school 124
		var school0124_27_1 = new school(
			school124, 
			city27,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl124,
			schoolDesc124
		);
	// Viking Code School- school 125
		var school0125_24_1 = new school(
			school125, 
			city24,
			devType2, 
			ft, 
			online, 
			md, 
			begin, 
			m, 
			schoolUrl125,
			schoolDesc125
		);
	// gr8code           - school 126
		var school0126_62_1 = new school(
			school126, 
			city62,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl126,
			schoolDesc126
		);
	// Concordia U Coding- school 127
		var school0127_65_1 = new school(
			school127, 
			city65,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m, 
			schoolUrl127,
			schoolDesc127
		);
	// The Firehouse Proj- school 128
		var school0128_24_1 = new school(
			school128, 
			city24,
			devType2, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl128,
			schoolDesc128
		);
	// Stackademy        - school 129
		var school0129_06_1 = new school(
			school129, 
			city06,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl129,
			schoolDesc129
		);
	// Skill Distillery  - school 130
		var school0130_09_1 = new school(
			school130, 
			city09,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl130,
			schoolDesc130
		);
	// CodeClub          - school 131
		var school0131_18_1 = new school(
			school131, 
			city18,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl131,
			schoolDesc131
		);
		var school0131_18_2 = new school(
			school131, 
			city18,
			devType2, 
			pt, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl131,
			schoolDesc131
		);
	// Digital Prof inst - school 132
		var school0132_01_1 = new school(
			school132, 
			city01,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl132,
			schoolDesc132
		);
		var school0132_01_2 = new school(
			school132, 
			city01,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl132,
			schoolDesc132
		);
	// Interface Web Sch - school 133
		var school0133_45_1 = new school(
			school133, 
			city45,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl133,
			schoolDesc133
		);
		var school0133_45_2 = new school(
			school133, 
			city45,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl133,
			schoolDesc133
		);
	// Eleven-Fifty      - school 134
		var school0134_55_1 = new school(
			school134, 
			city55,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl134,
			schoolDesc134
		);
		var school0134_68_1 = new school(
			school134, 
			city68,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl134,
			schoolDesc134
		);
		var school0134_68_2 = new school(
			school134, 
			city68,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl134,
			schoolDesc134
		);
		var school0134_68_3 = new school(
			school134, 
			city68,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl134,
			schoolDesc134
		);	
	// Coderoute         - school 135
		var school0135_17_1 = new school(
			school135, 
			city17,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl135,
			schoolDesc135
		);
	// Austin Coding Aca - school 136
		var school0136_04_1 = new school(
			school136, 
			city04,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl136,
			schoolDesc136
		);
		var school0136_04_2 = new school(
			school136, 
			city04,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl136,
			schoolDesc136
		);
	// Product School    - school 137
		var school0137_32_1 = new school(
			school137, 
			city32,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			adv, 
			m, 
			schoolUrl137,
			schoolDesc137
		);
	// Simplon           - school 138
		var school0138_74_1 = new school(
			school138, 
			city74,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl138,
			schoolDesc138
		);
	// The Hacking School- school 139
		var school0139_75_1 = new school(
			school139, 
			city75,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl139,
			schoolDesc139
		);
	// DecodeMTL         - school 140
		var school0140_21_1 = new school(
			school140, 
			city21,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl140,
			schoolDesc140
		);
		var school0140_21_2 = new school(
			school140, 
			city21,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl140,
			schoolDesc140
		);
	// Outlandish Labs   - school 141
		var school0141_43_1 = new school(
			school141, 
			city43,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl141,
			schoolDesc141
		);
	// Athena Tech Acad  - school 142
		var school0142_76_1 = new school(
			school142, 
			city76,
			devType3, 
			ft, 
			inPerson, 
			lg, 
			adv, 
			m, 
			schoolUrl142,
			schoolDesc142
		);
	// Science of Data   - school 143
		var school0143_17_1 = new school(
			school143, 
			city17,
			devType3, 
			ft, 
			inPerson, 
			sm, 
			adv, 
			m, 
			schoolUrl143,
			schoolDesc143
		);
	// Square Code Camp  - school 144
		var school0144_32_1 = new school(
			school144, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl144,
			schoolDesc144
		);
	// PDX Code Guild    - school 145
		var school0145_26_1 = new school(
			school145, 
			city26,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl145,
			schoolDesc145
		);
	// Hackership SF     - school 146
		var school0146_32_1 = new school(
			school146, 
			city32,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl146,
			schoolDesc146
		);
		var school0146_32_2 = new school(
			school146, 
			city32,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl146,
			schoolDesc146
		);
	// Ward 5 Code Camp  - school 148
		var school0148_77_1 = new school(
			school148, 
			city77,
			devType2, 
			pt, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl148,
			schoolDesc148
		);
	// Bit Bootcamp      - school 149
		var school0149_78_1 = new school(
			school149, 
			city78,
			devType3, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl149,
			schoolDesc149
		);
	// NYC Data Science  - school 150
		var school0150_23_1 = new school(
			school150, 
			city23,
			devType3, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl150,
			schoolDesc150
		);
	// Notch8 Learn      - school 151
		var school0151_31_1 = new school(
			school151, 
			city31,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl151,
			schoolDesc151
		);
	// Le Wagon          - school 153
		var school0153_81_1 = new school(
			school153, 
			city82,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl153,
			schoolDesc153
		);
		var school0153_82_1 = new school(
			school153, 
			city82,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl153,
			schoolDesc153
		);
	// Base10 Academy    - school 154
		var school0154_84_1 = new school(
			school154, 
			city84,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl154,
			schoolDesc154
		);
	// GoCode            - school 155
		var school0155_62_1 = new school(
			school155, 
			city62,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl155,
			schoolDesc155
		);
	// Claim Academy     - school 156
		var school0156_72_1 = new school(
			school156, 
			city72,
			devType5, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl156,
			schoolDesc156
		);
	// Prime Digital Acad- school 157
		var school0157_19_1 = new school(
			school157, 
			city19,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl157,
			schoolDesc157
		);
	// Isomer       	 - school 158
		var school0158_29_1 = new school(
			school158, 
			city29,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl158,
			schoolDesc158
		);
	// Codecademy Labs   - school 159
		var school0159_23_1 = new school(
			school159, 
			city23,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl159,
			schoolDesc159
		);
		var school0159_50_1 = new school(
			school159, 
			city50,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl159,
			schoolDesc159
		);
	// Pen and Paper code- school 160
		var school0160_23_1 = new school(
			school160, 
			city23,
			devType4, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl160,
			schoolDesc160
		);
	// Academy X         - school 161
		var school0161_32_1 = new school(
			school161, 
			city32,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl161,
			schoolDesc161
		);
	// Lumenbrite        - school 162
		var school0162_04_1 = new school(
			school162, 
			city04,
			devType1, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl162,
			schoolDesc162
		);
	// Founders & Coders - school 163
		var school0163_17_1 = new school(
			school163, 
			city17,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl163,
			schoolDesc163
		);
	// We Can Code IT    - school 164
		var school0164_90_1 = new school(
			school164, 
			city90,
			devType2, 
			ft, 
			inPerson, 
			md, 
			begin, 
			m, 
			schoolUrl164,
			schoolDesc164
		);
	// CodeStream        - school 165
		var school0165_32_1 = new school(
			school165, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl165,
			schoolDesc165
		);
		var school0165_32_2 = new school(
			school165, 
			city32,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl165,
			schoolDesc165
		);
		var school0165_32_3 = new school(
			school165, 
			city32,
			devType4, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl165,
			schoolDesc165
		);
		var school0165_32_4 = new school(
			school165, 
			city32,
			devType4, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl165,
			schoolDesc165
		);
		var school0165_32_5 = new school(
			school165, 
			city32,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl165,
			schoolDesc165
		);
		var school0165_32_6 = new school(
			school165, 
			city32,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl165,
			schoolDesc165
		);
	// Data Science Dojo - school 166
		var school0166_33_1 = new school(
			school166, 
			city33,
			devType3, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl166,
			schoolDesc166
		);
		var school0166_38_1 = new school(
			school166, 
			city38,
			devType3, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl166,
			schoolDesc166
		);
	// Data Sci fo good  - school 167
		var school0167_01_1 = new school(
			school167, 
			city01,
			devType3, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl167,
			schoolDesc167
		);
	// Microsoft Research- school 168
		var school0168_23_1 = new school(
			school168, 
			city23,
			devType3, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl168,
			schoolDesc168
		);
	// Apprentice.io     - school 169
		var school0169_07_1 = new school(
			school169, 
			city07,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl169,
			schoolDesc169
		);
		var school0169_32_1 = new school(
			school169, 
			city32,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl169,
			schoolDesc169
		);
	// Coded             - school 170
		var school0170_24_1 = new school(
			school170, 
			city24,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl170,
			schoolDesc170
		);
	// Treehouse         - school 171
		var school0171_24_1 = new school(
			school171, 
			city24,
			devType1, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl171,
			schoolDesc171
		);
		var school0171_24_2 = new school(
			school171, 
			city24,
			devType2, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl171,
			schoolDesc171
		);
		var school0171_24_3 = new school(
			school171, 
			city24,
			devType5, 
			pt, 
			online, 
			sm, 
			begin, 
			m, 
			schoolUrl171,
			schoolDesc171
		);
	// Hungrey Academy   - school 172
		var school0172_37_1 = new school(
			school172, 
			city37,
			devType2, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl172,
			schoolDesc172
		);
	// Invasivecode      - school 173
		var school0173_32_1 = new school(
			school173, 
			city32,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl173,
			schoolDesc173
		);
		var school0173_51_1 = new school(
			school173, 
			city51,
			devType5, 
			ft, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl173,
			schoolDesc173
		);
	// Codify Academy    - school 174
		var school0174_23_1 = new school(
			school174, 
			city23,
			devType1, 
			pt, 
			hybrid, 
			sm, 
			begin, 
			m, 
			schoolUrl174,
			schoolDesc174
		);
		var school0174_31_1 = new school(
			school174, 
			city31,
			devType1, 
			pt, 
			hybrid, 
			sm, 
			begin, 
			m, 
			schoolUrl174,
			schoolDesc174
		);
		var school0174_32_1 = new school(
			school174, 
			city32,
			devType1, 
			pt, 
			hybrid, 
			sm, 
			begin, 
			m, 
			schoolUrl174,
			schoolDesc174
		);
	// Acadgild          - school 175
		var school0175_24_1 = new school(
			school175, 
			city24,
			devType1, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl175,
			schoolDesc175
		);
		var school0175_24_2 = new school(
			school175, 
			city24,
			devType2, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl175,
			schoolDesc175
		);
		var school0175_24_3 = new school(
			school175, 
			city24,
			devType5, 
			pt, 
			inPerson, 
			sm, 
			begin, 
			m, 
			schoolUrl175,
			schoolDesc175
		);
	// The inst for Stat - school 176
		var school0176_77_1 = new school(
			school176, 
			city77,
			devType3, 
			pt, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl176,
			schoolDesc176
		);
	// devCodeCamp       - school 177
		var school0177_77_1 = new school(
			school177, 
			city77,
			devType2, 
			pt, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl177,
			schoolDesc177
		);
		var school0177_77_2 = new school(
			school177, 
			city77,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl177,
			schoolDesc177
		);
	// Morninga School   - school 178
		var school0178_54_1 = new school(
			school178, 
			city54,
			devType2, 
			ft, 
			inPerson, 
			lg, 
			begin, 
			m, 
			schoolUrl178,
			schoolDesc178
		);
	
	
// schools array - to start with all schools on start of questionnaire 

	var schools = [ 

	// 0 - 49
		school0001_01_1,school0001_23_1,school0001_32_1, 
		school0002_12_1,school0002_12_2,school0002_17_1,school0002_17_2,school0002_18_1,school0002_18_2,school0002_18_3,school0002_18_4,school0002_23_1,school0002_23_2,school0002_24_1,school0002_32_1,school0002_33_1,school0002_34_1,school0002_37_1,school0002_43_1,
		school0003_23_1,school0003_32_1,
		school0004_24_1,school0004_32_1,
		school0005_18_1,school0005_24_1,school0005_33_1,school0005_38_1,school0005_88_1,
		school0006_07_1,
		school0007_32_1,
		school0008_23_1,school0008_23_2,
		school0009_32_1,
		school0010_08_1,school0010_09_1,school0010_09_2,school0010_32_1,school0010_32_2,school0010_33_1,school0010_33_2,school0010_91_1,
		school0011_01_1,
		school0012_34_1,
		school0013_15_1,
		school0014_35_1,school0014_35_2,school0014_35_3,
		school0015_08_1,school0015_08_2,school0015_08_3,
		school0016_08_1,school0016_08_2,school0016_08_3,school0016_24_1,school0016_24_2,
		school0017_23_1,
		school0018_35_1,
		school0019_23_1,school0019_24_1,school0019_32_1,
		// No school 20
		school0021_24_1,school0021_24_2,
		// No School 22
		school0023_20_1,
		school0024_26_1,school0024_26_2,
		school0025_on_1,school0025_on_2,school0025_on_3,school0025_on_4,   
		school0026_01_1,school0026_01_2,school0026_01_3,school0026_01_4,school0026_07_1,school0026_07_2,school0026_07_3,school0026_07_4,school0026_17_1,school0026_17_2,school0026_17_3,school0026_17_4,school0026_23_1,school0026_23_2,school0026_23_3,school0026_23_4,
		school0027_01_1,school0027_26_1,school0027_26_2,school0027_26_3,school0027_26_4,school0027_26_5,school0027_26_6,school0027_33_1,school0027_33_2,school0027_33_3,school0027_33_4,school0027_33_5,school0027_33_6,
		school0028_22_1,school0028_22_2,school0028_22_3,
		school0029_24_1,school0029_24_2,school0029_24_3,school0029_24_4,school0029_24_5,
		school0030_13_1,school0030_24_1,school0030_32_1,school0030_32_2,school0030_33_1,school0030_37_1,
		school0031_26_1,
		school0032_26_1,
		school0033_34_1,
		school0034_17_1,school0034_24_1,
		school0035_02_1,
		school0036_04_1,school0036_32_1,
		school0037_28_1,
		school0038_04_1,
		school0039_23_1,school0039_23_2,
		school0040_16_1,school0040_16_2,school0040_29_1,school0040_29_2,school0040_29_3,
		school0041_19_1,
		//  The Iron Yard
		school0043_05_1,
		school0044_17_1,
		school0045_10_1,school0045_10_2,school0045_10_3,
		school0046_35_1,school0046_35_2,school0046_35_3,school0046_36_1,school0046_36_2,school0046_36_3,school0046_94_1,
		school0047_03_1,
		school0048_32_1,
		school0049_14_1,
	// 50 - 99
		school0050_36_1,school0050_36_2,
		// No School 51
		school0052_26_1,
		school0053_27_1,school0053_27_2,school0053_27_3,school0053_29_1,school0053_29_2,
		school0054_34_1,
		school0055_27_1,school0055_27_2,school0055_27_3,school0055_27_4,school0055_29_1,school0055_29_2,
		school0056_27_1,
		school0057_17_1,
		school0058_01_1,school0058_01_2,
		school0059_30_1,school0059_30_2,
		school0060_33_1,
		school0061_35_1,
		school0062_35_1,school0062_35_2,school0062_35_3,school0062_35_4,school0062_36_1,school0062_36_2,
		school0063_42_1,
		school0064_28_1,school0064_28_2,school0064_43_1,school0064_43_2,school0064_44_1,school0064_44_2,school0064_47_1,school0064_47_2,school0064_92_1,school0064_92_2,
		school0065_32_1,
		school0066_32_1,school0066_32_2,
		school0067_23_1,		
		school0068_32_1,
		school0069_46_1,
		school0070_23_1,school0070_23_2,school0070_23_3,
		school0071_01_1,
		school0072_49_1,
		school0073_17_1,
		// Dev Champs - no info
		school0075_18_1,
		school0076_09_1,
		school0077_01_1,school0077_72_1,
		school0078_23_1,school0078_23_2,school0078_23_3,school0078_23_4,school0078_89_1,school0078_89_2,
		school0079_09_1,
		school0080_04_1,
		school0081_26_1,school0081_26_2,
		school0082_33_1,
		school0083_06_1,
		school0084_50_1,school0084_51_1,school0084_51_2,school0084_52_1,school0084_52_2,
		school0085_24_1,school0085_24_2,
		school0086_47_1,school0086_47_2,school0086_47_3,school0086_47_4,
		school0087_27_1,school0087_27_2,school0087_27_3,
		school0088_54_1,
		school0089_55_1,
		school0090_07_1,
		school0091_56_1,school0091_56_2,
		school0092_32_1,school0092_34_1,school0092_48_1,
		school0093_49_1,
		school0094_67_1,school0094_67_2,
		school0095_89_1,
		school0096_23_1,school0096_32_1,
		school0097_24_1,school0097_36_1,
		school0098_58_1,
		school0099_23_1,
	// 100 - 149
		school0100_23_1,school0100_38_1,
		school0101_59_1,
		school0102_24_1,school0102_24_2,
		school0103_24_1,
		school0104_38_1,
		school0105_24_1,
		// No School 106
		school0107_18_1,
		school0108_45_1,
		school0109_60_1,school0109_60_2,
		school0110_43_1,school0110_43_2,school0110_80_1,school0110_80_2,
		school0111_07_1,school0111_32_1,school0111_33_1,
		school0112_23_1,
		school0113_32_1,
		school0114_18_1,
		school0115_61_1,school0115_61_2,
		school0116_32_1,school0116_32_2,school0116_32_3,school0116_32_4,
		school0117_87_1,school0117_87_2,
		school0118_23_1,
		school0119_32_1,
		school0120_24_1,
		school0121_23_1,
		school0122_17_1,school0122_59_1,
		school0123_21_1,
		school0124_27_1,
		school0125_24_1,
		school0126_62_1,
		school0127_65_1,
		school0128_24_1,
		school0129_06_1,
		school0130_09_1,
		school0131_18_1,school0131_18_2,
		school0132_01_1,school0132_01_2,
		school0133_45_1,school0133_45_2,
		school0134_55_1,school0134_68_1,school0134_68_2,school0134_68_3,
		school0135_17_1,
		school0136_04_1,school0136_04_2,
		school0137_32_1,
		school0138_74_1,
		school0139_75_1,
		school0140_21_1,school0140_21_2,
		school0141_43_1,
		school0142_76_1,
		school0143_17_1,
		school0144_32_1,
		school0145_26_1,
		school0146_32_1,school0146_32_2,
		// Big D Code - No Info
		school0148_77_1,
		school0149_78_1,
	// 150++
		school0150_23_1,
		school0151_31_1,
		// No School 152
		school0153_81_1,school0153_82_1,
		school0154_84_1,
		school0155_62_1,
		school0156_72_1,
		school0157_19_1,
		school0158_29_1,
		school0159_23_1,school0159_50_1,
		school0160_23_1,
		school0161_32_1,
		school0162_04_1,
		school0163_17_1,
		school0164_90_1,
		school0165_32_1,school0165_32_2,school0165_32_3,school0165_32_4,school0165_32_5,school0165_32_6,
		school0166_33_1,school0166_38_1,
		school0167_01_1,
		school0168_23_1,
		school0169_07_1,school0169_32_1,
		school0170_24_1,
		school0171_24_1,school0171_24_2,school0171_24_3,
		school0172_37_1,
		school0173_32_1,school0173_51_1,
		school0174_23_1,school0174_31_1,school0174_32_1,
		school0175_24_1,school0175_24_2,school0175_24_3,
		school0176_77_1,
		school0177_77_1,school0177_77_2,
		school0178_54_1
	];
// use console to track schools
	console.log( schools );






// search through schools objects and remove those that don't match user answers	
	if (schools.length) {
		schools = $.grep(schools, function (school) {
			if (schools.length >= 1) {
				return (     school.city        === entryDate.city 
						&&   school.devType     === entryDate.devType
						&&   school.timeCommit  === entryDate.timeCommit
						&&   school.environment === entryDate.environment
						&&   school.bankroll    === entryDate.bankroll
						// &&   school.codingLevel === entryDate.codingLevel
						// &&   school.gender      === entryDate.gender
				);
			}
	    });
	    console.log(schools);
		// if female && San Francisco add Hackbright
			// if (entryDate.gender == 'female' && entryDate.city == 'San Francisco') {
			// 	schools.unshift(school0009_32_1)
			// 	console.log('Female');
			// };
		// if female && Seattle add ADA
			// if (entryDate.gender == 'female' && entryDate.city == 'Seattle') {
			// 	schools.unshift(school0082_33_1)
			// 	console.log('Female');
			// };
		
	};



	
// add schools to school boxes on results.php
	if (schools.length >= 3) {
		$( "#box0 a" ).attr( "href", schools[0].hrefer );
		$( "#box0 h3" ).text( schools[0].bootcamp );
		$( "#box0 p" ).text( schools[0].descriptions );
		$( "#box1 a" ).attr( "href", schools[1].hrefer );
		$( "#box1 h3" ).text( schools[1].bootcamp );
		$( "#box1 p" ).text( schools[1].descriptions );
		$( "#box2 a" ).attr( "href", schools[2].hrefer );
		$( "#box2 h3" ).text( schools[2].bootcamp );
		$( "#box2 p" ).text( schools[2].descriptions );
	} else if (schools.length === 2) {
		$('#box2').hide();
		$('#box0').addClass('col-md-offset-2');
		$( "#box0 a" ).attr( "href", schools[0].hrefer );
		$( "#box0 h3" ).text( schools[0].bootcamp );
		$( "#box0 p" ).text( schools[0].descriptions );
		$( "#box1 a" ).attr( "href", schools[1].hrefer );
		$( "#box1 h3" ).text( schools[1].bootcamp );
		$( "#box1 p" ).text( schools[1].descriptions );
	} else	if (schools.length === 1) {
		$( '#bootcamps h1' ).text('This Bootcamp would be a great fit');
		$( '#box1, #box2' ).hide();
		$( '#box0' ).addClass('col-md-offset-4');
		$( "#box0 a" ).attr( "href", schools[0].hrefer );
		$( "#box0 h3" ).text( schools[0].bootcamp );
		$( "#box0 p" ).text( schools[0].descriptions );
	} else if (schools.length === 0 ) {
		console.log('sad face');
		$('#bootcamps h1').text('Sorry, there is no school like this for you').append('<br><br><a style="color:#fff; text-transform:uppercase; text-decoration:underline;" href="index.php" class="retry">please try again</a>');
		$('#box0, #box1,#box2').hide();
	}

// connect to firebase
	var fb = new Firebase('https://course-counselor.firebaseio.com/');

// validate email
	function validateEmail(email) { 
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	 } 

// save data firebase on download
    function continueOrNot() {
	    if(validateEmail(document.getElementById('userEmail').value)){	    	
	    	var email = $('#userEmail').val();
            fb.push({
            	email: email, 
            	city: entryDate.city,
            	DeveloperType: entryDate.devType,
            	Time: entryDate.timeCommit,
            	Environment: entryDate.environment,
            	Bankroll: entryDate.bankroll,
            	CodingLevel: entryDate.codingLevel,
            	Gender: entryDate.gender,
            });
            $('#userEmail').val('');
            window.open('DeveloperProToolbox.pdf', '_blank');
            return true;
	    } else{ alert("email not valid"); return false;}
    }



	

	

