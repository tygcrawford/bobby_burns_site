$(function(){
  $(document).scroll(function(){
    var win_bottom = $(document).scrollTop() + window.innerHeight;
    var movie_bottom = $("#movie_fade_in").position().top + $("#movie_fade_in").height();

    if(win_bottom > movie_bottom){
      $(".mv").each(function(i){
        setTimeout(function(){
          $(".mv").eq(i).addClass("mv_vis");
        }, 200 * (i + 1));
      });
    }

    var text_trans = ($(document).scrollTop() * -1/4);
    $("#overlay_title").css("transform", "translateY(" + text_trans + "px)");

    var des_trans = ($(document).scrollTop() * -1/8);
    $("#sec_1 #description").css("transform", "translateY(" + des_trans + "px)");
  });
});
