'use strict';

var app = app || {};

(function(module){
  const aboutController = {};

  aboutController.index = function(){
    $('#nav li').on('click', function(e){
      e.preventDefault();
      var selected = $(this).attr('id');
      $('.tab-content:not(.' + selected + ')').fadeOut(500);
      $('.tab-content').is(':visible') ? $('.' + selected).delay(500).fadeIn(500) : $('.' + selected).fadeIn(500);
    });
  }

  module.aboutController = aboutController;
})(app);
