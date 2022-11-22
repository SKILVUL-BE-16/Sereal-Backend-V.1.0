# Web Service & RESTful API for Sereal Application
## Built With
* express.js
* mongodb
* mongoose
* jsonwebtoken (jwt)
* bcrypt
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
      
