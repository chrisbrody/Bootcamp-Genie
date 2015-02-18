<?php include("header.php") ?>

    <body class="bg1">
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        
        <!-- intro to questionnaire -->
        <section id="main" class="main">
          <div class="container">
            <div class="col-md-10 col-md-offset-1 text-center">
              <h1>Learn what coding bootcamp is perfect for your future</h1>
              <h2>7 questions in 3 minutes</h2>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-4 col-md-offset-4">
              <a id="start" class="btn btn-lg btn-block start">Get Started!</a>
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
              <li>
                <label class="fs-field-label fs-anim-upper" for="q2">What type of developer do you want to be?</label>
                <input class="fs-anim-lower" id="q2" name="q2" type="text" placeholder="Front End or Backend Developer" required/>
              </li>
              <li>
                <label class="fs-field-label fs-anim-upper" for="q3">How much time per week are you willing to commit?</label>
                <input class="fs-anim-lower" id="q3" name="q3" type="number" placeholder="total hours, per-week you can commit to code" required/>
              </li>
              <li>
                <label class="fs-field-label fs-anim-upper" for="q4">What type of learning environment do you prefer?</label>
                <input class="fs-anim-lower" id="q4" name="q4" type="text" placeholder="Hybrid, online, in-person" required/>
              </li>
              <li>
                <label class="fs-field-label fs-anim-upper" for="q5">What is your bankroll for the class?</label>
                <input class="fs-anim-lower" id="q5" name="q5" type="number" placeholder="$4000" required/>
              </li>
              <li>
                <label class="fs-field-label fs-anim-upper" for="q6">What is your coding level?</label>
                <input class="fs-anim-lower" id="q6" name="q6" type="text" placeholder="Beginner / Intermediate / Advanced" required/>
              </li>
              <li>
                <label class="fs-field-label fs-anim-upper" for="q7">What is your gender?</label>
                <input class="fs-anim-lower" id="q7" name="q7" type="text" placeholder="Male / Female" required/>
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