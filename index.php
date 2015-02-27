<?php include("header.php") ?>

    <body class="bg1">
        <div id="fakeLoader"></div>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        
        <!-- intro to questionnaire -->
        <section id="main" class="main">
          <div class="container">
            <div class="col-md-10 col-md-offset-1 text-center">
              <h1>Learn what coding bootcamp is perfect for your future</h1>
              <!-- <h2>7 questions in 3 minutes</h2> -->
            </div>
            <div class="clearfix"></div>
            <div class="col-md-4 col-md-offset-4">
              <a id="start" class="btn btn-lg btn-block start">Begin</a>
            </div>
          </div>
        </section>

        <!-- questionnaire -->
        <div class="fs-form-wrap hidden" id="fs-form-wrap">
          <form id="myform" class="fs-form fs-form-full" autocomplete="off">
            <ol class="fs-fields">
              <li>
                <label class="fs-field-label fs-anim-upper" for="q1">What city would you like to begin your journey in?</label>
                <input class="fs-anim-lower" id="q1" name="q1" type="text" placeholder="San Francisco" required/>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q2">What type of developer do you want to be?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input id="q2b" name="q2" type="radio" value="frontEnd"/><label for="q2b" class="radio-conversion">Front End</label></span>
                  <span><input id="q2c" name="q2" type="radio" value="backEnd"/><label for="q2c" class="radio-social">Back End</label></span>
                  <span><input id="q2a" name="q2" type="radio" value="undecided"/><label for="q2a" class="radio-mobile">What are you talking about?</label></span>
                </div>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q3">How much time per week are you willing to commit?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input id="q3b" name="q3" type="radio" value="partTime"/><label for="q3b" class="radio-conversion">0 - 25 hours / week</label></span>
                  <span><input id="q3c" name="q3" type="radio" value="fullTime"/><label for="q3c" class="radio-social">26 - 50 hours / week</label></span>
                  <span><input id="q3a" name="q3" type="radio" value="aboveAndBeyond"/><label for="q3a" class="radio-mobile">51+ hours / week</label></span>
                </div>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q4">What type of learning environment do you prefer?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input id="q4b" name="q4" type="radio" value="online"/><label for="q4b" class="radio-conversion">Online only</label></span>
                  <span><input id="q4c" name="q4" type="radio" value="inPerson"/><label for="q4c" class="radio-social">In person only</label></span>
                  <span><input id="q4a" name="q4" type="radio" value="hybrid"/><label for="q4a" class="radio-mobile">A little bit of both</label></span>
                </div>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q5">What is your bankroll for the class?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input id="q5b" name="q5" type="radio" value="small"/><label for="q5b" class="radio-conversion">$0 - $6000</label></span>
                  <span><input id="q5c" name="q5" type="radio" value="medium"/><label for="q5c" class="radio-social">$6001 - $12000</label></span>
                  <span><input id="q5a" name="q5" type="radio" value="large"/><label for="q5a" class="radio-mobile">$12001+</label></span>
                </div>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q6">What is your coding level?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input id="q6b" name="q6" type="radio" value="beginner"/><label for="q6b" class="radio-conversion">I never touch the stuff</label></span>
                  <span><input id="q6c" name="q6" type="radio" value="intermediate"/><label for="q6c" class="radio-social">I can read and write some HTML &amp; CSS</label></span>
                  <span><input id="q6a" name="q6" type="radio" value="advnaced"/><label for="q6a" class="radio-mobile">I can build websites and my mom says they are great!</label></span>
                </div>
              </li>
              <li data-input-trigger>
                <label class="fs-field-label fs-anim-upper" for="q7">What is your gender?</label>
                <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                  <span><input id="q7b" name="q7" type="radio" value="male"/><label for="q7b" class="radio-conversion">Male</label></span>
                  <span><input id="q7c" name="q7" type="radio" value="female"/><label for="q7c" class="radio-social">Female</label></span>
                  <span><input id="q7a" name="q7" type="radio" value="secret"/><label for="q7a" class="radio-mobile">I'm not telling</label></span>
                </div>
              </li>
            </ol><!-- /fs-fields -->
             <button type="button" class="fs-submit">Send answers</button>
          </form><!-- /fs-form -->
        </div><!-- /fs-form-wrap -->



        <!-- GREAT EDUCATION QUOTES -->
        <div id="quotes" class="col-md-4 col-md-offset-4">
          <div>"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</div>
        </div>     
          

<?php include("footer.php") ?>