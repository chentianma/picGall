from flask import Flask
from flask import render_template, url_for


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('test.html')


if __name__ == '__main__':
    app.run(debug=True)
