# Web Service & RESTful API for Sereal Application
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
* Endpoint : /user/register
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
* Endpoint : /user/login
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
* #### Kelas
* Method : GET
* Endpoint : /kelas
* Body :
```
{
     "name": String,
     "categories": categories.ObjectId,
     "status" Boolean
}
```
* Response :
```
{
     "message": "Success get all kelas",
     "data": [
       {
           "_id": String,
           "name": String,
           "categories": "categories.ObjectId",
           "status": Boolean
        }
     ]
  }
  ```
      
