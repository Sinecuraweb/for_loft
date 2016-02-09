var myModule = (function(){
	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function() {
		$('#add-new-item').on('click', _showModal);// Открыть модальное окно
	};


	var _showModal = function (){
		console.log('Вызов модального окна');
	};

	return {
		init: init
	};
})();

myModule.init();