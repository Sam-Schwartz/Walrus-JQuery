$(document).ready(function() {
  $(".click_walrus").click(function() {
    $("#section1-showing").slideToggle();
    $("#section1-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".click_ostrich").click(function() {
    $("#section2-showing").slideToggle();
    $("#section2-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".p-high").click(function() {
    if ($("#pp-high").hasClass("p-highlight")) {
      $("#pp-high").removeClass("p-highlight");
    } else {
      $("#pp-high").addClass("p-highlight");
    }

  });

});

$(document).ready(function() {
  $("button#bg-dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark_bg");
  });

  $("button#bg-light").click(function() {
    $("body").removeClass();
    $("body").addClass("lighter_bg");
  });

  $("button#bg-reset").click(function() {
    $("body").removeClass();
  });
});
