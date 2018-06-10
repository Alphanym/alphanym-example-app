
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
    try:
        apitoken = os.environ['ALPHANYM_SECRET_KEY']
    except KeyError:
        raise RuntimeError('Set the environment variable `ALPHANYM_SECRET_KEY` with your Alphanym API key')
    else:
        try:
            nametext = request.json['name']
        except (KeyError, TypeError):
            return (json.dumps({}), 400)
        else:
            if isinstance(nametext, str):
                try:
                    alphanym_query_results = alphanym.query(apitoken, nametext)
                except alphanym.AlphanymException:
                    alphanym_query_results = {
                        'name': nametext,
                        'alphanym': nametext,
                        'betanym': nametext,
                    }

                return json.dumps(alphanym_query_results)
            else:
                return (json.dumps({}), 400)

app.run()

