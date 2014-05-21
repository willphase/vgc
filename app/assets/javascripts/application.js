// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require fullcalendar

  $(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        events: '/events.json',
    	timezone: 'UTC',
    	ignoreTimezone: true,
    	defaultView: 'agendaWeek',
    	selectable: true,
			selectHelper: true,
			select: function(start, end, allDay) {
				var title = prompt('Event Title:');
				if (title) {
					$('#calendar').fullCalendar('renderEvent',
						{
							title: title,
							start: start.toUTCString(),
							end: end.toUTCString(),
							allDay: allDay
						},
						true,
						alert(start + end + title)
					);
				}
				calendar.fullCalendar('unselect');
			},

    })

});

    $(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#inputcalendar').fullCalendar({
    	defaultView: 'agendaWeek',
    	timezone: 'UTC',
    	ignoreTimezone: true,
    	selectable: true,
			selectHelper: true,
			select: function(start, end, allDay) {
				var title = prompt('Event Title:');
				if (title) {
					$('#event_title').val(title);
					$('#event_start_time').val(start);
					$('#event_end_time').val(end);
					$('#inputcalendar').fullCalendar('renderEvent',
						{
							title: title,
							start: start.toUTCString(),
							end: end.toUTCString(),
							allDay: allDay
						},
						true,
						alert(start + end + title)
					);
				}
				calendar.fullCalendar('unselect');
			},

    })

});