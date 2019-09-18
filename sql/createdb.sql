create database if not exists directorio;
create table if not exists categoria (
	id int primary key auto_increment,
    nombre varchar(30) not null
);
create table if not exists empresa(
	id int primary key auto_increment,
    ID_categoria int not null,
    nombre varchar(30) not null,
    constraint FK_CAT 
		foreign key (id) 
			references categoria(ID_categoria)
);


create table if not exists sucursal(
	id int primary key auto_increment,
    ID_empresa int not null,
    direccion varchar(50),
    horario_inicio time,
    horario_final time,
    ultima_revision date,
    fecha_registro date,
    constraint FK_EMP 
		foreign key (ID_empresa)
			references empresa(id)

)

