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

            if (self.selected_tab != null) { self.selected_tab.deselect(); }

            page.view.setOptions(options);
            $('.page').html(page.view.render().$el);
            self.selected_tab = page.tab.select();
        });
        return this;
    },

    addTab : function(page) {
        var self = this;
        var tab = new glasswing.views.tabs({page : page, parent : this });
        $('.tabs').append(tab.$el);
        tab.show();
        // tab.$el.click(function(e){
        //     alert('2');
        //     self.showPage(page);
        //     glasswing.err('gotta figure out how to deal with this');
        // });
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


        if (! view) { throw("You must pass in a view!");}

        if (this.pages[view['cid']] !== undefined && this.pages[view['cid']] !== null) {
            if (callback) { callback(this.pages[view['cid']]); }
        } else if (this.pages[view['cid']]===undefined) {

            this.pages[view['cid']] = null;
            var self = this;

            glasswing.err('associated page view: ');
            glasswing.err(view);

            //var view = view.get('associated_page_view');
            glasswing.err(view.constructor);
            view.tabManager = self;


            self.pages[view['cid']] = { view : view, tab : self.addTab(view) };
            if (callback) { callback(self.pages[view['cid']]); }

        }

    }
});
