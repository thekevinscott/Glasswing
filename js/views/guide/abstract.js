if (! glasswing) { glasswing = {}; }
if (! glasswing.config) { glasswing.config = {}; }
if (! glasswing.config.guide_events) { glasswing.config.guide_events = {}; }

var guide_event = new function() {
	this.timeout = 18000;
	this.prompt_timer;
	this.clearAll = function() {
		jQuery.dehighlight();
		clearTimeout(this.prompt_timer);
	};
	this.audio_prompt = function(seek,chapter) {
		this.prompt_timer = setInterval(function(){
			chapter.play(seek);
		},this.timeout);
	};
	this.get_first_exam_on_worklist = function() {
		var exam;
		if ($p('table.grid-worklist').length) {
			// table
			exam = $p('table.grid-worklist tbody tr:first');
		} else {
			// cards
			exam = $p('.cards .card:first');
		}
		return exam;
	}

	this.get_exam_model = function() {

		var view = $pd(guide_event.get_first_exam_on_worklist(),'view');
		return view.model;
	}

	this.ensure_worklist = function() {
		this.clearAll();
		$p('.tab').each(function(){
			var view = $pd(this,'view');
			view.closeTab();
		});
	}
	this.ensure_report = function() {
		var exam = this.get_first_exam_on_worklist();
		if (exam && exam.length) {

		}
	}
	this.ensure_open_exam = function() {
		this.clearAll();
		// check to see if we have at least two tabs and the active one is not the worklist
		var tabs = $p('.tab');
		if (tabs.length <= 1) {
			// open a patient and select it
			var exam = this.get_first_exam_on_worklist();;
			exam.click();
		} else {
			var selected = $p('.tab.selected');
			if (selected.hasClass('tab-worklist')) {
				// we need to select a patient tab
				var next_tab = $p('.tab:not(.selected):first');
				next_tab.click();
			}
		}
	}

}();
