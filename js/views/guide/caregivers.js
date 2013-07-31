
if (! glasswing) { glasswing = {}; }
if (! glasswing.config) { glasswing.config = {}; }
if (! glasswing.config.guide_events) { glasswing.config.guide_events = {}; }
(function($){
	var open_first_exam = function() {
		var exam;
		if ($p('table.grid-worklist').length) {
			// table
			exam = $p('table.grid-worklist tbody tr:first');
		} else {
			// cards
			exam = $p('.cards .card:first');
		}
		console.log(exam);
		if (exam && exam.length) {
			exam.click();
		}


	}
	var opportunity_setup = function() {
		$.dehighlight();
		open_first_exam();

		// $p('.tab').each(function(){
		// 	var view = $pd(this,'view');
		// 	view.closeTab();
		// });


	};
	var highlight_related_caregivers = function(chapter) {
		$.dehighlight();
		var coc = $p('.current-report .community-of-caregivers');


		coc.highlight({
			content: "Click the Related Caregivers button."
		});

		coc.click(function(e){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});
	}
	var easy_access_setup = function(chapter) {
		open_first_exam();
		var coc = $p('.current-report .community-of-caregivers');
		setTimeout(function(e){
			$pa(coc,'click');
		},100);


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
			10 : highlight_related_caregivers
		},
		'easy-access' : {
			0 : easy_access_setup,
			2 : highlight_last_saw_patient,
			5 : flag_a_caregiver
		}

	};
})(jQuery);
