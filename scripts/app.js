'use strict';

var projects = [];

function Project(name, image, description){
  this.name = name;
  this.image = image;
  this.description = description;
  this.addToProjects();
}

Project.prototype.addToProjects = function(){
  projects.push(this);
}

var headerFunctions = {};

headerFunctions.showHeader = function(){
  $('#header').delay(2000).fadeIn(1000);
}

headerFunctions.showMenu = function(){
  $('#nav').on('click', '.show-menu', function(e){
    e.preventDefault();
    $('ul').fadeIn();
    $('.show-menu').text('Hide Menu').attr('class', 'hide-menu');
  });
}

headerFunctions.hideMenu = function(){
  $('#nav').on('click', '.hide-menu' ,function(e){
    e.preventDefault();
    $('ul').fadeOut();
    $('.hide-menu').text('Show Menu').attr('class', 'show-menu');
  });
}

headerFunctions.showAbout = function(){
  $('#menu-about').on('click', function(e){
    e.preventDefault();
    if($('.projects').is(':visible') || $('.contact').is(':visible')){
      $('.projects').fadeOut(1000);
      $('.contact').fadeOut(1000);
      $('.about-me').delay(1000).fadeIn(1000);
    } else {
      $('.about-me').fadeIn(1000);
    }
  });
}

headerFunctions.showProjects = function(){
  $('#menu-projects').on('click', function(e){
    e.preventDefault();
    if($('.about-me').is(':visible') || $('.contact').is(':visible')){
      $('.about-me').fadeOut(1000);
      $('.contact').fadeOut(1000);
      $('.projects').delay(1000).fadeIn(1000);
    } else {
      $('.projects').fadeIn(1000);
    }
  });
}

headerFunctions.showContact = function(){
  $('#menu-contact').on('click', function(e){
    e.preventDefault();
    if($('.about-me').is(':visible') || $('.projects').is(':visible')){
      $('.about-me').fadeOut(1000);
      $('.projects').fadeOut(1000);
      $('.contact').delay(1000).fadeIn(1000);
    } else {
      $('.contact').fadeIn(1000);
    }
  });
}

$(document).ready(function(){
  headerFunctions.showHeader();
  headerFunctions.showMenu();
  headerFunctions.hideMenu();
  headerFunctions.showAbout();
  headerFunctions.showProjects();
  headerFunctions.showContact();
});
