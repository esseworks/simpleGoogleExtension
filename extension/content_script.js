$(function () {
	var storedOrganizations = [
		{id: '1244gyhjae65Puma', action: 'approve'},
		{id: '92nngsdMicrosoft', action: 'block'},
		{id: 'k3206msfnk21Nike', action: 'block'},
		{id: '24g5MercedesBenz', action: 'approve'}
	];
	window.postMessage({
		"jsonrpc": "2.0", 
		"method": "send_organizations", 
		"params": [storedOrganizations], 
		"id": null 
	}, "*");
});
var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
	if (event.data.method == "update_organization") {
		console.log("Organization ID:", event.data.params.organization_id);
		console.log("Action:", event.data.params.action);
	}
}, false);

