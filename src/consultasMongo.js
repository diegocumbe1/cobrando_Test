db.usuario.find({nombre_usuario:'Frank_blog'})

db.usuario.find({nombre_usuario:'Peter'})

db.usuario.find({CP:'39005'}).count()

db.usuario.find({telefonos:'1111111'})//


db.usuario.find({CP:{$gte:'39005'}}).select('nombre_usuario cuenta_twitter').skip(_id);





