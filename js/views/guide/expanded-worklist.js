(function($){
	var doctor_name = 'Dr. Baldwin';
	var ensure_layout = function(layout) {
		guide_event.ensure_worklist();
		$pa('.layouts .'+layout+':not(.selected)','click'); // click the layout button
	}
	var reset_status = function() {
		guide_event.get_exam_model().set('ready',false);
		guide_event.get_exam_model().set('locked',false);
	}

	var get_queue_button = function() {
		return guide_event.get_first_exam_on_worklist().find('.queue');
	}

	/*** Opportunity ***/
	var opportunity_setup = function() {

		ensure_layout('grid');
		reset_status();
		queue_button = get_queue_button();
		if (queue_button.parents('tr').hasClass('in-queue')) {
			$pa(queue_button,'click');
		}

	};

	var queue_a_case = function(chapter) {
		ensure_layout('grid');
		reset_status();
		queue_button = get_queue_button();

		queue_button.highlight({
			content : 'Click the Queue Case button.'
		});
		queue_button.click(function(e){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});
		guide_event.audio_prompt(18.7,chapter);
	};

	/*** Focus on Patients ***/

	var focus_on_patients_setup = function() {
		ensure_layout('grid');
		reset_status();
		queue_button = get_queue_button();
		if (! queue_button.parents('tr').hasClass('in-queue')) {
			$pa(queue_button,'click');
		}
		// console.log(queue_button);


		var tr = $p('.stat').parents('tr');
		var view = $pd(tr,'view');
		if (view) {
			var exam = view.model;
			if (exam) {
				exam.set('ready',false);
			}

		}

	}

	var highlight_stats = function(chapter) {
		// alert('1');
		ensure_layout('grid');
		reset_status();
		$p('.stat').highlight({
			content : 'Indication of a Stat case.'
		});
	};

	var highlight_countdown = function(chapter) {
		ensure_layout('grid');
		reset_status();
		var end_time = guide_event.get_first_exam_on_worklist().find('.end_time').highlight({
			content : 'Shows countdown.'
		});
	};
	var highlight_referring = function(chapter) {
		ensure_layout('grid');
		reset_status();

		guide_event.get_first_exam_on_worklist().find('.referring').highlight({
			content : 'Referring physician and location.'
		})
	};
	var highlight_status = function(chapter) {
		ensure_layout('grid');
		reset_status();

		guide_event.get_first_exam_on_worklist().find('.image-status').highlight({
			content : 'Image status and other people reading.'
		});

	};
	var set_images_to_ready = function(chapter) {
		guide_event.get_exam_model().set('ready',true);
		guide_event.get_exam_model().set('locked',false);
	};
	var set_radiologist_to_reading = function(chapter) {
		guide_event.get_exam_model().set('locked',doctor_name);
	};
	var prompt_to_case_cards = function(chapter) {
		ensure_layout('grid');
		$p('.layouts .card').highlight({
			content : 'Click the card button.'
		});
		guide_event.audio_prompt(30,chapter);
		guide_event.get_exam_model().set('ready',true);
		guide_event.get_exam_model().set('locked',doctor_name);

	};

	/** Case Cards **/
	var case_card_setup = function() {
		ensure_layout('card');
		guide_event.get_exam_model().set('ready',true);
		guide_event.get_exam_model().set('locked',doctor_name);
	};



	glasswing.config.guide_events['expanded-worklist'] = {
		'opportunity' : {
			0 : opportunity_setup,
			16 : queue_a_case
		},
		'focus-on-patients' : {
			0 : focus_on_patients_setup,
			8 : highlight_stats,
			12 : highlight_countdown,
			16 : highlight_referring,
			19 : highlight_status,
			21 : set_images_to_ready,
			24 : set_radiologist_to_reading,
			28 : prompt_to_case_cards

		},
		'case-cards' : {
			0 : case_card_setup
		}

	}
})(jQuery);
