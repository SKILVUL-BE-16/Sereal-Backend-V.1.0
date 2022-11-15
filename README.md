# Web Service & RESTful API for ToDoList Application
## Built With
* express.js
* mongodb
* mongoose
* jsonwebtoken (jwt)
* bcrypt

## APIs Specification
### Users
* #### Register
* Method : POST
* Endpoint : /api/user/register
* Body :
```
{
    "name": "String",
    "email": "String",
    "password": "String"

}
```
* Response
```
{
    "message": "data has been created!!"
}
```
* #### Login
* Method : POST
* Endpoint : /api/user/login
* Body :
```
{
    "email": String,
    "password": String
}
```
* Response :
```
{
    "message": "Anda berhasil login"
    "token",
}
```
### ToDo
* ### Add ToDo
* Method : POST
* Endpoint : /api/todo
* Header : x-access-token
* Body :
```
{
    "text": "string",
    "isComplete": boolean,
    "user": "user.ObjectId"
}
```
* Response :
```
{
  "message": "todo has been created"
}
```
* ### Get All ToDo
* Method : GET
* Endpoint : /api/todo
* Header : x-access-token
* Response
```
{
  "message": "success get data",
  "data": [
    {
      "_id": "string",
      "text": "string",
      "isComplete": boolean,
      "user": {
        "_id": "string",
        "name": "string"
      },
      "__v": 0
    },

    ...
}
```
* ### Get ToDo By ID
* Method : GET
* Endpoint : /api/todo/:id
* Header : x-access-token
* Response
```
{
  "message": "success get data",
  "data": [
    {
      "_id": "string",
      "text": "string",
      "isComplete": boolean,
      "user": {
        "_id": "string",
        "name": "string"
      },
      "__v": 0
    }
}
```
* ### Update ToDo By ID
* Method : PUT
* Endpoint : /api/todo/:id
* Header : x-access-token
* Body :
```
{
    "text": "string",
    "isComplete": boolean,
    "user": "user.ObjectId"
}
```
* Response
```
{
  "message": "update data success"
}
```
* ### Delete ToDo By ID
* Method : DELETE
* Endpoint : /api/todo/:id
* Header : x-access-token
* Response
```
{
  "message": "delete data success"
}
```
* ### Delete All ToDo
* Method : DELETE
* Endpoint : /api/todo
* Header : x-access-token
* Response
```
{
  "message": "delete data success"
}
```


