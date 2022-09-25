$(document).ready(function() {
  $("#header").load("page/header.html");
  $("#main").load("page/home.html");
  $("#footer").load("page/footer.html");

  // Home
  $("body").on("click", "#a-home, #a-home-logo", function() {
  //$("#a-home, #a-home-logo" ).click(function() {
    $("#main").load("page/home.html");
  }); 
  
   // Welcome Result
   $("body").on("click", "#a-welcome", function() {
   //$("#a-welcome").click(function() {
    $("#main").load("page/welcome.html");
  }); 

   // Competition Result
   $("body").on("click", "#a-news", function() {
   //$("#a-news").click(function() {
    $("#main").load("page/news.html");
  }); 
  
  // Competition Result
  $("body").on("click", "#a-competition-result", function() {
  //$("#a-competition-result").click(function() {
    $("#main").load("page/competeResult.html");
  });

  // Past AMC problems and Solutions
  $("body").on("click", "#a-amc", function() {
    //$("#a-competition-result").click(function() {
      $("#main").load("page/amc.html");
    });
});