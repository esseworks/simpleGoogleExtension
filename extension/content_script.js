chrome.runtime.onMessage.addListener(
    function(request, sender) {
        if (request.message.method == "update_organization") {
            console.log("Organization ID:", request.message.id);
            console.log("Action:", request.message.params.action);
        }
    }
);