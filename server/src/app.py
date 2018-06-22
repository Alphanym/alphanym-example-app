
import alphanym
import json
import os

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)

# Add CORS HTTP headers, so the web client can send request to the server, even though it's served over a distinct
# port.
CORS(app)

@app.route('/query/', methods=['POST'])
def query():
    apitoken = _get_api_token()

    try:
        query_results = alphanym.query(
            apitoken,
            request.json,
        )
    except alphanym.AlphanymException:
        return (json.dumps({}), 400)
    else:
        return json.dumps(query_results)

@app.route('/feedback/', methods=['POST'])
def feedback():
    apitoken = _get_api_token()

    try:
        feedback_results = alphanym.feedback(
            apitoken,
            request.json,
        )
    except alphanym.AlphanymException:
        return (json.dumps({}), 400)
    else:
        return json.dumps(feedback_results)

def _get_api_token():
    try:
        return os.environ['ALPHANYM_SECRET_KEY']
    except KeyError:
        raise RuntimeError('Set the environment variable `ALPHANYM_SECRET_KEY` with your Alphanym API key')

app.run()
