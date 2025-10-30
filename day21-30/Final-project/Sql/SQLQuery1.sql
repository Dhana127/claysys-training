create database orderDB;
use orderDB;
create table orderData(
 id int  identity(1,1) primary key,
 orderID int ,
 customerName varchar(100),
 trackingId varchar(100),
 orderDate varchar(100),
 quantity int,
 address varchar(100),
 totalPrice int,
 status varchar(100)

)
select * from orderData;
