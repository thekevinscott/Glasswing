(function ($) {

    $.fn.modal = function (options) {

        if (typeof options === 'string') {
            options = {content : options};

        }
        options = $.extend({
            arrow : true,
            close : true,
            overlay : true,
            content : '',
            overlay_opacity : 0.7
        },options);


        var self, content, modal, arrow, close, overlay, exit, left, top;

        self = $(this);
        var offset = self.offset();





        // if (glasswing.hasOwnProperty('modal')) {
        //     glasswing.modal.modal.remove();
        //     if (glasswing.modal.overlay) { glasswing.modal.overlay.remove(); }
        //     delete glasswing.modal;
        // }

        // $('body').append(self);
        modal = self.data('modal-element');

        if (! modal || options.content !== modal.alt) {
            modal = {};
            modal.alt = options.content;
            modal.el = $('<div class="modal" />');
            modal.content = $('<div class="modal-content" />');
            if (options.arrow) { modal.arrow = $('<div class="arrow" />'); }
            if (options.close) { modal.close = $('<a href="javascript:;" class="close" />'); }

            if (options.overlay) { modal.overlay = $('<div class="modal-overlay" />'); }

            modal.el.html(modal.content);
            modal.content.html(modal.alt);
            if (options.arrow) { modal.el.prepend(modal.arrow); }
            if (options.close) { modal.el.prepend(modal.close); }

            if (options.overlay) {

                $('body').append(modal.overlay);
                modal.overlay.css({opacity : options.overlay_opacity})
            }
            self.data('modal-element',modal);
            $('body').append(modal.el);

            modal.el.css({opacity: 0});
            modal.el.addClass(options.position);
            if (options.css) {
                modal.content.css(options.css);
            }
        }

        modal.el.show();


        exit = function () {
            if (modal.overlay) { modal.overlay.remove(); }
            modal.el.remove();
            self.data('modal-element',null);
        }
        if (modal.overlay) { modal.overlay.click(exit); }
        if (modal.close) { modal.close.click(exit); }



        switch (options.position) {
            case 'top' :
                left = offset.left;
                top = offset.top + self.outerHeight() + modal.arrow.outerHeight();
                top = offset.top - modal.el.height() - modal.arrow.outerHeight();

            break;
            default :
                left = offset.left;
                top = offset.top + self.outerHeight() + modal.arrow.outerHeight();
            break;
        }



        var padding_right = 40;


        modal.el.css({left: left, top: top});
        if (left + modal.el.width() + padding_right > $('body').width()) {
            // slide it over

            if (0) {
                // this is the shit about the following dropdown
                modal.el.css({left: left - 40, top: top});
                modal.arrow.css({left: '72%'});
            } else {
                // console.log(left);
                // console.log('should be around 1190');
                // console.log(modal.el.width());
                // console.log($('body').width());
                // console.log('final: ' + ($('body').width() - modal.el.width() - padding_right));

                var new_left = $('body').width() - modal.el.width() - padding_right;
                modal.el.css({left: new_left});
                modal.arrow.css({left: left-new_left});

            }
        } else if (top + modal.el.height() + 0 > $('body').height()) {
            console.log('shit!');
            left = offset.left;
            // top = offset.top + self.outerHeight() + modal.arrow.outerHeight();
            top = offset.top - modal.el.height() - modal.arrow.outerHeight();
            options.position = 'top';
            modal.el.css({top: top});
            modal.el.addClass(options.position);
            modal.arrow.css({top: 'auto', bottom: 0 - modal.arrow.outerHeight()});

        }



        switch(options.position) {
            case 'top' :
                modal.el.stop().animate({opacity: 1, marginTop: -3},{easing : 'easeOutQuad', duration: 200});
            break;
            default :
                modal.el.stop().animate({opacity: 1, marginTop: 3},{easing : 'easeOutQuad', duration: 200});
            break;
        }

        if (options.callback) {
            options.callback(self);
        }


        // glasswing.modal = {modal : modal, overlay : overlay };
    }
    $.fn.modal.close = function(el) {
        var modal = $(el).data("modal-element");
        modal.el.stop().animate({opacity: 0, marginTop : 6}, {easing : 'easeInQuad',duration: 200, complete : function() {
            modal.el.css({marginTop : 0});
            modal.el.hide();
        }});
        // self.data("modal-element").remove();
        // self.data("modal-element").stop().fadeOut(function(){
        //     this.remove();
        //     self.data('modal-element',null);
        // });
    }
})(jQuery);