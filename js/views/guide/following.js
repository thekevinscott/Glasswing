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
		// console.log(exam);
		if (exam && exam.length) {
			exam.click();
		}


	}
	var opportunity_setup = function() {
		$.dehighlight();
		open_first_exam();
	};
	var alerts_setup = function() {

		$.dehighlight();
		open_first_exam();

		var follow = $p('.current-report .follow');
		if (! follow.hasClass('active')) {
			$pa(follow,'click');
		}

		var follow_overlay = $p('.follow-overlay');
		follow_overlay.highlight({
			content : 'This alerts the radiologist.'
		});
	};
	var clear_alert_modal = function() {
		var follow_overlay = $p('.follow-overlay');
		follow_overlay.dehighlight();
	};
	var highlight_notification_center = function(chapter) {
		var notifications = $p('.notifications');
		if (! notifications.hasClass('new')) {
			notifications.addClass('new');
		}
		notifications.highlight({
			content : 'Notifications appear here.'
		});
		notifications.mouseover(function(){
			notifications.dehighlight();
			notifications.find('.sheet').highlight({
				content : 'looka t this.'
			});
		});
	}

	var highlight_follow_button = function(chapter) {
		var follow = $p('.current-report .follow');
		follow.highlight({
			content : "Click the follow button."
		});
		follow.click(function(e){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});
	}

	glasswing.config.guide_events['following'] = {
		'opportunity' : {
			0 : opportunity_setup,
			10 : highlight_follow_button
		},
		'alerts' : {
			0 : alerts_setup,
			3 : clear_alert_modal,
			5 : highlight_notification_center
		}

	};
})(jQuery);
