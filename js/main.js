$(document).ready(function() {
  $("#header").load("page/header.html");
  $("#main").load("page/home.html");
  $("#footer").load("page/footer.html");

  // Home
  $("body").on("click", "#a-home, #a-home-logo", function() {
    $("#main").load("page/home.html");
  }); 
  
   // Welcome Result
   $("body").on("click", "#a-welcome", function() {
    $("#main").load("page/welcome.html");
  }); 

   // Competition Result
   $("body").on("click", "#a-news", function() {
    $("#main").load("page/news.html");
  }); 
  
  // Competition Result
  $("body").on("click", "#a-competition-result", function() {
    $("#main").load("page/competeResult.html");
    // build date links
    $.get('./data/competeDate.txt', function (data) {
      let lines = data.split("\n");
      $.each(lines, function (n, line) {
        let dateLink = '<div class="row">' +
                  '  <div class="col-xs-12">' +
                  '    <a target="_blank" href="./file/competeResult/' + line + '.pdf">' + line + '</a>' +
                  '  </div>' +
                  '</div>';
        $('#div-dates').append(dateLink);
      });
    });
  
  });

  // Past AMC problems and Solutions
  $("body").on("click", "#a-amc", function() {
      $("#main").load("page/amc.html");
    });
});