define([
    'underscore',
    'backbone',
    'views/tabs'
], function(_, Backbone, tabView) {
    return Backbone.Collection.extend({
        initialize : function(attributes) {
            _(this).bindAll('add');
            this.pages = {};
            this.router = attributes.router;
            this.worklist = attributes.worklist;
        },
        showPage : function(model, options) {
            var self = this;
            this.getPage(model, function(page){
                self.router.navigate(page.view.url,options);

                if (self.selected_tab != null) { self.selected_tab.deselect(); }

                page.view.setOptions(options);
                $('.page').html(page.view.render().$el);
                self.selected_tab = page.tab.select();
            });
            return this;
        },

        addTab : function(page) {
            var tab = new tabView({page : page });
            $('.tabs').append(tab.render().$el);
            tab.show();
            return tab;
        },
        closeTab : function(page) {
            this.showPage(this.worklist,{trigger : true});
            //this.router.navigate('worklist',{trigger : true});

            var cid = page.model['cid'];
            var self = this;
            page = this.pages[cid];
            page.tab.close(function(tab){
                tab.remove();
                page.view.remove();
                delete self.pages[cid];
            });


        },
        getPage : function(model,callback) {
            // console.log('get page');
            if (! model) { throw("You must pass in a model!");}

            if (this.pages[model['cid']] !== undefined && this.pages[model['cid']] !== null) {
                callback(this.pages[model['cid']]);
            } else if (this.pages[model['cid']]===undefined) {

                this.pages[model['cid']] = null;
                var self = this;
                require(['views/'+model.get('associated_page_view')],function(view){

                    var viewObj = new view({model : model, tabManager : self});

                    self.pages[model['cid']] = { view : viewObj, tab : self.addTab(viewObj) };
                    // console.log('going into callback');
                    // console.log(model['cid']);
                    // console.log(self.pages);
                    callback(self.pages[model['cid']]);
                });
            }

        }
    });
});
