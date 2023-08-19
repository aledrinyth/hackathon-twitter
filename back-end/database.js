/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'database';
const collection = 'user_collection';
const tweet = 'tweet_collection';

// The current database to use.
use(database);


db[collection].insertOne({

    username: "john_doe",
    email: "john@example.com",
    user_id: "johndoe",
    first_name: "john",
    last_name: "doe"

});

db[tweet].insertOne({
    'tweet_id':'hellothere',
    user_id:'',
    content:'',
    timestamp:''
});


// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
