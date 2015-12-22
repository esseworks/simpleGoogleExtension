chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
	  	switch(request.message.method) {
		    case "init_extension":
		        sendResponse({message: {
		            "jsonrpc": "2.0",
		            "method": "extension_initiated",
		            "id": null
		        }});
		        break;
		    case "get_user_token":
		        sendResponse({message: {
		            "jsonrpc": "2.0",
		            "method": "set_user_token",
		            "params": {"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjo2fSwiZXhwIjoxNDUyOTQwMjMyfQ.F8_4mcz0Q4GGit7hT9A1dhoXs4Ooh6zFj2_dJhNf8bk"},
		            "id": null
		        }});
		        break;
	        case "update_organization":
	        	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				    chrome.tabs.sendMessage(tabs[0].id, {message: {
				    	"jsonrpc": "2.0",
		                "method": 'update_organization',
		                "params": request.message.params,
		                "id": request.message.id
				    }});
				});
				break;
	    }
    }
);	