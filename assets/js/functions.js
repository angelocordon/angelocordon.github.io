$( document ).ready(function() {
  
  $(".toggle").click(function() {
    $(".intro").removeClass("intro-open");
    $(".intro").addClass("intro-close");
    $(".resume").addClass("resume-open")
  });

  $(".close").click(function() {
      $(".intro").removeClass("intro-close");
      $(".resume").removeClass("resume-open");
      $(".intro").addClass("intro-open");
  });

});
