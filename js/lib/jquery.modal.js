(function ($) {
    $.fn.modal = function (options) {
        var self, button, content, modal, arrow, close, overlay, exit, left, top;

        self = $(this);
        button = $(options.button);
        console.log('1');



        $('body').append(self);

        content = $(self).wrap('<div class="modal-content" />').parent();
        modal = content.wrap('<div class="modal" />').parent();
        arrow = $('<div class="arrow" />');
        close = $('<a href="javascript:;" class="close" />');
console.log('2');
        modal.prepend(arrow);
        modal.prepend(close);
        console.log('3');
        overlay = $('<div class="modal-overlay" />');
        modal.before(overlay);
        console.log('4');
        exit = function () {
            overlay.remove();
            modal.remove();
        }
        console.log('5');
        overlay.click(exit);
        close.click(exit);

        console.log(button);
        left = button.position().left - (modal.outerWidth() / 2) + (button.width() / 2);
        top = button.position().top + (button.outerHeight() + arrow.outerHeight());
        modal.css({left: left+'px', top: top});


    }
})(jQuery);