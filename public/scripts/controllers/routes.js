'use strict';

var app = app || {};

page('/', index);
page('/about', app.aboutController.index);
page('/projects', app.projectsController.index);
page('/contact', app.contactController.index);

page();
