$(document).ready(function() {
  
  $("button#javascript").click(function() {
    $("#card1").fadeToggle();
    $("#def1").fadeToggle();
  });
  
  $("button#operators").click(function() {
    $("#card2").fadeToggle();
    $("#def2").fadeToggle();
  });

  $("button#variables").click(function() {
    $("body").removeClass();
    $("body").addClass("card3");
  });
  
  $("button#varnc").click(function() {
    $("body").removeClass();
    $("body").addClass("card3")
  });

  $("button#functions").click(function() {
    $("body").removeClass();
    $("body").addClass("card4");
  });
  
  $("button#methods").click(function() {
    $("body").removeClass();
    $("body").addClass("card5")
  });
  
  $("button#arguments").click(function() {
    $("body").removeClass();
    $("body").addClass("card6");
  });

  $("button#parameters").click(function() {
    $("body").removeClass();
    $("body").addClass("card7")
  });

  $("button#return").click(function() {
    $("body").removeClass();
    $("body").addClass("card8");
  });
  
  $("button#chaining").click(function() {
    $("body").removeClass();
    $("body").addClass("card9")
  });

  $("button#strings").click(function() {
    $("body").removeClass();
    $("body").addClass("card10");
  });
  
  $("button#booleans").click(function() {
    $("body").removeClass();
    $("body").addClass("card11")
  });
  
  $("button#undefined").click(function() {
    $("body").removeClass();
    $("body").addClass("card12");
  });

  $("button#nan").click(function() {
    $("body").removeClass();
    $("body").addClass("card13")
  });

  $("button#escape").click(function() {
    $("body").removeClass();
    $("body").addClass("card14");
  });
  
  $("button#alert").click(function() {
    $("body").removeClass();
    $("body").addClass("card15")
  });

  $("button#comments").click(function() {
    $("body").removeClass();
    $("body").addClass("card16");
  });
  
  $("button#jQuery").click(function() {
    $("body").removeClass();
    $("body").addClass("card17")
  });
  
  $("button#attributes").click(function() {
    $("body").removeClass();
    $("body").addClass("card18");
  });
  
  $("button#attributes").click(function() {
    $("body").removeClass();
    $("body").addClass("card19");
  });
  
});