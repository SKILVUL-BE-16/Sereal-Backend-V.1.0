# Web Service & RESTful API Sereal Application by BE-16

## Built With

- express.js
- mongodb
- mongoose
- jsonwebtoken (jwt)
- bcrypt

## ERD

![Sereal ERD](SEREAL_ERD.png)

## Deploy Site

- [.up.railway.]()

## API Documentation

- [Open API spesification file](/api/sereal.json)
  atau lewat swagger hub
- [Swagger Hub sereal api spesification]()

## APIs Specification

- **Base URL API** : https://www

### Authentication

There are two roles: **user** and **admin**.
As **user**, you can register, login and use almost all API GET method. As **admin**, you can use all API available.

To use API as **admin**, first **register** yourself and then **contact** developers to change your role.

To use API as **admin**, use this :
Request:

- Header:
  - x-access-token : "your unique jwt token"
- and other additional headers depend on the usecase

Otherwise you will get:

- Response:
- status code: **403**

```json
{
    "A token is required for authentication"
}
```

### Register
Request:
- Method : **POST**
- Endpoint : `/register`
- Body :

```json
{
  "name": "string, length> 0",
  "email": "string, must have @, length >3",
  "password": "string, length> 0"
}
```

Response:
- status code: **201**

```json
{
  "message": "data has been created!!"
}
```

- status code: **406**

```json
{
  "message": "Data doesn't meet the standards of required fields"
}
```

- status code: **500**

```
{
    "message": "string",
    "error": "string",
}
```

### Login
Request:
- Method : POST
- Endpoint : /login
- Body :

```json
{
  "email": "string, must have @",
  "password": "string"
}
```

Response:
- status code: **200**

```json
{
  "message": "string",
  "token": "string"
}
```

- status code: **404**

```json
{
  "message": "string"
}
```

- status code: **400**

```json
{
  "message": "string"
}
```

- status code: **500**

```json
{
  "message": "string",
  "error": "string"
}
```

### Materi

#### Get All Materi

Request :

- Method: **GET**
- Endpoint: `/materi `
- Header:
  - accept:application/json

Response :

- Status code: **200**

```json
{
    "massage":"string",
    "data":[
        {
            "id":"string, unique",
            "title":"string",
            "body":"string",
            "content":{
                "image":"[string]",
                "video":"[string]"
            },
            "status":boolean
        },
        {
            "id":"string, unique",
            "title":"string",
            "body":"string",
            "content":{
                "image":"[string]",
                "video":"[string]"
            },
            "status":boolean
        }
    ]
}
```

- Status code: **500**

```json
{
  "message": "string",
  "error": "string"
}
```

#### Get Materi by ID

Request :

- Method: **GET**
- Endpoint: `/materi/{materi_id}`
- Header:
  - accept:application/json

Response:

- Status code: **200**

```json
{
    "massage":"string",
    "data":{
            "id":"string, unique",
            "title":"string",
            "body":"string",
            "content":{
                "image":"[string]",
                "video":"[string]"
            },
            "status":boolean
    }

}
```

- Status code: **400**

```json
{
  "message": "string"
}
```

#### Create Materi

Request :

- Method: **POST**
- Endpoint: `/materi`
- Header:
  - Content-type:application/json
  - accept:application/json
  - x-access-token = "token"
- Body:

```json
{
    "id":"string, unique",
    "title":"string",
    "body":"string",
    "content":{
        "image":"[string]",
        "video":"[string]"
    },
    "status":boolean
}
```

Response:

- Status code: **201**

```json
{
  "message": "string"
}
```

- Status code: **500**

```json
{
  "message": "string",
  "error": "string"
}
```

#### Update Materi

Request :

- Method: **PATCH**
- Endpoint: `/materi/{materi_id}`
- Header:
  - Content-type:application/json
  - accept:application/json
  - x-access-token = "token"
- Body:

```json
{
    "title":"string",
    "body":"string",
    "content":{
        "image":"[string]",
        "video":"[string]"
    },
    "status":boolean
}
```

Responses:

- Status code: **201**

```json
{
  "message": "string"
}
```

- Status code: **500**

```json
{
  "message": "string",
  "error": "string"
}
```

#### Delete Materi

Request :

- Method: **Delete**
- Endpoint: `/materi/{materi_id}`
- Header:
  - accept:application/json
  - x-access-token = "token"

Response:

- Status code: **200**

```json
{
  "message": "string"
}
```

- Status code: **404**

```json
{
  "message": "string",
  "error": "string"
}
```

### Kelas

#### Get All Kelas

Request :

- Method: **GET**
- Endpoint: `/kelas `
- Header:
  - accept:application/json

Response :

- Status code: **200**

```json
{
    "massage":"string",
    "data":[
        {
            "id":"string, unique",
            "title":"string",
            "description":"string",
            "materi":[
              {
                  "id":"string, unique",
                  "title":"string",
                  "body":"string",
                  "content":{
                      "image":"[string]",
                      "video":"[string]"
                  },
                  "status":boolean
              },
              {
                  "id":"string, unique",
                  "title":"string",
                  "body":"string",
                  "content":{
                      "image":"[string]",
                      "video":"[string]"
                  },
                  "status":boolean
              }
            ],
            "categories":[
              {
                "id":"string, unique",
                "name":"string"
              },
              {
                "id":"string, unique",
                "name":"string"
              }
            ],
            "level":"string"
            "status":boolean
        },
        {
            "id":"string, unique",
            "title":"string",
            "description":"string",
            "materi":[
              {
                  "id":"string, unique",
                  "title":"string",
                  "body":"string",
                  "content":{
                      "image":"[string]",
                      "video":"[string]"
                  },
                  "status":boolean
              },
              {
                  "id":"string, unique",
                  "title":"string",
                  "body":"string",
                  "content":{
                      "image":"[string]",
                      "video":"[string]"
                  },
                  "level":"string"
                  "status":boolean
              }
            ],
            "categories":[
              {
                "id":"string, unique",
                "name":"string"
              },
              {
                "id":"string, unique",
                "name":"string"
              }
            ],
            "level":"string",
            "status":boolean
        }
    ]
}
```

- Status code: **500**

```json
{
  "message": "string",
  "error": "string"
}
```

#### Get Kelas by ID

Request :

- Method: **GET**
- Endpoint: `/kelas/{kelas_id}`
- Header:
  - accept:application/json

Response:

- Status code: **200**

```json
{
    "massage":"string",
    "data":{
            "id":"string, unique",
            "title":"string",
            "description":"string",
            "materi":[
              {
                  "id":"string, unique",
                  "title":"string",
                  "body":"string",
                  "content":{
                      "image":"[string]",
                      "video":"[string]"
                  },
                  "status":boolean
              },
              {
                  "id":"string, unique",
                  "title":"string",
                  "body":"string",
                  "content":{
                      "image":"[string]",
                      "video":"[string]"
                  },
                  "status":boolean
              }
            ],
            "categories":[
              {
                "id":"string, unique",
                "name":"string"
              },
              {
                "id":"string, unique",
                "name":"string"
              }
            ],
            "level":"string",
            "status":boolean
        }

}
```

- Status code: **400**

```json
{
  "message": "string"
}
```

#### Create Kelas

Request :

- Method: **POST**
- Endpoint: `/kelas`
- Header:
  - Content-type:application/json
  - accept:application/json
  - x-access-token = "token"
- Body:

```json
{
    "title":"string",
    "description":"string",
    "materi":[objectID],
    "categories":[objectID],
    "level":"string",
    "status":boolean
}
```

Response:

- Status code: **201**

```json
{
  "message": "string"
}
```

- Status code: **500**

```json
{
  "message": "string",
  "error": "string"
}
```

#### Update Kelas

Request :

- Method: **PATCH**
- Endpoint: `/kelas/{kelas_id}`
- Header:
  - Content-type:application/json
  - accept:application/json
- Body:

```json
{
    "title":"string",
    "description":"string",
    "materi":[objectID],
    "categories":[objectID],
    "level":"string",
    "status":boolean
}
```

Responses:

- Status code: **201**

```json
{
  "message": "string"
}
```

- Status code: **500**

```json
{
  "message": "string",
  "error": "string"
}
```

#### Delete Kelas

Request :

- Method: **Delete**
- Endpoint: `/kelas/{kelas_id}`
- Header:
  - accept:application/json
  - x-access-token = "token"

Response:

- Status code: **200**

```json
{
  "message": "string"
}
```

- Status code: **404**

```json
{
  "message": "string",
  "error": "string"
}
```

### Gallery

#### Get All User

#### Get User by ID

#### Update User by ID

#### Delete User by ID

### Users

#### Get All User

Request:

- Method: **GET**
- Endpoint: `/users`

Response:

- status code: **200**

```json
{
  "message": "string",
  "data": [
    {
      "_id": "string",
      "email": "string, must have @",
      "password": "string",
      "kelas": ["kelas1", "kelas2"],
      "challenge": ["challenge1", "challenge2"]
    }
  ]
}
```

- status code: **500**

```json
{
  "message": "string",
  "error": "string"
}
```

#### Get User by ID

Request:

- Method: **GET**
- Endpoint: `/users/{user_id}`

Response:

- status code: **200**

```json
{
  "message": "string",
  "data": {
    "_id": "string",
    "email": "string, must have @",
    "password": "string",
    "kelas": ["string", "string"],
    "challenge": ["string", "string"]
  }
}
```
- status code: **400**
```json
{
  "message": "string"
}
```
- status code: **404**

```json
{
  "message": "string",
  "data": "string"
}
```

#### Update User by ID

Request:

- Method: **PATCH**
- Endpoint: `/kelas/{kelas_id}`
- Header:
  - Content-Type: application/json
  - Accept: application/json
- Body:
```
```

Response:


#### Delete User by ID
