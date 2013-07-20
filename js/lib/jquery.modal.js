(function ($) {
    var defaults = {
        arrow : true,
        close : true,
        content : ''
    };
    $.fn.modal = function (options) {
        if (typeof options === 'string') {
            options = $.extend(defaults,{content : options});
        } else {
            options = $.extend(defaults,options);
        }

        var self, content, modal, arrow, close, overlay, exit, left, top;

        self = $(this);
        var offset = self.offset();



        if (glasswing.hasOwnProperty('modal')) {
            glasswing.modal.modal.remove();
            glasswing.modal.overlay.remove();
            delete glasswing.modal;
        }

        // $('body').append(self);

        modal = $('<div class="modal" />');
        content = $('<div class="modal-content" />');
        if (options.arrow) { arrow = $('<div class="arrow" />'); }
        if (options.close) { close = $('<a href="javascript:;" class="close" />'); }
        overlay = $('<div class="modal-overlay" />');

        modal.html(content);
        content.html(options.content);
        if (arrow) { modal.prepend(arrow); }
        if (close) { modal.prepend(close); }
        $('body').append(modal);
        modal.before(overlay);

        exit = function () {
            overlay.remove();
            modal.remove();
        }
        overlay.click(exit);
        close.click(exit);


        left = offset.left;
        top = offset.top + self.outerHeight() + arrow.outerHeight();
        modal.css({left: left, top: top});

        glasswing.modal = {modal : modal, overlay : overlay };
    }
})(jQuery);