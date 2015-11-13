# Simple Google Extension Example

This is an example app that represents comunication between Google Chrome Extension and web application.
All comunication is done via JSON-RPC.

## Web application

It is simple one page Jekyll based web application.

### Install Jekyll gem

```sh
gem install jekyll
```


### Start web app:

```sh
$ jekyll s
```

## Google chrome extension

### Install the extension:

After you download project folder open your chrome browser, click on the settings icon and navigate to 'More tools' > 'Extensions'.
Enable developer mode by clicking on checkbox in top right corner of the page. Then click on the 'Load unpacked extension...' button and find the folder called 'extension' in your project destination folder.
Select 'extension' folder and click 'Open' button.
That's it, your extension is enabled by default and ready to comunicate with our simple web page.

## Comunication

For the first iteration we implemented two methods for comunication between extension and web app.
Both of them works in the same way; In one end we have an event that sends a message, and in the other end we have an event listener that receives that same message.

### Send organizations

This method will send a message for each element in the mock array of objects of approved/blocked organizations from google extension, and we have a listener that will catch that message on our web app and alter our view based on the received information.

### Update single organization

Similar as the method above we have a method that sends a message and listener on the other side to catch it, but this time it's the other way around.
Message with single organization and it's attributes(id and user's action) will be sent as a message from web app, and listener on the extension will catch it.
For now we only show received information in Chrome's console for pure demonstration. 