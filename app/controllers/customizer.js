// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function handleListViewClick(e){
    Ti.API.info('URLTEST:',e, elementData, e.sectionIndex, e.itemIndex);
	// var res = _.findWhere(elementData, {'sectionIndex':e.sectionIndex, 'itemIndex':e.itemIndex});
	// if(_.size(res)>0){
	// 	Ti.API.info('RES: ',res.url);
	// 	Ti.App.fireEvent('cage/launch/external',{url:res.url});
	// }
	

}


var elementData = [
	{'sectionIndex':0,'itemIndex':0, 'url':'https://www.facebook.com/CageFitness/', 'title':'My Title', 'accesoryType':'Ti.UI.LIST_ACCESSORY_TYPE_DETAIL' },	
	{'sectionIndex':0,'itemIndex':1, 'url':'https://www.youtube.com/user/CageFitness', 'title':'My Title', 'accesoryType':'Ti.UI.LIST_ACCESSORY_TYPE_DETAIL' },
	{'sectionIndex':0,'itemIndex':2, 'url':'https://twitter.com/cagefitness', 'title':'My Title', 'accesoryType':'Ti.UI.LIST_ACCESSORY_TYPE_DETAIL' },
	{'sectionIndex':1,'itemIndex':0, 'url':'https://cagefitness.com/about-us?app_embed#cage-faqs', 'title':'My Title', 'accesoryType':'Ti.UI.LIST_ACCESSORY_TYPE_DETAIL' },
	{'sectionIndex':1,'itemIndex':1, 'url':'https://cagefitness.com/contact?app_embed', 'title':'My Title', 'accesoryType':'Ti.UI.LIST_ACCESSORY_TYPE_DETAIL' },
	{'sectionIndex':2,'itemIndex':0, 'url':'https://cagefitness.com/app/help/terms-of-service', 'title':'My Title', 'accesoryType':'Ti.UI.LIST_ACCESSORY_TYPE_DETAIL' },
	{'sectionIndex':2,'itemIndex':1, 'url':'https://cagefitness.com/app/help/privacy-policy', 'title':'My Title', 'accesoryType':'Ti.UI.LIST_ACCESSORY_TYPE_DETAIL' },
];