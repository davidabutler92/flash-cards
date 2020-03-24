$(document).ready(function() {
  
  $("button#javascript").click(function() {
    $("#def1").fadeToggle();
    $("#btn1").toggle();
  });
  
  $("#click1").click(function() {
    $("#btn1").fadeToggle();;
    $("#def1").toggle();
  });

  $("button#operators").click(function() {
    $("#btn2").fadeToggle();
    $("#def2").fadeToggle();
  });

  $("button#variables").click(function() {
    $("#btn3").fadeToggle();
    $("#def3").fadeToggle();
  });
  
  $("button#varnc").click(function() {
    $("#btn4").fadeToggle();
    $("def4").fadeToggle()
  });

  $("button#functions").click(function() {
    $("btn5").removeClass();
    $("def5").addClass();
  });
  
  $("button#methods").click(function() {
    $("btn6").removeClass();
    $("def6").addClass()
  });
  
  $("button#arguments").click(function() {
    $("btn7").removeClass();
    $("def7").addClass();
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