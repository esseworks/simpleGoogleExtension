$(function () {

	$('.organization-action').on('click', function() {
		window.postMessage({ 
			"jsonrpc": "2.0", 
			"method": "update_organization",
			"params": {
				"action": $(this).data('action'),
				"organization_id": $(this).data('id')},
			"id": null
		}, "*");	
	});
});

window.addEventListener("message", function(event) {
	if (event.data.method == "send_organizations") {
		$.each(event.data.params[0], function(index, value) {
			console.log(value);
			var action_string = 'Alredy approved';
			var $single_org = $("[data-id='" + value.id + "']").parent();
			$single_org.find("[data-action='" + value.action + "']").hide();
			if (value.action != 'approve') {
				action_string = 'Already blocked';
			}
			$single_org.find('.voted').html(action_string);
		});
	}
}, false);