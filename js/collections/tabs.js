glasswing.collections.tabs = Backbone.Collection.extend({

    initialize : function(attributes) {
        _(this).bindAll('add');
        this.pages = {};
        this.router = attributes.router;
        this.worklist = attributes.worklist;
    },
    showPage : function(model, options) {
        var self = this;
        this.getPage(model, function(page){

            self.router.url(page.view.url,options);
            // self.router.url('',options);

            if (self.selected_tab != null) { self.selected_tab.deselect(); }

            page.view.setOptions(options);
            $('.page').html(page.view.render().$el);
            self.selected_tab = page.tab.select();
        });
        return this;
    },

    addTab : function(page) {
        var tab = new glasswing.views.tabs({page : page, parent : this });
        $('.tabs').append(tab.render().$el);
        tab.show();
        $(tab.render.$el).click(function(e){
            console.log('gotta figure out how to deal with this');
        });
        return tab;
    },
    closeTab : function(page) {
        this.showPage(this.worklist,{trigger : true});

        var cid = page.model['cid'];
        var self = this;
        page = this.pages[cid];
        page.tab.close(function(tab){
            tab.remove();
            page.view.remove();
            delete self.pages[cid];
        });


    },
    getPage : function(view,callback) {

        // console.log('get page');
        if (! view) { throw("You must pass in a view!");}

        if (this.pages[view['cid']] !== undefined && this.pages[view['cid']] !== null) {
            if (callback) { callback(this.pages[view['cid']]); }
        } else if (this.pages[view['cid']]===undefined) {

            this.pages[view['cid']] = null;
            var self = this;

            console.log('associated page view: ');
            console.log(view);

            //var view = view.get('associated_page_view');
            console.log(view.constructor);
            var viewObj = new view.constructor({view : view, tabManager : self});

            self.pages[view['cid']] = { view : viewObj, tab : self.addTab(viewObj) };
            // console.log('going into callback');
            // console.log(view['cid']);
            // console.log(self.pages);
            if (callback) { callback(self.pages[view['cid']]); }

        }

    }
});
