
if (! glasswing) { glasswing = {}; }
if (! glasswing.config) { glasswing.config = {}; }
if (! glasswing.config.guide_events) { glasswing.config.guide_events = {}; }
(function($){
	var click_the_higlighted_procedure = function(chapter) {
		var tr = $p('table tbody tr:first');

		$.dehighlight();
		tr.highlight({
			content: "Click the highlighted procedure."
		});

		tr.click(function(e){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});
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

	var opportunity_setup = function() {
		// close all tabs.

		$p('.tab').each(function(){
			var view = $pd(this,'view');
			view.closeTab();
		});
	};
	var handling_interruptions_setup = function() {
		// check to see if we have at least two tabs and the active one is not the worklist
		var tabs = $p('.tab');
		if (tabs.length <= 1) {
			// open a patient and select it

			var exam;
			if ($p('table.grid-worklist').length) {
				// table
				exam = $p('table.grid-worklist tbody tr:first');
			} else {
				// cards
				exam = $p('.cards .card:first');
			}
			exam.click();

		} else {
			var selected = $p('.tab.selected');
			if (selected.hasClass('tab-worklist')) {
				// we need to select a patient tab
				var next_tab = $p('.tab:not(.selected):first');
				next_tab.click();
			}
		}
		// open a patient tab and go to it, if not already open

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
			2 : point_out_information_on_the_tab,
			18.5 : show_feedback_on_the_tab_modality
		},

		'alerts' : {

		}

	}
})(jQuery);
