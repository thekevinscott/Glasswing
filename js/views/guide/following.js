(function($){
	var get_follow_button = function() {
		return $p('.current-report .follow:first');
	}
	/*** Opportunity ***/
	var opportunity_setup = function() {
		guide_event.clearAll();
		guide_event.ensure_open_exam();
		var follow = get_follow_button();
		if (follow.hasClass('active')) {
			$pd(follow,'view').follow_action();
		}
	};
	var highlight_follow_button = function(chapter) {
		get_follow_button().highlight({
			content : "Click the follow button."
		}).click(function(e){
			$(this).unbind('click');
			chapter.nextSection();
			$.dehighlight();
		});
		guide_event.audio_prompt(15,chapter);
	}


	/*** Alerts ***/
	var alerts_setup = function() {
		guide_event.clearAll();
		guide_event.ensure_open_exam();

		var follow = get_follow_button();
		// console.log(follow[0]);
		setTimeout(function(){
			if (! follow.hasClass('active')) {
				$pd(follow,'view').follow_action();
			}

			var follow_overlay = $p('.follow-overlay');
			follow_overlay.highlight({
				content : 'The radiologist is alerted to the fact they are now following the case.'
			});
		},400);


	};
	var clear_alert_modal = function() {

		var follow_overlay = $p('.follow-overlay');
		follow_overlay.dehighlight();
	};
	var close_current_tab = function() {
		guide_event.clearAll();
		var follow_overlay = $p('.follow-overlay');
		follow_overlay.dehighlight();

		var selected = $p('.tab.selected');

		if (! selected.hasClass('tab-worklist')) {
			// you gotta close this
			selected.highlight({
				content: "You may now close this tab."
			});
			selected.find('.close-tab').click(function(){
				guide_event.ensure_worklist();

				highlight_notification_center(chapter);
			});
		}
	}
	var highlight_notification_center = function(chapter) {

		if (! $pd('.notifications','modal-element')) {
			guide_event.clearAll();
			var notifications = $p('.notifications');

			notifications.highlight({
				content : 'Notifications appear here.'
			});
			notifications.mouseover(function(){
				notifications.dehighlight();
				notifications.find('.sheet li:first').click(function(){
					$(this).unbind('click');
					chapter.nextSection();
					$.dehighlight();
				});

			});
		}

	}
	glasswing.config.guide_events['following'] = {
		'opportunity' : {
			0 : opportunity_setup,
			14.5 : highlight_follow_button
		},
		'alerts' : {
			0 : alerts_setup,
			4 : clear_alert_modal,
			6 : close_current_tab,
			12 : highlight_notification_center
		}

	};
})(jQuery);
