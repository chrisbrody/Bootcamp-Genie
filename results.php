<?php include("header.php") ?>

    <body onload="results()">
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

		<!-- CTA AND POTENTIAL BOOTCAMP FOR STUDENT -->
        <section id="last_step">
            <!-- RESET & QUESTION COUNTER -->
            <div class="counter">
              <a href="index.php" class="pull-left">Start Over</a>
            </div>
            <div class="container finish">

            	<!-- BOOTCAMPS THAT WILL FIT YOU -->
                <div id="bootcamps">
                    <h1>These Bootcamps would be a great fit</h1>

                    <br>

                    <div class="col-md-4" id="box0">
                        <a href="#" target="_blank">
                            <div class="bootcamp-box border_right">                         
                                <h3></h3>
                                <p></p>
                                <button class="btn">Find Out More</button>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4" id="box1">
                        <a href="#" target="_blank">
                            <div class="bootcamp-box">
                                <h3></h3>
                                <p></p>
                                <button class="btn">Find Out More</button>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4" id="box2">
                        <a href="#" target="_blank">
                            <div class="bootcamp-box border_left">
                                <h3></h3>
                                <p></p>
                                <button class="btn">Find Out More</button>
                            </div>
                        </a>
                    </div>
                </div>

            	<div class="clearfix"></div>

            	<hr>

                <!-- CTA POINTS / EMAIL / SUBMIT BUTTON -->
                <h2 class="text-center">Top 5 things you need to begin Coding</h2>
                <div class="col-md-1 col-md-offset-2">
                    <i class="fa fa-arrow-right fa-4x hidden-xs"></i>
                </div>
                <div class="col-md-6">
                    <form id="emailValidate" method="get">
                        <input type="email" placeholder="youremail@xyz.com" class="form-control" id="userEmail" required>
                        <button id="emailInput" onclick="continueOrNot()">DOWNLOAD NOW</button>
                    </form>
                    <!-- <div id="mc_embed_signup">
                        <form action="//codifyacademy.us8.list-manage.com/subscribe/post?u=cb91841652f1b871590545a01&amp;id=37cffa7bea" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate cta" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                            <label for="mce-EMAIL" class="sr-only">Subscribe to our mailing list</label>
                            <input type="email" value="" name="EMAIL" class="email form-control" id="mce-EMAIL" placeholder="email address" required>
                            <div style="position: absolute; left: -5000px;"><input type="text" name="b_cb91841652f1b871590545a01_37cffa7bea" tabindex="-1" value=""></div>
                            <div class="clear"><input type="submit" value="DOWNLOAD" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                            </div>
                        </form>
                    </div> -->
                </div>
            </div>  
        </section>

<?php include("footer.php") ?>
