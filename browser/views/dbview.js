app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('myState', {
      url: "/test",
      templateUrl: __dirname + "/browser/views/dbview.html"
    })

  $stateProvider.state('noState', {
    url: "/",
    template: "<h1> no state </h1>"
  })
    

});