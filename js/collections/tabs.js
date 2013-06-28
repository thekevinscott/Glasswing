define([
    'underscore',
    'backbone',
    'models/page',
    'views/tabs'
], function(_, Backbone, page, tabView) {

    return Backbone.Collection.extend({
        model: page,

        initialize : function() {
            _(this).bindAll('add');

        },
        add : function(page) {

            $('.tabs').append((new tabView({model : page.model })).render().$el);

            $('#glasswing').append(page.render().$el);
        }
    });
});
