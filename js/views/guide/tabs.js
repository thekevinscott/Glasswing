(function($){


	var click_the_higlighted_procedure = function(chapter) {
		guide_event.clearAll();
		var tr = $p('table tbody tr:first');


		tr.highlight({
			content: "Click the highlighted procedure."
		});

		tr.click(function(e){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});

		guide_event.audio_prompt(12.8,chapter);

	};
	var click_the_worklist_tab_then_another_patient = function(chapter) {
		var worklist_tab = $p('.tab-worklist');
		// var tr = $p('table tbody tr:first');

		$.dehighlight();
		worklist_tab.highlight({
			content: "Click on the worklist tab."
		});

		worklist_tab.click(function(e){
			$(this).unbind('click');
			// self.nextSection();
			$.dehighlight();
			var tr = $($p('table tbody tr')[1]);
			tr.highlight({
				content: "Click on another patient."
			});
			tr.click(function(e){
				$(this).unbind('click');
				chapter.nextSection();
				$.dehighlight();
			});
		});

		guide_event.audio_prompt(16.0,chapter);
	};
	var point_out_information_on_the_tab = function() {
		var selected_tab = $p('.tab.selected');
		selected_tab.highlight({
			content: 'Clearly distinguished by color. Modality is prominent.',

		});
	};
	var show_feedback_on_the_tab_modality = function() {
		var selected_tab = $p('.tab.selected');
		selected_tab.dehighlight();

		selected_tab.highlight({
			content: '<video autoplay width="235" height="175"><source src="../video/tabs/nic-hainc.mov"></video>'
		});
	};




	/*** SET UP ***/

	var opportunity_setup = function() {
		// close all tabs.

		$p('.tab').each(function(){
			var view = $pd(this,'view');
			view.closeTab();
		});
		$pa('.layouts .grid:not(.selected)','click'); // click the grid button
	};
	var handling_interruptions_setup = function() {

		guide_event.ensure_open_exam();

	}
	var design_setup = function() {

		guide_event.ensure_open_exam();
	}

	glasswing.config.guide_events.tabs = {
		'opportunity' : {
			0 : opportunity_setup,
			9 : click_the_higlighted_procedure
		},
		'handling-interruptions' : {
			0 : handling_interruptions_setup,
			14 : click_the_worklist_tab_then_another_patient
		},
		'design' : {
			0 : design_setup,
			2 : point_out_information_on_the_tab,
			19.2 : show_feedback_on_the_tab_modality
		}

	}
})(jQuery);
