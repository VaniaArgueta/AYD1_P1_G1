create database ayd1_p1_g1;

use ayd1_p1_g1;

create table contacto
(
    idContacto  int auto_increment primary key,
    nombre      varchar(100) not null,
    apellido    varchar(200) not null,
    telefono    varchar(15) not null,
    correo		varchar(100) not null,
    favorito	boolean not null
);