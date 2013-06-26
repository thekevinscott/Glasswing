(function($){

  // document ready
  $(function() {
    // Set up some options for jQuery and plugins.
    $(document).ajaxError(function() {
      alert("There was an error.");
    });

    // Backbone.emulateJSON = true;

    // Initialize Backbone views.
    // App.chromeView = new App.ChromeView({ el: $("body") });
    // App.router = new App.Router;

    // Initialize the Backbone router.
    // Backbone.history.start();
  });
})(jQuery);