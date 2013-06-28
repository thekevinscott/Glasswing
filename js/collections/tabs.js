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
        showPage : function(model) {
            var self = this;
            this.getPage(model, function(page){
                if (self.selected_tab != null) { self.selected_tab.deselect(); }
                //console.log('show page: '+view.name);
                $('.page').html(page.view.render().$el);
                self.selected_tab = page.tab.select();
            });
            return this;
        },

        addTab : function(page) {
            var tab = new tabView({page : page });
            $('.tabs').append(tab.render().$el);
            return tab;
        },
        getPage : function(model,callback) {
            if (this.pages[model['cid']] !== undefined) {
                callback(this.pages[model['cid']]);
            } else if (this.pages[model['cid']]===undefined) {

                this.pages[model['cid']] = null;
                var self = this;
                require(['views/'+model.get('associated_page_view')],function(view){
                    var viewObj = new view({model : model});
                    self.pages[model['cid']] = { view : viewObj, tab : self.addTab(viewObj) };

                    callback(self.pages[model['cid']]);
                });
            }

        }
    });
});
