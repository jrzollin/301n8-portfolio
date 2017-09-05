'use strict';

var app = app || {};

(function(module){

  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        'Authorization': `token ${githubToken}`
      }
    })
      .then(results => {
        results.forEach(repo => repos.all.push(repo));
      }, error => {
        console.log(error);
      }
    )
      .then(function(){
        callback();
      }
    );
  }

  repos.show = function(){
    repos.all.map(function(repo){
      $('.projects').append(repos.rend(repo));
    });
  }

  repos.rend = function(repo){
    var newRepoTemplate = Handlebars.compile($('#repo-template').text());
    return newRepoTemplate(repo);
  }

  repos.requestRepos(repos.show);

  module.repos = repos;
})(app);
