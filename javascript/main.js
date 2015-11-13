$(function () {

	$('.organization-action').on('click', function() {
		window.postMessage({ 
			"jsonrpc": "2.0", 
			"method": "update_organization",
			"params": 
			{
				"action": $(this).data('action')
		 	},
			"id": $(this).data('id')
		}, "*");	
	});
});

window.addEventListener("message", function(event) {
	if (event.data.method == "send_organizations") {
		var action_string = 'Alredy approved';
		var $single_org = $("[data-id='" + event.data.id + "']").parent();
		$single_org.find("[data-action='" + event.data.params.action + "']").hide();
		if (event.data.params.action != 'approve') {
			action_string = 'Already blocked';
		}
		$single_org.find('.voted').html(action_string);
	}
}, false);