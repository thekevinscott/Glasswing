define([
    'underscore',
    'backbone',
    'views/tabs'
], function(_, Backbone, tabView) {
    return Backbone.Collection.extend({
        initialize : function() {
            _(this).bindAll('add');
            this.pages = {};
        },
        add : function(page) {

            if (! this.pages[page.cid]) {
                console.log('add page: ' + page.name + ", cid : " + page.cid);
                this.pages[page.cid] = page;
                $('.tabs').append((new tabView({page : page })).render().$el);

            }
            return this;
        },
        show : function(page) {
            console.log('show page: '+page.name);

            $('.page').html(page.render().$el);
            return this;
        },
        // we can either pass in views (pages) directly, or we can ask tab
        // manager to create them for us.
        // here, it will create the view, if it doesn't already exist, and return it
        getPage : function(model,callback) {
            if (this.pages[model['cid']] !== undefined) {
                callback(this.pages[model['cid']]);
            } else if (this.pages[model['cid']]===undefined) {

                this.pages[model['cid']] = null;
                var self = this;
                require(['views/'+model.get('associated_page_view')],function(view){
                    var viewObj = new view({model : model});
                    self.pages[model['cid']] = viewObj;
                    callback(viewObj);
                });
            }

        }
    });
});
