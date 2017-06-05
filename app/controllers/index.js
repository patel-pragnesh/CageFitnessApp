var controls=require('controls');

// get main and menu view as objects
var menuView 		= controls.getMenuView();
var mainView 		= controls.getMainView();

var exerciseView 	= controls.getExerciseView();
var helpView 		= controls.getHelpView();
var profileView 	= controls.getProfileView();
// var workoutView 	= controls.getWorkoutView();
var externalView 	= controls.getExternalView();

var menuitems = [];
menuitems['menu_builder'] = {view:mainView};
menuitems['menu_exercises']= {view:exerciseView};
menuitems['menu_help']= {view:helpView};
menuitems['menu_profile']= {view:profileView};
menuitems['menu_external']= {view:externalView};
// menuitems['menu_workouts']= {view:workoutView};

var progress_state = false;


function progressHideShow(a,b){
	if($.dl_progress.opacity!=1){
		$.dl_progress.opacity=1;
	}
	if( (a-1) == b ){
		$.dl_progress.opacity=0;
	}
}


function LaunchLogin(e) {
	Ti.API.info('LOGIN LAUNCHED: ');
    var win = Alloy.createController('login').getView();
    win.open({modal:true});
    Alloy.Globals.modalWindow = win;
}
Ti.App.addEventListener('cage/launch/login', LaunchLogin);

function LaunchWindow(e) {
	Ti.API.info('KEY: ', e.key);
    var win = Alloy.createController('window').getView();
    win.open({transition : Ti.UI.iOS.AnimationStyle.FLIP_FROM_LEFT});
    Alloy.Globals.modalWindow = win;
}
Ti.App.addEventListener('cage/launch/window', LaunchWindow);


Ti.App.addEventListener('cage/topbar/menu_button/close', function(e){
	Ti.API.info('WTYPE: ', e.window_type);
	if(e.window_type == 'modal'){
		// var w = Alloy.Globals.modalWindow;
		// w.close();
		// w.remove(w.loaded_view);
		// w.loaded_view = null;
	}
	else{
		$.drawermenu.showhidemenu();
		$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
	}

});

Ti.App.addEventListener('cage/external/link', handleExternal);



Ti.App.addEventListener('cage/downloadmanager/progress', function(e){
	
	$.dl_progress_text.text = e.percent_pretty + ' | ' + e.bps_pretty;
	$.dl_progress_bar.width = e.percent_pretty + '%';
	Ti.API.info('OVERALL: ', e.overall.total, e.overall.downloaded, e.overall.remaining);

	$.pb.value = e.overall.downloaded;
	$.pb.min = 0;
	$.pb.max = e.overall.total;
	progressHideShow($.pb.max,$.pb.value);

});


function handleExternal(e){
	Ti.API.info('HELLO WORLD:', e, e.itemIndex);
}

function initWindowButtons(items){
	for (each in items){
		var v = items[each].view;
		Ti.API.info("MENU.ITEMS: ",each);
	}
}

function getMenuObject(item){
	return menuitems[item].view;
}

function handleMenuClickEvent(e){

    $.drawermenu.showhidemenu();
    $.drawermenu.menuOpen = false;

	clicked_view = getMenuObject(e.rowData.id);
	Ti.API.info('CURRENT CHILDREN BEFORE: ',$.drawermenu.drawermainview.children)
	if( e.rowData.id == default_view ){
		if(active_page != default_view){
			Ti.API.info('CASE.01.01', 'active_page: '+active_page);
			$.drawermenu.drawermainview.remove( getMenuObject(active_page).getView() );
			active_page = default_view;
		}
		else{
			Ti.API.info('CASE.01.02', 'active_page: '+active_page);
			active_page = default_view;
		}
	}
	else{
		if( active_page != e.rowData.id ){
			Ti.API.info('CASE.02.01', 'active_page: '+active_page);
			if(active_page != default_view){
				$.drawermenu.drawermainview.remove( getMenuObject(active_page).getView() );
			}
			$.drawermenu.drawermainview.add( clicked_view.getView() );
			active_page = e.rowData.id;
		}
		else{
			Ti.API.info('CASE.02.02', 'active_page: '+active_page);
			active_page = e.rowData.id;
		}

	}
	
	Ti.API.info('CURRENT CHILDREN AFTER: ',$.drawermenu.drawermainview.children)
    Ti.API.info(e.rowData.id); 
}



initWindowButtons(menuitems);
$.drawermenu.init({
    menuview:menuView.getView(),
    mainview:mainView.getView(),
    duration:200,
    parent: $.index
});


var default_view = 'menu_builder'
var active_page = 'menu_builder';
var activeView = 1;

menuView.menuTable.addEventListener('click',handleMenuClickEvent);

$.index.open();

Ti.App.fireEvent('cage/launch/login');

