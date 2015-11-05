# Simple Google Extension Example

This is an example app that represents comunication between google chrome extension and web application.
All comunication is done via jsonrcp.

## Web application

It is simple one paged jekyll based web application.

### Start web app:

```sh
$ jekyll s
```

## Google chrome extension

### Install the extension:

After you download project folder open your chrome browser, click on the settings icon and navigate to 'More tools' > 'Extensions'.
Then click on the 'Load unpacked extension...' button and find the folder called 'extension' in your project destination folder.
Select 'extension' folder and click 'Open' button.
That's it, your extension is enabled by default and ready to comunicate with our simple web page.

## Comunication

For the first iteration we implemented two methods for comunication between extension and web app.
Both of them works in the same way; In one end we have a event that sends a message, and in the other end we have event listener that receives that same message.

### Send organizations

This method will send a message with mock object of approved/blocked organizations from google extension, and we have a listener that will catch that message on our web app and alter our view based on the received information.

### Update single organization

Similar as the method above we have a method that sends a message and listener on the other side to catch it, but this time it's other way around.
Message with single organization and it's attributes(id and user's action) will be sent as a message from web app, and listener on the extension will catch it.
For now we only show received information in chrome's console for pure demonstration. 