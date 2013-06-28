define([
    'underscore',
    'backbone',

    'views/tabs'
], function(_, Backbone, tabView) {

    return Backbone.Collection.extend({


        initialize : function() {
            _(this).bindAll('add');

        },
        add : function(page) {

            $('.tabs').append((new tabView({page : page })).render().$el);

            $('#glasswing').append(page.render().$el);
        }
    });
});
