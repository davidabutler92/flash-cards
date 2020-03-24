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
    $("#def2").fadeToggle();
    $("#btn2").toggle();
  });
  $("#click2").click(function() {
    $("#btn2").fadeToggle();
    $("#def2").toggle();
  });

  $("button#variables").click(function() {
    $("#def3").fadeToggle();
    $("#btn3").toggle();
  });
  $("#click3").click(function() {
    $("#btn3").fadeToggle();
    $("#def3").toggle();
  });

  $("button#varnc").click(function() {
    $("#def4").fadeToggle();
    $("#btn4").toggle();
  });
  $("#click4").click(function() {
    $("#btn4").fadeToggle();
    $("#def4").toggle();
  });

  $("button#functions").click(function() {
    $("#def5").fadeToggle();
    $("#btn5").toggle();
  });
  $("#click5").click(function() {
    $("#btn5").fadeToggle();
    $("#def5").toggle();
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