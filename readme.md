# API legendaria
# Formato de respuestas

| propiedad | descripcion |
| ------ | ------ |
| success | Este es un true o false dependiendo lo sucedido. Por ejemplo si se quiere borrar un elemento y el elemento no existe, habrá un sucess: false. Si ocurre un problema con el servidor se manda un status de 404 |
| elements | Aquí van todos los objetos que se hayan consultado al api |
| message | Aquí va un mensaje opcional sobre lo ocurrido |




# Secciones y metodos
| metodo| url | descripcion | 
|  ------  | ------ | ------ |
| get | seccion/ | Responde una lista de elementos correspondiente |
| get | seccion/id | Responde un elemento correspondiente al id enviado |
| post | seccion/ | Aqui se crean nuevos elementos segun la seccion |
| delete | seccion/id | elimina un elemento correspondiente al id enviado
| post | seccion/query | Aqui se podra hacer busquedas y eliminaciones mas especificas 

## seccion/query

| propiedad | descripcion |
| ------ | ------ |
| action | 'delete' 'search' |
| where | Aquí van todos los objetos que se hayan consultado al api |
| message | Aquí va un mensaje opcional sobre lo ocurrido |


```sh
 action: 'delete',
 where: {
     nombre: 'leonel'
 }
```
