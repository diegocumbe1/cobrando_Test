-- 1 crear tabla empleado
CREATE TABLE empleado(
    codigo integer(10) primary key not null,
    nit varchar(9) not null,
    nombre varchar(100) not null,
    apellido1 varchar(100) not null,
    apellido2 varchar(100),
    foreign key codigo_departamento reference departamento(codigo)integer(10)
); 

-- 2 crear tabla departamento

CREATE TABLE departamento(
    codigo integer(10) primary key not null,
    nombre varchar(100) not null,
    presupuesto double not null
);

-- 3 Instártele registros y haga las siguientes consultas: 
-- en este punto no se especifica los datos a ingresar ni las consultar por lo tanto simularé unso datos

insert into empleado values (1,'1077877963','diego','cumbe','aragones','2');
insert into empleado values (1,'1087542157','martin','polo','cerquera','1');
insert into empleado values (1,'1085421574','martha','gonzales','gomez','4');
insert into empleado values (1,'1077877223','miriam','lopez',null,'3');
insert into empleado values (1,'1034577963','jaime','arenas',null,'3')


insert into departamento values (1,'gestion humana', 50.20);
insert into departamento values (2,'desarrollo', 30.20);
insert into departamento values (3,'aseo', 10.20);
insert into departamento values (4,'administrativo', 100.20);

select nit,nombre from empleado;
select code,nit,codigo_departamento from empleado;
select * from departamento where presupuesto >= 30.20;