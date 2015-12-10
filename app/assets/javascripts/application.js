// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Make the showSidebar function into a variable so it can be easily called
var showSidebar = function() {
  $('body').toggleClass("active");
};

// add/remove classes everytime the window resize event fires
$(window).resize(function(){
  var off_canvas_nav_display = $('.off-canvas-navigation').css('display');
  if (off_canvas_nav_display === 'block') {
    $("body").removeClass("active");
  }
});

$(document).ready(function() {
  // Toggle for sidebar
  $('.nav-toggle').on('click', function() {
      // when nav-toggle clicked, nav class is set to open
      $('nav').toggleClass('open-menu');
  });

  // Toggle for submenu
  $('#subtoggle1').on('click', function() {
      if ($('#submenu-2').hasClass('open-submenu')) {
          $('#submenu-2').removeClass('open-submenu');
          $('#submenu-2').addClass('close-submenu');
      }
      // when nav-toggle clicked, nav class is set to open
      if ($('#submenu-1').hasClass('close-submenu')) {
          $('#submenu-1').removeClass('close-submenu');
          $('#submenu-1').addClass('open-submenu');
      } else {
          $('#submenu-1').removeClass('open-submenu');
          $('#submenu-1').addClass('close-submenu');
      }
  });

  $('#subtoggle2').on('click', function() {
      if ($('#submenu-1').hasClass('open-submenu')) {
          $('#submenu-1').removeClass('open-submenu');
          $('#submenu-1').addClass('close-submenu');
      }
      // when nav-toggle clicked, nav class is set to open
      if ($('#submenu-2').hasClass('close-submenu')) {
          $('#submenu-2').removeClass('close-submenu');
          $('#submenu-2').addClass('open-submenu');
      } else {
          $('#submenu-2').removeClass('open-submenu');
          $('#submenu-2').addClass('close-submenu');
      }
  });

  var offset = 220; // back to top will fade in after scrolling 220px down
  var duration = 500; // animation will last 500ms
  $(window).scroll(function() {
      if ($(this).scrollTop() > offset) { 
          // if the amount scrolled down exceeds offset, fades in
          $('.back-to-top').fadeIn(duration);
      } else {
          // if the amount scrolled down doesn't exceed offset, fade out
          $('.back-to-top').fadeOut(duration);
      }
  });
  
  $('.back-to-top').click(function(event) {
      // prevents default click event
      event.preventDefault();
      // uses animate method on body to scroll page back up to top
      $('html, body').animate({scrollTop: 0}, duration);
      // ends function
      return false;
  });
});