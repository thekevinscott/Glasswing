(function($){
	var get_top_prior = function() {
		var prior;
		$p('.dynamic-content .prior').each(function(){
			if (! prior || $(this).css('zIndex') >  $(prior).css('zIndex')) {
				prior = this;
			}
		});
		return $(prior);
	}
	var ensure_two_priors = function() {

		if ($p('.dynamic-content .prior').length<=1) {
			var view = $pd('.dynamic-content',view);
			// console.log(view.view);

			var prior = $pd('.timeline','view').getFirst();
			var el = prior.$el;

			view.view.addPane({
				element : el,
				position: 'right'
				// callback : function(view){
				// 	prior.afterRender(view);
				// }

			});
		}
	}
	/*** Opportunity ***/
	var opportunity_setup = function() {
		guide_event.clearAll();
		guide_event.ensure_open_exam();
	};
	var highlight_content_panel = function() {
		guide_event.clearAll();
		guide_event.ensure_open_exam();
		$p('.dynamic-content').highlight({
			content : 'A customized layout panel for dynamic content.'
		});
	}
	var prompt_to_click_prior = function(chapter) {
		guide_event.clearAll();
		guide_event.ensure_open_exam();

		$p('.timeline .priors .prior:visible:first').highlight({
			content : "Click on a prior for a demonstration of the Content Panel."
		}).click(function(){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});
		guide_event.audio_prompt(18,chapter);
	}

	/*** Multiple Priors ***/
	var multiple_priors_setup = function() {
		guide_event.clearAll();
		guide_event.ensure_open_exam();
		$p('.dynamic-content').highlight({
			content : 'A single click populates the Content Panel with the prior.'
		});
	};
	var prompt_to_click_and_drag = function(chapter) {
		guide_event.clearAll();
		guide_event.ensure_open_exam();
		$($p('.timeline .priors .prior:visible')[1]).highlight({
			content : "Click and drag the prior for a demonstration of the Content Panel."
		}).mousedown(function(){
			$p('body').unbind('mouseup').mouseup(function(){
				$(this).unbind('mouseup');
				// console.log("mouse up!");
				setTimeout(function(){

					// console.log($p('.dynamic-content .pane').length);
					if ($p('.dynamic-content .pane').length>=2) {

						chapter.nextSection();
						$.dehighlight();
					}
				},100);

			});
		});

		guide_event.audio_prompt(13,chapter);




	}

	/*** Maximize ***/
	var maximize_setup = function() {
		// alert('need to make sure I have two of these things');
		guide_event.clearAll();
		guide_event.ensure_open_exam();
		setTimeout(function(){
			ensure_two_priors();
		},500);

	};
	var prompt_to_maximize = function(chapter) {
		guide_event.clearAll();
		guide_event.ensure_open_exam();
		setTimeout(function(){
			ensure_two_priors();
		},500);

		var magnify = get_top_prior().find('.magnify');
		$(magnify).highlight({
			content: 'Click the magnify icon to maximize the content.'
		}).click(function(){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});
		// guide_event.audio_prompt(8,chapter);
	}

	var machine_learning_setup = function() {
		guide_event.clearAll();
		guide_event.ensure_open_exam();
	};

	glasswing.config.guide_events['content-panel'] = {
		'opportunity' : {
			0 : opportunity_setup,
			10 : highlight_content_panel,
			18 : prompt_to_click_prior
		},
		'multiple-priors' : {
			0 : multiple_priors_setup,
			13: prompt_to_click_and_drag
		},
		'maximize' : {
			0 : maximize_setup,
			6 : prompt_to_maximize

		},
		'machine-learning' : {
			0 : machine_learning_setup,
		},

	}
})(jQuery);
