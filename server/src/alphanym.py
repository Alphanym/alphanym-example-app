
import requests

from urllib.parse import urljoin
from copy import deepcopy

API_ROOT = 'https://www.alphanym.com/api/v0/'

class AlphanymException(Exception):
    def __init__(self, data):
        super().__init__()
        self._data = data

    def data(self):
        return deepcopy(self._data)

def query(token, name, email=None):
    """
    Query the Alphanym API, to parse anyone's name into semantically significant parts.
    """

    url = _alphanym_url('english/query/')

    body = {
        'token': token,
        'name': name,
        'email': email,
    }

    return _alphanym_request(url, body)

def feedback(token, name, email=None, alphaname=None, betaname=None, gammaname=None):
    """
    Correct a mistake Alphanym made when attempting to parse a name.
    """

    url = _alphanym_url('english/feedback/')

    body = {
        'token': token,
        'name': name,
        'email': email,
        'alphaname': alphaname,
        'betaname': betaname,
        'gammaname': gammaname,
    }

    return _alphanym_request(url, body)

def _alphanym_url(path):
    return urljoin(
        API_ROOT,
        path,
    )

def _alphanym_request(url, body):
    try:
        response = requests.post(
            url,
            json=body,
        )
    except requests.RequestException as exc:
        raise AlphanymException(exc.response.json())
    else:
        return response.json()
