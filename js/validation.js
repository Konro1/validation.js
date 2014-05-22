/* Yuriy Myrosh Validation Plugin */

(function ($) {

	$.fn.validate = function (config) {
		config                = config || {};
		config.error_required = config.error_required || 'field is required'; 
		config.error_min      = config.error_min || 'minimum value is: '; 
		config.error_max      = config.error_max || 'maximum value is: '; 
		config.error_email    = config.error_email || 'not valid email';
		config.error_class    = config.error_class || 'error'; 
		config.error_tag      = config.error_tag || 'span'; 

		var valid = 1;
		var elements = $(this).find('.validate');
		$(this).find('.'+config.error_class).remove();
		$.each(elements, function(index,element) {
			var val = $(element).val();

			if ($(element).attr('min') && val.length < $(element).attr('min')) {
				$(element).next('.'+config.error_class).remove();
				$(element).after('<'+config.error_tag+' class="'+config.error_class+'">'+config.error_min+$(element).attr('min')+'</'+config.error_tag+'>');
				valid = 0;
			}

			if ($(element).attr('max') && val.length >= $(element).attr('max')) {
				
				$(element).after('<'+config.error_tag+' class="'+config.error_class+'">'+config.error_max+$(element).attr('max')+'</'+config.error_tag+'>');
				valid = 0;
			}

			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			if ($(element).attr('email') && !pattern.test(val)) {
				$(element).next('.'+config.error_class).remove();
				$(element).after('<'+config.error_tag+' class="'+config.error_class+'">'+config.error_email+'</'+config.error_tag+'>');
				valid = 0;	
			}

			if ($(element).attr('required') && val.length <= 0) {
				$(element).next('.'+config.error_class).remove();
				$(element).after('<'+config.error_tag+' class="'+config.error_class+'">'+config.error_required+'</'+config.error_tag+'>');
				valid = 0;
			} 
		});

return valid;
}
})(jQuery)