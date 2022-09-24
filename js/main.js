if(!location.hash) {
  location.hash = "#home";
}

function getContent(fragmentId, callback){
  var pages = {
    competitionResult: competeResult,
    welcome: welcomeContent,
    news: news,
    home: slide
  };

  callback(pages[fragmentId]);
}



function loadContent(){
  var contentDiv = document.getElementById("main");
  var fragmentId = location.hash.substr(1);

  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });
}

loadContent();

window.addEventListener("hashchange", loadContent);