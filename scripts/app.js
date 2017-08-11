'use strict';

//projects======================================================================

var projects = [];

//project constructor
function Project(name, image, description, link){
  this.name = name;
  this.image = image;
  this.description = description;
  this.link = link;
  this.addToProjects();
  this.displayProject();
}

//push new project to projects array
Project.prototype.addToProjects = function(){
  projects.push(this);
}

//adding projects to the DOM
Project.prototype.displayProject = function () {
  var $project = $('section.template').clone();
  $project.find('h2').text(this.name);
  $project.find('img').attr('src', this.image);
  $project.find('p').text(this.description);
  $project.removeClass('template');
  $('.projects').append($project);

};

//project variables
var salmonCookies = new Project('Salmon Cookies', 'styles/images/salmon.png', 'This was a school project which involved setting up a cookie store with several locations.  Each store tracked the number of cookies sold and tallied the totals in a table.', 'https://github.com/jrzollin/cookie-stand');

var busMall = new Project('Bus Mall', 'styles/images/vault-tec.png', 'This was a school project which involved setting up a survey where you would click on one of three randomly generated images out of a pool.  The images tracked how many times they were shown and how many times they were clicked.  The results were displayed on a chart.', 'https://github.com/jrzollin/bus-mall');



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
