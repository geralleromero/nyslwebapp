$("#tab-bar a").bind('click', function(e) {
  e.preventDefault();
  var nextPage = $(e.target.hash);
  $("#website .current").removeClass("current");
  nextPage.addClass("current"); 
  })

$("#chat a").bind('click', function(e) {
  e.preventDefault();
  var nextPage = $(e.target.parentNode.hash);
  $("#website .current").removeClass("current");
  nextPage.addClass("current"); 
  })




