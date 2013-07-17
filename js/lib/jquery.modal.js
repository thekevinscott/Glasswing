(function ($) {
    $.fn.modal = function (options) {
        var self, button, content, modal, arrow, close, overlay, exit, left, top;

        self = $(this);
        button = $(options.button);




        $('body').append(self);

        content = $(self).wrap('<div class="modal-content" />').parent();
        modal = content.wrap('<div class="modal" />').parent();
        arrow = $('<div class="arrow" />');
        close = $('<a href="javascript:;" class="close" />');

        modal.prepend(arrow);
        modal.prepend(close);
        overlay = $('<div class="modal-overlay" />');
        modal.before(overlay);

        exit = function () {
            overlay.remove();
            modal.remove();
        }
        overlay.click(exit);
        close.click(exit);

        console.log(button);

        left = button.offset().left;// - (button.width() / 2);
        top = button.offset().top + (button.outerHeight() + arrow.outerHeight());
        modal.css({left: left+'px', top: top});


    }
})(jQuery);