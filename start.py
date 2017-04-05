from flask import Flask
from flask import render_template
from flask import request
import json

app = Flask(__name__)
app.config.update(
	TEMPLATES_AUTO_RELOAD = True
)

@app.route("/")
def index():
	return render_template('index.html')


if __name__ == "__main__":
    # app.run(host='0.0.0.0')
    app.run()

