from flask import Flask
from db import db_userid

app = Flask(__name__)

@app.route("/")
def flask_hello():
    return "Homepage link of the website"

# @app.route("/tweet")
# def post_tweet(user_id):
    
if __name__ == "__main__":
    app.run(port=8000, debug=True)
    ...
    