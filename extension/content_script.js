$(function () {
	console.log('yes');
	var storedOrganizations = [
		{id: '1244gyhjae65Puma', action: 'approve'},
		{id: '92nngsdMicrosoft', action: 'block'},
		{id: 'k3206msfnk21Nike', action: 'block'},
		{id: '24g5MercedesBenz', action: 'approve'}
	];

	$.each(storedOrganizations, function(index, value) {
		console.log(value);
		sendOrganization(value.id, value.action);
	});
	

	function sendOrganization(orgId, orgAction) {
		window.postMessage({
			"jsonrpc": "2.0", 
			"method": "send_organizations", 
			"params": 
			{
				action: orgAction
			}, 
			"id": orgId 
		}, "*");
	}
});
var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
	if (event.data.method == "update_organization") {
		console.log("Organization ID:", event.data.id);
		console.log("Action:", event.data.params.action);
	}
}, false);

