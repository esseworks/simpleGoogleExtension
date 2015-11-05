Simple Google Extension Example
===============================

This is an example app that represents comunication between google chrome extension and web application.
All comunication is done via jsonrcp.

Web application
---------------

It is simple one paged jekyll based web application.

Start web app:

```sh
$ jekyll s
```

Google chrome extension
-----------------------

Install the extension:

After you download project folder open your chrome browser, click on the settings icon and navigate to 'More tools' > 'Extensions'
Then click on the 'Load unpacked extension...' button and find the folder called 'extension' in your project destination folder.
Select 'extension' folder and click 'Open' button.
That's it, your extension is enabled by default and ready to comunicate.