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

var menuFunctions = {};

menuFunctions.showMenu = function(){
  $('#nav').on('click', '.show-menu', function(e){
    e.preventDefault();
    $('ul').fadeIn();
    $('.show-menu').text('Hide Menu').attr('class', 'hide-menu');
  });
}

menuFunctions.hideMenu = function(){
  $('#nav').on('click', '.hide-menu' ,function(e){
    e.preventDefault();
    $('ul').fadeOut();
    $('.hide-menu').text('Show Menu').attr('class', 'show-menu');
  });
}

$(document).ready(function(){
  menuFunctions.showMenu();
  menuFunctions.hideMenu();
});
