'use strict';

var app = app || {};

(function(module){
  const aboutController = {};

  aboutController.index = function(){
    // $('#nav li').on('click', function(e){
    //   e.preventDefault();
      // var selected = $(this).attr('id');
      $('.tab-content:not(.about-me)').fadeOut(500);
      $('.tab-content').is(':visible') ? $('.about-me').delay(500).fadeIn(500) : $('.about-me').fadeIn(500);
    // });
  }

  module.aboutController = aboutController;
})(app);
