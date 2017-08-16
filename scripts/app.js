'use strict';

//projects======================================================================

var projects = [];

//project constructor
function Project(rawDataObject){
  this.name = rawDataObject.name;
  this.image = rawDataObject.image;
  this.description = rawDataObject.description;
  this.created = rawDataObject.created;
}

//adding projects to the DOM
Project.prototype.displayProject = function(){
  // var $project = $('section.template').clone();
  // $project.find('h2').text(this.name);
  // $project.find('img').attr('src', this.image);
  // $project.find('p.project-content').text(this.description);
  // $project.find('.time-stamp').text(this.created);
  // $project.removeClass('template');
  // return $project;
  var newTemplate = Handlebars.compile($('#template').text());
  return newTemplate(this);
};

//projects function calls
rawData.sort(function(a,b){
  return (new Date(b.created)) - (new Date(a.created));
});

rawData.forEach(function(project){
  projects.push(new Project(project));
});

projects.forEach(function(project){
  $('.projects').append(project.displayProject());
});

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
    var selected = $(this).attr('id');
    $('.tab-content:not(.' + selected + ')').fadeOut(500);
    $('.tab-content').is(':visible') ? $('.' + selected).delay(500).fadeIn(500) : $('.' + selected).fadeIn(500);
  });
}

//call header functions
$(document).ready(function(){
  headerFunctions.showHeader();
  headerFunctions.showMenu();
  headerFunctions.hideMenu();
  headerFunctions.showSection();
});
