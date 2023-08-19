from flask import Flask,jsonify, request
import database
app = Flask(__name__)

@app.route("/")
def flask_hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run(port=8000, debug=True)

@app.route('/users', methods=['GET'])
def get_users():
    users = database.get_all_users()
    return jsonify(users)

@app.route('/users', methods=['POST'])
def create_user():
    user_data = request.json
    user_id = database.insert_user(user_data)
    return jsonify({"_id": str(user_id)})

@app.route('/users/<user_id>', methods=['PUT'])
def update_user(user_id):
    user_data = request.json
    database.update_user(user_id, user_data)
    return jsonify({"message": "User updated"})

@app.route('/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    database.delete_user(user_id)
    return jsonify({"message": "User deleted"})

if __name__ == '__main__':
    app.run(debug=True)

