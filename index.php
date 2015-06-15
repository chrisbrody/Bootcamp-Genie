<?php include("header.php") ?>

    <body class="bg1">
        <div id="fakeLoader"></div>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        
        <!-- intro to questionnaire -->
        <section id="main" class="main">
          <div class="container">
            <div class="col-md-8 col-md-offset-2 text-center">
              <h1>Which coding bootcamp is perfect for you</h1>
              <!-- <h2>7 questions in 3 minutes</h2> -->
            </div>
            <div class="clearfix"></div>
            <div class="col-md-4 col-md-offset-4">
              <a id="start" class="btn btn-lg btn-block start">Find out now!</a>
            </div>
          </div>
        </section>

        <!-- questionnaire -->
        <div class="fs-form-wrap hidden" id="fs-form-wrap">
          <form id="myform" class="fs-form fs-form-full" autocomplete="off">
            <ol class="fs-fields">
              <li>
                <label class="fs-field-label fs-anim-upper" for="q1" multiple="multiple" data-native-menu="false">Start by entering your city</label>
                <input class="fs-anim-lower" id="q1" name="q1" type="text" placeholder="San Francisco" required/>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q2">What type of developer do you want to be?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input required id="q2a" name="q2" type="radio" value="frontEnd"/><label for="q2a" class="radio-front">Front End</label></span>
                  <span><input id="q2b" name="q2" type="radio" value="fullStack"/><label for="q2b" class="radio-fullStack">Full Stack</label></span>
                  <span><input id="q2c" name="q2" type="radio" value="dataSci"/><label for="q2c" class="radio-data">Data Scientist</label></span>
                  <span><input id="q2d" name="q2" type="radio" value="ux"/><label for="q2d" class="radio-ui">UX Designer</label></span>
                  <span><input id="q2e" name="q2" type="radio" value="app"/><label for="q2e" class="radio-app">App Developer</label></span>
                  <!-- <span><input id="q2f" name="q2" type="radio" value="undec"/><label for="q2f" class="radio-mobile">What are you talking about?</label></span> -->
                </div>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q3">What's your time commitment?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input required id="q3b" name="q3" type="radio" value="partTime"/><label for="q3b" class="radio-part">Part Time</label></span>
                  <span><input id="q3c" name="q3" type="radio" value="fullTime"/><label for="q3c" class="radio-full">Full Time</label></span>
                </div>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q4">What learning environment do you want?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">                 
                  <span><input id="q4c" name="q4" type="radio" value="inPerson"/><label for="q4c" class="radio-inPerson">In person</label></span>
                  <span><input id="q4a" name="q4" type="radio" value="hybrid"/><label for="q4a" class="radio-hybrid">Hybrid</label></span>
                   <span><input required id="q4b" name="q4" type="radio" value="online"/><label for="q4b" class="radio-online">Online</label></span>
                </div>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q5">What is your price range?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input required id="q5b" name="q5" type="radio" value="small"/><label for="q5b" class="radio-small">$0 - $6000</label></span>
                  <span><input id="q5c" name="q5" type="radio" value="medium"/><label for="q5c" class="radio-medium">$6001 - $12000</label></span>
                  <span><input id="q5a" name="q5" type="radio" value="large"/><label for="q5a" class="radio-large">$12001+</label></span>
                </div>
              </li>
              <!-- <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q6">What's your Skill Level?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input required id="q6b" name="q6" type="radio" value="beginner"/><label for="q6b" class="radio-beginner">I never touch the stuff</label></span>
                  <span><input id="q6c" name="q6" type="radio" value="intermediate"/><label for="q6c" class="radio-intermediate">I can read and write it</label></span>
                  <span><input id="q6a" name="q6" type="radio" value="advnaced"/><label for="q6a" class="radio-advanced">I have built stuff!</label></span>
                </div>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q7">What is your gender?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input required id="q7a" name="q7" type="radio" value="male"/><label for="q7a" class="radio-male">Male</label></span>
                  <span><input id="q7b" name="q7" type="radio" value="female"/><label for="q7b" class="radio-female">Female</label></span>
                </div>
              </li> -->
            </ol><!-- /fs-fields -->
             <button type="button" class="fs-submit">Review Answers</button>
          </form><!-- /fs-form -->
        </div><!-- /fs-form-wrap -->



        <!-- GREAT EDUCATION QUOTES -->
        <!-- <div id="quotes" class="col-md-8 col-md-offset-2">
          <div id="bxslider">
            <div class="slide">"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</div>
            <div class="slide">"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</div>
          </div>
        </div>      -->
          

<?php include("footer.php") ?>