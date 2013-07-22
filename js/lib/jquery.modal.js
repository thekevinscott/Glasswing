(function ($) {

    $.fn.modal = function (options) {

        if (typeof options === 'string') {
            options = {content : options};

        }
        options = $.extend({
            arrow : true,
            close : true,
            overlay : true,
            content : ''
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
            }
            self.data('modal-element',modal);
            $('body').append(modal.el);

            modal.el.css({opacity: 0});
        }

        modal.el.show();


        exit = function () {
            if (modal.overlay) { modal.overlay.remove(); }
            modal.el.remove();
            self.data('modal-element',null);
        }
        if (modal.overlay) { modal.overlay.click(exit); }
        if (modal.close) { modal.close.click(exit); }


        left = offset.left;

        top = offset.top + self.outerHeight() + modal.arrow.outerHeight();


        var padding_right = 40;
        if (left + modal.el.width() + padding_right > $(document).width()) {
            // slide it over
            modal.el.css({left: left - 40, top: top});
            modal.arrow.css({left: '72%'});
        } else {
            modal.el.css({left: left, top: top});
        }




        modal.el.stop().animate({opacity: 1, marginTop: 3},{easing : 'easeOutQuad', duration: 200});



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