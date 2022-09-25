$( document ).ready(function() {
  $( "#main" ).load( "page/home.html" );
  $( "#footer" ).load( "page/footer.html" );

  // Home
  $( "#a-home, #a-home-logo" ).click(function() {
    $( "#main" ).load( "page/home.html" );
  }); 
  
   // Welcome Result
   $( "#a-welcome" ).click(function() {
    $( "#main" ).load( "page/welcome.html" );
  }); 

   // Competition Result
   $( "#a-news" ).click(function() {
    $( "#main" ).load( "page/news.html" );
  }); 
  
  // Competition Result
  $( "#a-competition-result" ).click(function() {
    $( "#main" ).load( "page/competeResult.html" );
  });

});