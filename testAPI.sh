#!/bin/bash

echo "REMEMBER TO SET ARTICLE_ID to a valid article ID before running this!"
ARTICLE_ID='5e496811d8bdc735c47692c2'

# GET /articles
curl http://localhost:8081/articles | jq .

# GET /articles/:id
curl http://localhost:8081/articles/$ARTICLE_ID | jq .

# POST /articles
curl -X POST -H "Content-Type: application/json" http://localhost:8081/articles -d '{
  "title": "The title",
  "subtitle": "The subtitle",
  "leadParagraph": "A lead paragraph",
  "imageUrl": "The image url",
  "body": "The body",
  "userId": "USER_ID",
  "date": "The creation or last modification date",
  "category": "The category"
}' | jq .

NEW_ID='5e496da9fd09c94d8a97f623'

# PUT /articles/:id
curl -X PUT -H "Content-Type: application/json" http://localhost:8081/articles/$NEW_ID -d '{
  "title": "The title!!!",
  "subtitle": "The subtitle!!",
  "leadParagraph": "A lead paragraph",
  "imageUrl": "The image url",
  "body": "The body",
  "userId": "USER_ID",
  "date": "The creation or last modification date",
  "category": "The category"
}' | jq .

# DELETE
curl -X DELETE http://localhost:8081/articles/$NEW_ID | jq .