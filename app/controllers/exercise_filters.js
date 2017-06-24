// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var log = require("log");

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
    
})();

function tabEquipment(e) {

	var slug = e.source.labels[e.index].slug;
	var ttid = e.source.labels[e.index].ttid;
	log.args('Filter Equipment: ', e.source.labels[e.index]);
	Ti.App.fireEvent('cage/exercise/filter',{'filter':'exercise_equipment','ttid':ttid});
}

function tabExerciseType(e) {

	var slug = e.source.labels[e.index].slug;
	var ttid = e.source.labels[e.index].ttid;
	log.args('Filter Types: ', e.source.labels[e.index]);
	Ti.App.fireEvent('cage/exercise/filter',{'filter':'exercise_type','ttid':ttid});
}

function tabAll(e) {

	var slug = e.source.labels[e.index].slug;
	var ttid = e.source.labels[e.index].ttid;
	log.args('Filter All: ', e.source.labels[e.index]);
	Ti.App.fireEvent('cage/exercise/filter',{'filter':'all','ttid':ttid});
}

function performSearch(e){
	Ti.API.info('SEARCH.TRIGGERED', e);
	Ti.App.fireEvent('cage/exercise/filter',{'filter':'all', 'search':e.value});
}

function tabTaxonomy(e) {
	Ti.API.info('TAXONOMY: ',e);

	$.filter_equipment.hide();
	$.filter_type.hide();


	if(e.index === 0){
		Ti.App.fireEvent('cage/exercise/filter',{'filter':'all'});
	}
	if(e.index === 1){
		$.filter_equipment.show();
		Animation.shake($.filter_equipment);
	}
	if(e.index === 2){
		$.filter_type.show();	
		Animation.shake($.filter_type);	
	}
}


