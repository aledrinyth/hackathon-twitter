from pymongo import MongoClient

uri = "mongodb+srv://hello:there@cluster0.79ymkqj.mongodb.net/?retryWrites=true&w=majority"  # Replace with the MongoDB cluster URI

client = MongoClient(uri)

#client = MongoClient('localhost', 8000)
db = client['twitter_clone']
users_collection = db['users']
tweet = db["tweets"]

def get_data():
    db = client['database']  # Replace with your database name
    collection = db['user_collection']  # Replace with your collection name
    return list(collection.find({}))


def get_all_users():
    users = list(users_collection.find({}))
    for user in users:
        user['_id'] = str(user['_id'])
    return users

def insert_user(user_data):
    result = users_collection.insert_one(user_data)
    return result.inserted_id

def update_user(user_id, user_data):
    users_collection.update_one({"_id": user_id}, {"$set": user_data})

def delete_user(user_id):
    users_collection.delete_one({"_id": user_id})

# sample user
db.users.insert_one({
    "username": "john_doe",
    "email": "john@example.com",
    "user_id": "johndoe",
    "first_name": "john",
    "last_name": "doe"
})

db.tweets.insert_one({
    "tweet_id": "",
    "user_id": "",
    "timestamp": "",
    "content": ""

})

