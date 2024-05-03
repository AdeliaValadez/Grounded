$(document).ready(function() {
    console.log("Script is loaded."); // Check if the script is loaded
  
    // Smooth scrolling for navbar links
    $('.navbar-nav a').click(function(){
      console.log("Navbar link clicked."); // Check if the link is clicked
      var targetSection = this.hash;
      $('html, body').animate({
        scrollTop: $(targetSection).offset().top
      }, 500);
      return false;
    });
  
    // Smooth scrolling for logo
    $('.navbar-brand').click(function(){
      console.log("Navbar brand clicked."); // Check if the logo is clicked
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });

  $(document).ready(function(){
    $('.navbar-toggler').click(function(){
      $('.navbar-collapse').toggleClass('show');
    });
  });