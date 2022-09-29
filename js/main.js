$(document).ready(function() {
  $("#header").load("./page/header.html");
  $("#main").load("./page/home.html");
  $("#footer").load("./page/footer.html");

  loadCompeteDates();

  // Home
  $("body").on("click", "#a-home, #a-home-logo", function() {
    $("#main").load("./page/home.html");
  }); 
  
   // Welcome
   $("body").on("click", "#a-welcome", function() {
    $("#main").load("./page/welcome.html");
  }); 

   // News
   $("body").on("click", "#a-news", function() {
    $("#main").load("./page/news.html");
  }); 
  
  // Competition Result
  $("body").on("click", "#a-competition-result", function() {
    $("#main").load("./page/competeResult.html", function() {
      // build date links
      if (localStorage.getItem('competedates') === null) {
        loadCompeteDates();
      }
      let dates = localStorage.getItem("competedates").split("\n");
      $.each(dates, function (n, d) {
        let dateLink = '<div class="row">' +
                  '  <div class="col-xs-12">' +
                  '    <a target="_blank" href="./file/competeResult/' + d + '.pdf">' + d + '</a>' +
                  '  </div>' +
                  '</div>';
        $('#div-dates').append(dateLink);
      }); // end $.each
    }); // end $("main").load
  });

  // Past AMC problems and Solutions from AOPS
  // AMC Practice from MAA
  $("body").on("click", "#a-amc", function() {
      $("#main").load("./page/amc.html");
  });

  // load compete result dates and store in localStorage
  function loadCompeteDates()
  {
    $.get('./data/competeDate.txt', function (data) {
      localStorage.setItem("competedates", data);    
    });
  }

});