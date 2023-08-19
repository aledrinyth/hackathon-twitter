import requests
import json
url = "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-fdnxh/endpoint/data/v1/action/find"

payload = json.dumps({
    "collection": "tweet_collection",
    "database": "database",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1,
        "tweet_id": 1},
    "filter": {
      "text": "hellothere"
    }

    
})
headers = {
  'Content-Type': 'application/json',
  'Access-Control-Request-Headers': '*',
  'api-key': 'K8g1EJKe8eplDZCfMbwauWNJHWVOdBOpZFUqf13pMnFMhm40ggjB6apSTBuze8NC',
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
