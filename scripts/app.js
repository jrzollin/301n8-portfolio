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
}

//push new project to projects array
Project.prototype.addToProjects = function(){
  projects.push(this);
}

//project variables
var salmonCookies = new Project('Salmon Cookies', 'images/salmon.png', '<p>This project involved setting up a cookie store with several locations.  Each store tracked the number of cookies sold and tallied the totals in a table.</p>', 'https://github.com/jrzollin/cookie-stand');

var busMall = new Project('Bus Mall', 'images/vault-tec.png', '<p>This project involved setting up a survey where you would click on one of three randomly generated images out of a pool.  The images tracked how many times they were shown and how many times they were clicked.  The results were displayed on a chart.', 'https://github.com/jrzollin/bus-mall');

//adding projects to the DOM


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

//show about section, checks for and hides any other section showing first
headerFunctions.showAbout = function(){
  $('#menu-about').on('click', function(e){
    e.preventDefault();
    if($('.projects').is(':visible') || $('.contact').is(':visible')){
      $('.projects').fadeOut(500);
      $('.contact').fadeOut(500);
      $('.about-me').delay(500).fadeIn(500);
    } else {
      $('.about-me').fadeIn(500);
    }
  });
}

headerFunctions.showSection = function(){
  $('#nav li').on('click', function(e){
    e.preventDefault();
    var selected = $(this).attr('id');
    $('.tab-content:not(.' + selected + ')').fadeOut(500);
    $('.tab-content').is(':visible') ? $('.' + selected).delay(500).fadeIn(500) : $('.' + selected).fadeIn(500);
  });
}

//show projects section, checks for and hides any other section showing first
headerFunctions.showProjects = function(){
  $('#menu-projects').on('click', function(e){
    e.preventDefault();
    if($('.about-me').is(':visible') || $('.contact').is(':visible')){
      $('.about-me').fadeOut(500);
      $('.contact').fadeOut(500);
      $('.projects').delay(500).fadeIn(500);
    } else {
      $('.projects').fadeIn(500);
    }
  });
}

//show contact section, checks for and hides any other section showing first
headerFunctions.showContact = function(){
  $('#menu-contact').on('click', function(e){
    e.preventDefault();
    if($('.about-me').is(':visible') || $('.projects').is(':visible')){
      $('.about-me').fadeOut(500);
      $('.projects').fadeOut(500);
      $('.contact').delay(500).fadeIn(500);
    } else {
      $('.contact').fadeIn(500);
    }
  });
}

//call header functions
$(document).ready(function(){
  headerFunctions.showHeader();
  headerFunctions.showMenu();
  headerFunctions.hideMenu();
  // headerFunctions.showAbout();
  // headerFunctions.showProjects();
  // headerFunctions.showContact();
  headerFunctions.showSection();
});
