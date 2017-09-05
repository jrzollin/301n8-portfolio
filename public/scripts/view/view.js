'use strict';

var app = app || {};

(function(module){
  //adding projects to the DOM
  module.Project.prototype.displayProject = function(){
    var newTemplate = Handlebars.compile($('#template').text());
    return newTemplate(this);
  };

})(app);
