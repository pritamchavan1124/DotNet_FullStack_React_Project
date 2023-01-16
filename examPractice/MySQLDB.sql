create database krushiapp;

use krushiapp;

create table products(ProdId INT NOT NULL AUTO_INCREMENT,ProdTitle VARCHAR(50),ProdCategory VARCHAR(50),ProdDesc VARCHAR(150),ProdPrice INT,ProdQty INT);

insert into products(ProdTitle,ProdCategory,ProdDesc,ProdPrice,ProdQty) values('Tomato seed','seeds','Hybrid seeds',1200,15); 

insert into products(ProdTitle,ProdCategory,ProdDesc,ProdPrice,ProdQty) values('Soyabin seed','seeds','Hybrid soyabin(28) seeds',3200,20);
insert into products(ProdTitle,ProdCategory,ProdDesc,ProdPrice,ProdQty) values('carrot seed','seeds','new varity of seed',600,1);