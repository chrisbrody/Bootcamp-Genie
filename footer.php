        <!-- JQUERY LIBRARY -->
      <script src="js/vendor/jquery-1.11.0.min.js"></script>
      <!-- BOOTSTRAP JS -->
      <script src="js/vendor/bootstrap.min.js"></script>
      <!-- CUSTOM JS -->
      <script src="js/classie.js"></script>
      <script src="js/selectFx.js"></script>
      <script src="js/fullscreenForm.js"></script>
      <script>
        (function() {
          var formWrap = document.getElementById( 'fs-form-wrap' );

          [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {  
            new SelectFx( el, {
              stickyPlaceholder: false,
              onChange: function(val){
                document.querySelector('span.cs-placeholder').style.backgroundColor = val;
              }
            });
          } );

          new FForm( formWrap, {
            onReview : function() {
              classie.add( document.body, 'overview' ); // for demo purposes only
            }
          } );
        })();
      </script>
      
      <script src="js/main.js"></script>
    </body>
</html>