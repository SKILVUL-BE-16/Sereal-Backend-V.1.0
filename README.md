# Web Service & RESTful API for Sereal Application

## Built With

- express.js
- mongodb
- mongoose
- jsonwebtoken (jwt)
- bcrypt

## ERD

![Sereal ERD](SEREAL_ERD.png)

## Deploy Site

- [Sereal Backend](https://sereal-backend.up.railway.app/)

## API Documentation

- [Open API spesification file](/api/sereal.json)
  atau lewat swagger hub
- [Swagger Hub sereal api spesification](https://app.swaggerhub.com/apis/yazidr1/sereal-app/1.0)

## APIs Specification

### Users

- #### Register
- Method : POST
- Endpoint : /register
- Body :

```
{
    "name": String,
    "email": String,
    "password": String,
    "role": String
}
```

- Response

```
{
    "message": "data has been created!!"
}
```

- #### Login
- Method : POST
- Endpoint : /login
- Body :

```
{
    "email": String,
    "password": String
}
```

- Response :

```
{
    "message": "Anda berhasil login"
    "token",
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
