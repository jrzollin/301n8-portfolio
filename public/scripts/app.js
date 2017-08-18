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
  var newTemplate = Handlebars.compile($('#template').text());
  return newTemplate(this);
};

//get projects data from local storage or .json
Project.fetchData = function(){
  if(localStorage.projectData){
    Project.loadData(JSON.parse(localStorage.projectData));
  } else {
    $.getJSON('data/projects.json', function(data){
      localStorage.projectData = JSON.stringify(data);
      Project.loadData(data);
    });
  }
}

//Add project data to projects array
Project.loadData = function(projectData){
  //sort the data by most recent
  projectData.sort(function(a,b){
    return (new Date(b.created)) - (new Date(a.created));
  });
  //push to projects array
  projectData.forEach(function(project){
    projects.push(new Project(project));
  });
  //call function to add projects to DOM
  projects.forEach(function(project){
    $('.projects').append(project.displayProject());
  });
}

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
