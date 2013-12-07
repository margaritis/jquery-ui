/* Greek (el) initialisation for the jQuery UI date picker plugin. */
/* Written by Alex Cicovic (http://www.alexcicovic.com) */
/* Edited by Konstantinos Margaritis (margaritis.org)*/
jQuery(function($){
	$.datepicker.regional['el'] = {
		closeText: 'Κλείσιμο',
		prevText: 'Προηγούμενος',
		nextText: 'Επόμενος',
		currentText: 'Τρέχων Μήνας',
		monthNames: ['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος',
		'Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'],
		monthNamesShort: ['Ιαν.','Φεβ.','Μάρ.','Απρ.','Μάι.','Ιούν.',
		'Ιούλ.','Αύγ.','Σεπ.','Οκτ.','Νοέ.','Δεκ.'],
		dayNames: ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο'],
		dayNamesShort: ['Κυρ.','Δευτ.','Τρί.','Τετ.','Πέμ.','Παρ.','Σάβ.'],
		dayNamesMin: ['Κυ','Δε','Τρ','Τε','Πε','Πα','Σα'],
		weekHeader: 'Εβδ',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['el']);
});

