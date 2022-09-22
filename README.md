# doodle-app
Simple Doodle app.

## Install http-server
To spin up the application, install http-server using npm *or* Homebrew (no need to do both):

**npm**

```
npm install --global http-server
```

**Homebrew**

```
brew install http-server
```

## Run the server locally
Ensure you are inside the folder ```doodle-app``` if you are not already. 

Run the following command:

```
http-server
```

You should see the server start, as well as a message saying which IP address is being used. It may look something like:

```
Available on:
  http://127.0.0.1:8080
  http://192.168.0.17:8080
```

Copy and paste either of those addresses into your browser. The default is ```http://127.0.0.1:8080``` or equivalently, ```http://localhost:8080/```. You should now be able to see the Doodle app in your browser!

## Citations
Code is all original, some concepts are from
https://css-tricks.com/indeterminate-checkboxes/ and https://stackoverflow.com/questions/24322599/why-cannot-change-checkbox-color-whatever-i-do/69057542#69057542
