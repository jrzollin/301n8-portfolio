'use strict';

var app = app || {};

// $('#nav li').on('click', function(e){
//   e.preventDefault();
//   var selected = $(this).attr('id');
//   console.log(selected);
//
//   if(selected === 'about-me'){
//     page('/about', app.aboutController.index);
//   }
// });

page('/', app.home.index);
page('/about', app.aboutController.index);
page('/projects', app.projectsController.index);
page('/contact', app.contactController.index);

page();
