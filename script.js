$("document").ready(function() {
  $("#cta")
    .delay(1000)
    .fadeIn(1000);

  $(".navbar").hide();

  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() < 100) {
        $(".navbar").fadeIn(400);
      }
      if ($(this).scrollTop() > 0) {
        $(".navbar").fadeIn(400);
      } else {
        $(".navbar").fadeOut();
      }
    });
  });

  $(".nav-item").on("click", function() {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });
  var links = $("a");
  var usefull = document.getElementById("menu").textContent;

  var linkSection = new Vue({
    el: "#links-link",
    data: {
      links: document.getElementById("menu").textContent
    }
  });
  console.log(usefull);
  //   for (var i in usefull) {
  //     console.log("row " + i);
  //     for (var j in usefull[i]) {
  //       console.log(" " + usefull[i][j]);
  //     }
  //   }
});
