'use strict';

var app = app || {};

(function(module){

  const home = {};

  home.init = function(){}
  //project constructor
  function Project(rawDataObject){
    this.name = rawDataObject.name;
    this.image = rawDataObject.image;
    this.description = rawDataObject.description;
    this.created = rawDataObject.created;
  }

  Project.all = [];

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
    projectData.map(function(project){
      Project.all.push(new Project(project));
    });
    //call function to add projects to DOM
    Project.all.map(function(project){
      $('.projects').append(project.displayProject());
    });
  }


  module.Project = Project;
  module.home = home;
})(app);
