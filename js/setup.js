(function($){

  // document ready
  $(function() {
    // Set up some options for jQuery and plugins.
    $(document).ajaxError(function() {
      alert("There was an error.");
    });


    var patient1 = new glasswing.models.patient({firstname : "Bob", lastname: "Kraut"});

    var patient2 = new glasswing.models.patient({first : "Bob", last: "Kraut"});

    // Backbone.emulateJSON = true;

    // Initialize Backbone views.
    // App.chromeView = new App.ChromeView({ el: $("body") });
    // App.router = new App.Router;

    // Initialize the Backbone router.
    // Backbone.history.start();
  });
})(jQuery);