$(document).ready(function() {
	$("#confirm").click(function(e) {
		e.preventDefault();
		var validation = $("#form").validate({
			'error_required' : 'req',
		});

		if (validation) {
			$("#form").submit();
		};
	});
	
});