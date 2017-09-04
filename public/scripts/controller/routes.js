'use strict';

var app = app || {};

page('/', app.home.init);
page('/about', app.aboutController.index);
page('/projects', app.projectsController.index);
page('/contact', app.contactController.index);


page();
