<?php include("header.php") ?>

    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <!-- 7 QUESTIONS OF BOOTCAMP GENIE -->
        <div role="tablist" id="tab_wrapper">      
          <!-- Tab panes -->
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="main">
              <!-- Main jumbotron for a primary marketing message or call to action -->
              <section class="main">
                <div class="container">
                  <div class="col-md-8 col-md-offset-2 text-center">
                    <h1>Learn what coding bootcamp is perfect for your future</h1>
                    <h2>7 questions in 3 minutes</h2>
                  </div>
                  <div class="clearfix"></div>
                  <div class="col-md-4 col-md-offset-4">
                    <a href="#one" data-toggle="tab" id="start" class="btn btn-lg btn-block start">Get Started!</a>
                  </div>
                </div>
              </section>
            </div>
            <!-- FIRST QUESTION -->
            <div role="tabpanel" class="tab-pane" id="one">
              <section>
                <!-- RESET & QUESTION COUNTER -->
                <div class="counter">
                  <a href="#main" class="pull-left" data-toggle="tab">Restart</a>
                  <h2 class="pull-right"><span>6</span> left</h2>
                </div>
                <div class="container">
                  <!-- QUESTION 1 -->
                  <h1 class="text-center">What city would you like to learn to code in?</h1>
                  <div class="clearfix"></div>
                  <hr>
                  <div class="row">
                    <form>
                      <div class="col-md-10 col-md-offset-1">                   
                        <!-- QUESTION 1 ANSWERS -->
                        <div class="col-md-4">
                          <a onclick="nyc()" href="#two" data-toggle="tab" class="btn btn-custom btn-lg btn-block">New York City</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="sf()" href="#two" data-toggle="tab" class="btn btn-custom btn-lg btn-block">San Francisco</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="boston()" href="#two" data-toggle="tab" class="btn btn-custom btn-lg btn-block">Boston</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
            <!-- SECOND QUESTION -->
            <div role="tabpanel" class="tab-pane" id="two">
              <section>
                <!-- RESET & QUESTION COUNTER -->
                <div class="counter">
                  <a onclick="restart()" href="#main" class="pull-left" data-toggle="tab">Restart</a>
                  <h2 class="pull-right"><span>5</span> left</h2>
                </div>
                <div class="container">
                  <!-- QUESTION 2 -->
                  <h1 class="text-center">What type of developer do you want to be?</h1>
                  <div class="clearfix"></div>
                  <hr>
                  <div class="row">
                    <form>
                      <div class="col-md-10 col-md-offset-1">                   
                        <!-- QUESTION 2 ANSWERS -->
                        <div class="col-md-4">
                          <a onclick="fed()" href="#three" data-toggle="tab" class="btn btn-custom btn-lg btn-block">Front End Developer</a>
                        </div>
                        <div onclick="bed()" class="col-md-4">
                          <a href="#three" data-toggle="tab" class="btn btn-custom btn-lg btn-block">Back End Developer</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="noDev()" href="#three" data-toggle="tab" class="btn btn-custom btn-lg btn-block">What are you talking about?</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
            <!-- THIRD QUESTION -->
            <div role="tabpanel" class="tab-pane" id="three">
              <section>
                <!-- RESET & QUESTION COUNTER -->
                <div class="counter">
                  <a onclick="restart()" href="#main" class="pull-left" data-toggle="tab">Restart</a>
                  <h2 class="pull-right"><span>4</span> left</h2>
                </div>
                <div class="container">
                  <!-- QUESTION 3 -->
                  <h1 class="text-center">How much time per week can you commit?</h1>
                  <div class="clearfix"></div>
                  <hr>
                  <div class="row">
                    <form>
                      <div class="col-md-10 col-md-offset-1">                   
                        <!-- QUESTION 3 ANSWERS -->
                        <div class="col-md-4">
                          <a onclick="partTime()" href="#four" data-toggle="tab" class="btn btn-custom btn-lg btn-block" title="Part-time">10 - 20 hours</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="fullTime()" href="#four" data-toggle="tab" class="btn btn-custom btn-lg btn-block" title="Full-time">30 - 40 hours</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="noTime()" href="#four" data-toggle="tab" class="btn btn-custom btn-lg btn-block">Undecided</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> 
              </section>
            </div>
            <!-- FORTH QUESTION -->
            <div role="tabpanel" class="tab-pane" id="four">
              <section>
                <!-- RESET & QUESTION COUNTER -->
                <div class="counter">
                  <a onclick="restart()" href="#main" class="pull-left" data-toggle="tab">Restart</a>
                  <h2 class="pull-right"><span>3</span> left</h2>
                </div>
                <div class="container">
                  <!-- QUESTION 4 -->
                  <h1 class="text-center">What type of learning environment do you prefer?</h1>
                  <div class="clearfix"></div>
                  <hr>
                  <div class="row">
                    <form>
                      <div class="col-md-10 col-md-offset-1">                   
                        <!-- QUESTION 4 ANSWERS -->
                        <div class="col-md-4">
                          <a onclick="online()" href="#five" data-toggle="tab" class="btn btn-custom btn-lg btn-block">Online only</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="inPerson()" href="#five" data-toggle="tab" class="btn btn-custom btn-lg btn-block">In-person only</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="hybrid()" href="#five" data-toggle="tab" class="btn btn-custom btn-lg btn-block">Hybrid <br> Online & In-person</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> 
              </section>
            </div>
            <!-- FIFTH QUESTION -->
            <div role="tabpanel" class="tab-pane" id="five">
              <section>
                <!-- RESET & QUESTION COUNTER -->
                <div class="counter">
                  <a onclick="restart()" href="#main" class="pull-left" data-toggle="tab">Restart</a>
                  <h2 class="pull-right"><span>2</span> left</h2>
                </div>
                <div class="container">
                  <!-- QUESTION 5 -->
                  <h1 class="text-center">What is your bankroll for the class?</h1>
                  <div class="clearfix"></div>
                  <hr>
                  <div class="row">
                    <form>
                      <div class="col-md-10 col-md-offset-1">                   
                        <!-- QUESTION 5 ANSWERS -->
                        <div class="col-md-4">
                          <a onclick="smallBank()" href="#six" data-toggle="tab" class="btn btn-custom btn-lg btn-block">$0 - $6000</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="mediumBank()" href="#six" data-toggle="tab" class="btn btn-custom btn-lg btn-block">$6000 - $12000</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="largeBank()" href="#six" data-toggle="tab" class="btn btn-custom btn-lg btn-block">$12000+</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> 
              </section>
            </div>
            <!-- SIXTH QUESTION -->
            <div role="tabpanel" class="tab-pane" id="six">
              <section>
                <!-- RESET & QUESTION COUNTER -->
                <div class="counter">
                  <a onclick="restart()" href="#main" class="pull-left" data-toggle="tab">Restart</a>
                  <h2 class="pull-right"><span>1</span> left</h2>
                </div>
                <div class="container">
                  <!-- QUESTION 6 -->
                  <h1 class="text-center">What is your coding level?</h1>
                  <div class="clearfix"></div>
                  <hr>
                  <div class="row">
                    <form>
                      <div class="col-md-10 col-md-offset-1">                   
                        <!-- QUESTION 6 ANSWERS -->
                        <div class="col-md-4">
                          <a onclick="beginner()" href="#seven" data-toggle="tab" class="btn btn-custom btn-lg btn-block">I never touch the stuff</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="intermediate()" href="#seven" data-toggle="tab" class="btn btn-custom btn-lg btn-block">I can read and write <br> a little HTML & CSS</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="advanced()" href="#seven" data-toggle="tab" class="btn btn-custom btn-lg btn-block">I can build websites <br> and my mom says <br> they are great!</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> 
              </section>
            </div>
            <!-- SEVENth QUESTION -->
            <div role="tabpanel" class="tab-pane" id="seven">
              <section>
                <!-- RESET & QUESTION COUNTER -->
                <div class="counter">
                  <a onclick="restart()" href="#main" class="pull-left" data-toggle="tab">Restart</a>
                  <h2 class="pull-right"><span>0</span> left</h2>
                </div>
                <div class="container">
                  <!-- QUESTION 7 -->
                  <h1 class="text-center">What is your gender?</h1>
                  <div class="clearfix"></div>
                  <hr>
                  <div class="row">
                    <form>
                      <div class="col-md-10 col-md-offset-1">                   
                        <!-- QUESTION 7 ANSWERS -->
                        <div class="col-md-4">
                          <a onclick="male()" href="results.php" class="btn btn-custom btn-lg btn-block">Male</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="female()" href="results.php" class="btn btn-custom btn-lg btn-block">Female</a>
                        </div>
                        <div class="col-md-4">
                          <a onclick="secret()"href="results.php" class="btn btn-custom btn-lg btn-block">I'm not telling</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>  
              </section>
            </div>

            <!-- GREAT EDUCATION QUOTES -->
            <div id="quotes" class="col-md-4 col-md-offset-4">
              <div>"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</div>
            </div>
          </div>
        </div>         

<?php include("footer.php") ?>