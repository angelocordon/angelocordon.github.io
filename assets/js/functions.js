$( document ).ready(function() {

  $(".toggle").click(function() {
    $(".intro").removeClass("intro-open");
    $(".intro").addClass("intro-close");
  });

  $(".close").click(function() {
      $(".intro").removeClass("intro-close");
      $(".intro").addClass("intro-open");
  });

});
