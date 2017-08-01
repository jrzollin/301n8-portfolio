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
