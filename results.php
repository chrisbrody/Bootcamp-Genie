<?php include("header.php") ?>

    <body onload="results()">
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

		<!-- CTA AND POTENTIAL BOOTCAMP FOR STUDENT -->
        <section id="last_step">
            <!-- RESET & QUESTION COUNTER -->
            <div class="counter">
              <a href="index.php" class="pull-left">Restart</a>
              <h2 class="pull-right">COMPLETE!</h2>
            </div>
            <div class="container finish">

            	<!-- CTA POINTS / EMAIL / SUBMIT BUTTON -->
                <h1>Call to Action Getting Started Kit</h1>
            	<div class="col-md-1 col-md-offset-1">
                    <i class="fa fa-arrow-right fa-4x"></i>
            	</div>
            	<div class="col-md-8 col-md-offset-1">
	                <form class="cta">
		                <div class="row">
			                <ul>
			                  <li>Point 1</li>
			                  <li>Point 2</li>
			                  <li>Point 3</li>
			                </ul>
		                </div> 
		                <div class="row">
		                  <div class="col-md-5">
		                    <input type="text" class="form-control" placeholder="Email" autofocus>
		                  </div>
		                  <div class="col-md-3" style="margin-top:1%;">
		                    <a href="#" class="finish">Submit</a>
		                  </div>
		                </div>
	                </form>
            	</div>

            	<div class="clearfix"></div>
            	<hr>

            	<!-- BOOTCAMPS THAT WILL FIT YOU -->
            	<div id="bootcamps">
            		<h2>These Bootcamps would be a great fit</h2>
            		<div class="col-md-4 border_right">
            			<a href="#">
            				<h3>Dev Bootcamp</h3>
            				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius.</p>
            			</a>
            		</div>
            		<div class="col-md-4">
            			<a href="#">
            				<h3>The Start-up Institue</h3>
            				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius.</p>
            			</a>
            		</div>
            		<div class="col-md-4 border_left">
            			<a href="#">
            				<h3>Codify Academy</h3>
            				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius.</p>
            			</a>
            		</div>
            	</div>
            </div>  
        </section>

<?php include("footer.php") ?>
