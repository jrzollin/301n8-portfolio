'use sctrict';

var app = app || {};

(function(module){
  //header functions==============================================================
  var headerFunctions = {};

  //delay header showing until tree gif finishes
  headerFunctions.showHeader = function(){
    $('#header').delay(2000).fadeIn(1000);
  }

  //toggle nav menu to show
  headerFunctions.showMenu = function(){
    $('#nav').on('click', '.show-menu', function(e){
      e.preventDefault();
      $('ul').fadeIn();
      $('.show-menu').text('Hide Menu').attr('class', 'hide-menu');
    });
  }

  //toggle nav menu to hide
  headerFunctions.hideMenu = function(){
    $('#nav').on('click', '.hide-menu' ,function(e){
      e.preventDefault();
      $('ul').fadeOut();
      $('.hide-menu').text('Show Menu').attr('class', 'show-menu');
    });
  }

  //show each section, checks for and removes previously displayed section
  headerFunctions.showSection = function(){
    $('#nav li').on('click', function(e){
      e.preventDefault();
      // var selected = $(this).attr('id');
      // $('.tab-content:not(.' + selected + ')').fadeOut(500);
      // $('.tab-content').is(':visible') ? $('.' + selected).delay(500).fadeIn(500) : $('.' + selected).fadeIn(500);
    });
  }

  const aboutController = {};

  aboutController.index = function(){
    $('.tab-content:not(.about-me)').fadeOut(500);
    $('.tab-content').is(':visible') ? $('.about-me').delay(500).fadeIn(500) : $('.about-me').fadeIn(500);
  }

  const projectsController = {};

  projectsController.index = function(){
    $('.tab-content:not(.projects)').fadeOut(500);
    $('.tab-content').is(':visible') ? $('.projects').delay(500).fadeIn(500) : $('.projects').fadeIn(500);
  }

  const contactController = {};

  contactController.index = function(){
    $('.tab-content:not(.contact)').fadeOut(500);
    $('.tab-content').is(':visible') ? $('.contact').delay(500).fadeIn(500) : $('.contact').fadeIn(500);
  }

  //call header functions
  $(document).ready(function(){
    headerFunctions.showHeader();
    headerFunctions.showMenu();
    headerFunctions.hideMenu();
    // headerFunctions.showSection();
  });

  module.headerFunctions = headerFunctions;
  module.aboutController = aboutController;
  module.projectsController = projectsController;
  module.contactController = contactController;
})(app);
