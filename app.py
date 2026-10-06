from flask import Flask, abort, make_response, send_from_directory
import os

# Get the directory where this script lives
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# The page loads its words from shared/ and its screenshots from media/. Only these folders are served.
PUBLIC_DIRS = ('shared', 'media')

app = Flask(__name__)

@app.route('/')
def index():
    # Read file directly to avoid any caching issues
    with open(os.path.join(BASE_DIR, 'index.html'), 'r', encoding='utf-8') as f:
        html = f.read()
    response = make_response(html)
    response.headers['Content-Type'] = 'text/html; charset=utf-8'
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

@app.route('/<folder>/<path:name>')
def asset(folder, name):
    if folder not in PUBLIC_DIRS:
        abort(404)
    response = send_from_directory(os.path.join(BASE_DIR, folder), name)
    # always revalidate: a retaken screenshot keeps its file name, and an hour of browser cache
    # made the live site show the old one after a deploy (an unchanged file still answers 304)
    response.headers['Cache-Control'] = 'no-cache'
    return response

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
