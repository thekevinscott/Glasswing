
if (! glasswing) { glasswing = {}; }
if (! glasswing.config) { glasswing.config = {}; }
if (! glasswing.config.guide_events) { glasswing.config.guide_events = {}; }
(function($){
	var opportunity_setup = function() {
		// close all tabs.

		$p('.tab').each(function(){
			var view = $pd(this,'view');
			view.closeTab();
		});
		$pa('.layouts .grid:not(.selected)','click'); // click the grid button
	};

	var focus_on_patients_setup = function() {
		$p('.tab').each(function(){
			var view = $pd(this,'view');
			view.closeTab();
		});
		$pa('.layouts .grid:not(.selected)','click'); // click the grid button
		var tr = $p('.stat').parents('tr');
		var view = $pd(tr,'view');
		var exam = view.model;
		exam.set('ready',false);
	}

	var case_card_setup = function() {
		$p('.tab').each(function(){
			var view = $pd(this,'view');
			view.closeTab();
		});
		$pa('.layouts .card:not(.selected)','click'); // click the grid button
	};

	var queue_a_case = function(chapter) {

		var exam;
		if ($p('table.grid-worklist').length) {
			// table
			exam = $p('table.grid-worklist tbody tr:first');
		} else {
			// cards
			exam = $p('.cards .card:first');
		}
		var queue_button = exam.find('.queue');
		queue_button.highlight({
			content : 'Click the Queue Case button.'
		});
		queue_button.click(function(e){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});
	};

	var highlight_stats = function(chapter) {
		// alert('1');
		$p('.stat').highlight({
			content : 'Indication of a Stat case.'
		});
	};

	var highlight_countdown = function(chapter) {
		$.dehighlight();
		var end_time = $p('.stat').parents('tr').find('.end_time');
		end_time.highlight({
			content : 'Shows countdown.'
		});
	};
	var highlight_referring = function(chapter) {
		$.dehighlight();
		var referring = $p('.stat').parents('tr').find('.referring');
		referring.highlight({
			content : 'Referring physician and location.'
		})
	};
	var highlight_status = function(chapter) {
		$.dehighlight();
		var image_status = $p('.stat').parents('tr').find('.image-status');
		image_status.highlight({
			content : 'Image status and other people reading.'
		});


		// var tr = $p('table tr:first');
		// console.log(tr);
		// var model = $pd(tr,'model');
		// console.log(model);
		//
	};
	var set_images_to_ready = function(chapter) {
		var tr = $p('.stat').parents('tr');
		var view = $pd(tr,'view');
		var exam = view.model;
		exam.set('ready',true);
		console.log(view);
		console.log(exam);
		// $pd(tr,'model')
	};
	var set_radiologist_to_reading = function(chapter) {
		var tr = $p('.stat').parents('tr');
		var view = $pd(tr,'view');
		var exam = view.model;
		exam.set('locked','Dr. Baldwino');
	};
	var prompt_to_case_cards = function(chapter) {
		$.dehighlight();
		$p('.layouts .card').highlight({
			content : 'Click the card button.'
		});
	};

	glasswing.config.guide_events['expanded-worklist'] = {
		'opportunity' : {
			0 : opportunity_setup,
			16 : queue_a_case
		},
		'focus-on-patients' : {
			0 : focus_on_patients_setup,
			2 : highlight_stats,
			3 : highlight_countdown,
			10 : highlight_referring,
			12 : highlight_status,
			13 : set_images_to_ready,
			14 : set_radiologist_to_reading,
			16 : prompt_to_case_cards

		},
		'case-cards' : {
			0 : case_card_setup
		}

	}
})(jQuery);
