var myModule = (function(){
	

	//Инициализируем наш модуль
	var init = function () {
		_setUpListners();
	};


	//Прослушивает события
	var _setUpListners = function() {
		$('#add-new_item').on('click', _showModal);// Открыть модальное окно
		$('#add-new-project').on('submit', _addProject);// добавление проекта

	};

	//Работает с модальным окном
	var _showModal = function (ev){
		console.log('Вызов модального окна');
		ev.preventDefault();
		var divPopup = $('#new-project-popup'),
			form = divPopup.find('.form');

		divPopup.bPopup({
			speed:1500,
			transition:'slideUp',
			onClose: function(){
				form.find('.server-mes').text('').hide();
			}
		});
	};

	//Добавляет проект
	var _addProject = function (ev){
		console.log('Добавление проекта');
		ev.preventDefault();

		//Объявление переменных
		var form = $(this),
			url = 'add-project.php',
			data = form.serialize();
			defObj =  _ajaxForm(form, url);

			if(defObj){
				defObj.done(function(ans){
					var successBox = form.find('.success-mes'),
						errorBox = form.find('.error-mes');


					if(ans.status === 'OK'){
						successBox.text(ans.text).show();
						errorBox.hide();


					}else{
						errorBox.text(ans.text).show();
						successBox.hide();
					}
				});
			}
	};


	//Универсальная функция которая:
	//Для её работы используется 
	//@form - форма
	//@url - адрес php файла к которому мы обращаемся
	//1.Собрать данные из формы
	//2.Проверяем форму
	//3.Делает запрос на сервер и возвращает  ответ с сервера
	var _ajaxForm = function(form, url){
		

		// if(!valid) return false;

		data = form.serialize();

		var result = $.ajax({
			url: url,
			type:'POST' ,
			dataType: 'json',
			data:data,
		}) .fail(function(){
				console.log("error");
			})

			
			return result;
	};

	return {
		init: init
	};
})();

myModule.init();