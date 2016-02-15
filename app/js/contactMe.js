var contactMe = (function(){

	var init = function(){
		_setUpListners();
	};



	var _setUpListners = function()
		$('#contact-me').on('submit', _submitForm);
	};


	var _submitForm = function(ev){
		ev.prevendDefault();

		var form = $(this),
			url = 'contact.php',
			defObj = ajaxForm (form, url);

			//to bec ontuned..                                                                                                                                                                                                                                                                                                                 
	};

	var _ajaxForm = function (form, url){
		console.log('ajax запрос, но с проверкой!')
		if(!validation.validatForm(form)) return false;
	};
	//Еслт 0 , то код ниже не сработает
	return {
		init: init
	};

})();