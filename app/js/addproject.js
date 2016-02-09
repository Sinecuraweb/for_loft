var myModule = (function(){
	
	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function() {
		$('#add-new_item').on('click', _showModal);// Открыть модальное окно
		$('#add-new-project').on('submit', _addProject);// добавление проекта

	};


	var _showModal = function (ev){
		console.log('Вызов модального окна');
		ev.preventDefault();
		$('#new-project-popup').bPopup({
			speed:1500,
			transition:'slideUp'
		});
	};

	var _addProject = function (ev){
		console.log('Вызов модального окна');
		ev.preventDefault();
		//Объявление переменных
		var form = $(this),
			url = 'add-project.php',
			data = form.serialize();

		//Запрос на сервер
		$.ajax({
			url: 'add-project.php',
			type:'POST' ,
			dataType: 'json',
			data:data,
		})
			.done(function(ans){
				console.log("success");
			})

			.fail(function(){
				console.log("error");
			})
			.always(function(){
				console.log("complete");
			});

	};

	return {
		init: init
	};
})();

myModule.init();