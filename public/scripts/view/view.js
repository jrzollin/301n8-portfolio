'use strict';

var app = app || {};

(function(module){
  //adding projects to the DOM
  Project.prototype.displayProject = function(){
    var newTemplate = Handlebars.compile($('#template').text());
    return newTemplate(this);
  };

  module.Project = Project;
});
