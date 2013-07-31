(function($){
	var get_coc = function() {
		return $p('.current-report .community-of-caregivers:first');
	}
	var ensure_no_coc = function() {

		$pa('.community-of-caregivers','modal_close');
		// $p('.modal').remove();
		// $p('.modal-overlay').remove();
	}
	var opportunity_setup = function() {
		guide_event.clearAll();
		guide_event.ensure_open_exam();
		ensure_no_coc();
	};
	var highlight_related_caregivers = function(chapter) {
		guide_event.clearAll();
		// $pa(get_coc(),'modal');
		var coc = get_coc();


		coc.highlight({
			content: "Click the Related Caregivers button."
		});

		coc.click(function(e){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});

		guide_event.audio_prompt(17,chapter);
	}
	var easy_access_setup = function(chapter) {
		guide_event.clearAll();
		guide_event.ensure_open_exam();
		// $pa('.community-of-caregivers','modal_close');
		// get_coc



		setTimeout(function(e){
			var view = $pd(get_coc(),'view');
			view.open();
			// var coc = get_coc();
			// $(coc).modal({content: self.render().$el, position: 'right'});
		},350);


	};
	var highlight_last_saw_patient = function(chapter) {
		// $.dehighlight();
		$p('.caregivers .last-saw:first').highlight({
			content : "Shows when the patient was last seen."
		});
	};
	var flag_a_caregiver = function(chapter) {
		$p('.caregivers .last-saw:first').dehighlight();
		$p('.caregivers .flag:first').highlight({
			content : "Flag incorrect information."
		});
	};

	glasswing.config.guide_events['caregivers'] = {
		'opportunity' : {
			0 : opportunity_setup,
			16 : highlight_related_caregivers
		},
		'easy-access' : {
			0 : easy_access_setup,
			9 : highlight_last_saw_patient,
			16 : flag_a_caregiver
		}

	};
})(jQuery);
