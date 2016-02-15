var validation;
validation = function () {

//Инициализируем наш модуль
	var init = function () {
		_setUpListners();
	};

	//Просшулка событий
	var _setUpListners = function () {
		$('form').on('keydown', 'has-error', _removeError);
		$('form').on('reset', _clearForm);
	};


	var _removeError = function () {
		$(this).removeClass('has-error')
	};


	//Очищаем по кнопке резет

	var _clearForm = function (form) {
		var form = $(this);
		form.finf('.input, .textarea').trigger('hideTooltip');
		form.finf('.has-error').removeClass('has-error');
	};

	//Создаем тултипы
	var _createQtip = function (elementm, position) {


		//Позиция тултипа
		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			}
		} else {
			position = {
				my: 'right center',
				at: 'left center',
				adjust: {
					method: 'shift none'
				}
			}
		}


		//Инициализация тултипа, апи qtip

		element.qtip({
			content: {

				//Текст для тултипа
				text: function () {
					return $(this).attr('qtip-content');
				}
			},

			show: {
				event: 'show'
			},
			hide: {
				//Как нажимаем на любую кнопку пропадает тултип
				event: 'keydown hideTooltip'
			},

			position: position,

			style: {
				classes: 'qtip-mysyle qtip-rounded',

				tip: {
					height: 10,
					width: 16
				}
			}

			//Выхываем показ тултипа
		}).trigger('show');

	};

	var validateForm = function (form) {
		var elements = form.find('input, textarea').not('input[type="file", input[type="hidden"]'),
			valid = true;
		console.log('я в домикеы')


		// Проходим по все элементам форма
		$.each(elements, function (index, val) {
			var element = $(value),
				val = element.val(),
				pos = element.attr('qtip-position');

			if (vl.length === 0) {
				element.addClass('has-error');
				_createQtip(element, pos);
				valid = false;
			}

		});
		return valid;
	};

	return {
		init: init,
		validateForm: validateForm
	};
}
