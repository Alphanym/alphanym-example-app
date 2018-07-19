# Alphanym Example App
This application demonstrates a full-stack integration with the [Alphanym](https://www.alphanym.com) service.

## Installation
This is a full-stack integration, so we assume you have [Git](https://git-scm.com/), [node](https://nodejs.org/en/)/[npm](https://www.npmjs.com/), and [Python 3](https://www.python.org/) installed already.

```sh 
git clone https://github.com/Alphanym/alphanym-example-app.git
cd ./alphanym-example-app/server
pip install -r ./requirements.txt
cd ../web-client
npm install
```

## Running the Application
Running the application requires that you start the front-end and back-end servers.

### Start Front-End Server
In the `web-client` directory, start the frontend server by running `npm start`. This will serve the example web page over `http://localhost:8000`. 

### Start Back-End Server
To run the server you must first obtain your [API keys](https://www.alphanym.com/subscribe). Once you have your key run `export ALPHANYM_SECRET_KEY='alphanym-token-some-random-chars'`.
This authorizes the back-end server to communicate with Alphanym. Once your keys are installed change to the `server` directory, then run `python3 src/app.py`.

## Testing
Once you have both servers up and running, you should be able to visit `http://localhost:8000/` and try out the demo.

Enter `Charles Darwin` into the Alphanym field, and the application should greet you with `Hello Charles!`

