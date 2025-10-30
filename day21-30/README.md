Introduction

This is the project using on Angular, C#.net & MS SQL to CRUD application.

First i started backend application using visual studio community edition 

i create model file named orderDTO used to transfer data from one layer to another layer.

Then i connected my project to database for we need to install SQLClient package from Nuget package mamager.

Add connection String to appsettings.json
"ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=orderDB;Trusted_Connection=True;Encrypt=False;"
},

Write methods to get,create,update and delete data from database.

Now, controller class , it is managing RESTful endpoints using DataAccessLayer. This controller handles CRUD operations.

Write CORS in program.cs file to access the API endpoint from frontend.

start the program the popup window will appear with url : http://localhost:5062

