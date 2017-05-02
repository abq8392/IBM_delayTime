from flask import Flask
from flask import render_template
from flask import request
import json
from watson_developer_cloud import AuthorizationV1
from watson_developer_cloud import SpeechToTextV1

app = Flask(__name__)
app.config.update(
	TEMPLATES_AUTO_RELOAD = True
)

@app.route("/")
def index(token = None):
	authorization = AuthorizationV1(
	    username='340ed380-e330-439f-b7e8-1383e16367e8',
	    password='HzoBlN2H5dEX'
	)

	# print(json.dumps(authorization.get_token(url=SpeechToTextV1.default_url), indent=2))
	# token = json.dumps(authorization.get_token(url=SpeechToTextV1.default_url), indent=2)
	token = authorization.get_token(url=SpeechToTextV1.default_url)
	print(token)	
	return render_template('index.html', token = token)


if __name__ == "__main__":
    # app.run(host='0.0.0.0')
    app.run()

