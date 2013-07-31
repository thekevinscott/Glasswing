(function($){
	var get_timeline_switch_button = function(key) {
		return $p('.timeline-buttons .'+key+'-priors');
	}
	var ensure_priors = function(key) {

		var timeline = $p('.timeline');
		// console.log(timeline);
		var view = $pd(timeline,'view');

		if (view) {
			view.switchTimelineView(get_timeline_switch_button(key));
		}

	}
	/*** Opportunity ***/
	var opportunity_setup = function() {

		guide_event.ensure_open_exam();
		setTimeout(function(){
			ensure_priors('relevant');
		},500);

	};
	var highlight_timeline = function() {
		ensure_priors('relevant');
		$p('.timeline .priors .prior:visible:first').highlight({
			content : 'Our implementation of the proposed timeline.'
		});
	};
	var highlight_timeline_buttons = function(chapter) {
		$.dehighlight();
		$p('.timeline-buttons .all-priors').highlight({
			content : 'Switch to view all priors'
		}).click(function(e){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});
		guide_event.audio_prompt(21,chapter);
	};

	var implementation_setup = function(chapter) {
		guide_event.ensure_open_exam();
		setTimeout(function(){
			ensure_priors('all');
		},500);
		$p('.timeline .priors .prior').click(function(){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});
	};


	glasswing.config.guide_events.timeline = {
		'opportunity' : {
			0 : opportunity_setup,
			10 : highlight_timeline,
			19 : highlight_timeline_buttons
		},
		'implementation' : {
			0 : implementation_setup,
		}
	}
})(jQuery);
