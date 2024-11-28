/* Documentación de API */

// - npm install swagger-jsdoc swagger-ui-express

/*
Documentar:

Documentar significa brindar suficiente informacion sobre algun proceso, con el fin de que este sea lo suficientemente entendible para quien lo lea.
La documentacion puede darse a nivel simple (comentarios sobre el codigo) o bien a nivel mas complejo (herramientas de documentacion para un aplicativo general).
*/

/*
¿Por que es importante documentar?

Vamos a contextualizar algo bastante comun en un ambiente laboral no controlado:
Estas trabajando en una empresa que se emvarga de ña venta de diferentes tipos de muebleria para el hogar, para esto, la empresa solo procesa los muebles contra solicitud,
de manera que manda a hacerlos a su fabricaproductora solo hasta que hayan solicitado una pieza con dichas caracteristicas. Este es todo el contexto que necesitamos.

Actualmente solo trabajaran dos desarrolladores en la empresa:

- Mauricio
- Tú

Cada quien esta desarrollando diferentes modulos para la empresa: Mauricio se esta encargando de la gestion de muebles y el proceso de compra, y tu de usuarios y mantenimiento de CRM y CMS de la empresa.
Mauriciono tiene contexto de lo que estas armando, ni tu tienes contexto de lo que hace el.
*/

/*
¡Comienzan los problemas!

Por X cuestiones, Mauricio ha tomado la decision de romper relaciones con la empresa, asi que han decidido contratar a otra persona para apoyarte en el mantenimiento.
¿Cual es el problema entonces? ¡Te has quedado a cago de un codigo que no hiciste y, por tanto, del cual no tienes conocimiento!
Te solicitan entonces dar mantenimiento al primer modulo ajeno (¿Confuso? espera ver el codigo):
"Reajustar el proceso de gestion de ordenes de venta, para que esta vez permitamos agregar una pila de ordenes de compra premium, las cuales tendra mayor prioridad que las ordenes normales,
y en consecuencia las ordenes de venta deberan primero abastecer a las ordenes premium antes que cubrir las ordenes normales. Sin embargo, si la orden de compra tiene mas de 2 semanas desde su solicitud,
hay que agregarla a las ordenes prioritarias. Actualmente, tienes la gestion de ordenes de compra normales, te toca agregar la consideracion premium. ¿Para cuando puedes entregarlo?"
*/

/*
No puede ser tan malo, ¿Verdad?

Lo primero que hay que hacer es entrar al codigo y entender el paso a paso del proceso que ya existe.
Al menos sabemos que tenemos que procesar ordenes de compra y ordenes de venta.
Asi que buscas entre todo el codigo de la empresa, para poder llegar añ codigo que esperabas encontrar, donde se procesa el calculo de la reparticion de ordenes de compra-venta
(posteriormente compra/premium - venta).

¡Echemos un viztaso para poder entender el proceso!
*/

/*
Nuestro trabajo no solo es entender ¡Falta modificar!

Hasta cierto punto, podemos decir que el codigo se explica por si solo ¿verdad?
Sin embargo, para poder comenzar a modificar este codigo, no basta con "hacerse a una idea de lo que hace", sino que tenemos que entender a profundidad como se resuelve,
asi podemos modificar codigo para agregar nuestra pila de ordenes premium, sin afectar tampoco la logica principal del flujo.
Para realizar las modificaciones, comienzan a llegarnos muchas dudas.

- No hay comentarios que me puedan guiar.
- No hay ningun otro recurso que me apoye a saber como funciona o si hay algun punto en el que tenga que tener especial cuidado al momento de modificar.
- No hay algun ejemplo de input de salesOrders ni purchaseOrders, tendremos que buscarlo probando peticion desde el frontend (en casa de que se active desde front)
o armar nuestro propio mock a partir de la base de datos.
*/

/*
¿Que es Swagger?

Swagger es una herramienta de documentacion de codigo, la cual nos permitira mantener cada modulo de nuestra API dentro de un espectro de entendimiento solido, es decir, 
todo se mantendra en un ocntexto suficientemente alimentado de informacion, para poder ser entendido por futuros desarrolladores (o para una version tuya del futuro),
cuando tenga que revisar el codigo mas adelante. Con esta herramienta podremos hacer nuestra propia Open API specification.
*/

/*
Open API Specification:

Tambien conocida como Swagger specification, es un formato de descripcion de REST APIs.
Estas especificaciones pueden ser escritas en yaml o en json, y permitiran profundizar sobre un modulo, ruta o esquema especifico de nuestra API.
Por ejemplo, si queremos realizar la documentacion de un modulo de usuarios ¿Que habria que documentar?

Al desglosar el modulo, podriamos separarlo en la siguiente forma:

- Un esquema que represente al usuario.
- Un conjunto de rutas referentes a los usuarios.
- Posibles queries para cada ruta.
- Parametros para las rutas que sean necesarias.
- Consideraciones especiales de cada endpoint.
- Un conjunto de posibles inputs para operaciones con el usuario.
*/

/*
¡Hora de documentar! Instalacion de Swagger:

Lo primero sera tener instalado Swagger, para ello, habra que instalar dos dependencias:

- swagger-jsdoc: Nos permitira escribir nuestro archivo .yaml o .json, y a partir de ahi generara un apidoc.
- swagger-ui-express: Nos permitira linkear una interfaz grafica que represente la documentacion a partir de una ruta de nuestro servidor de express.
*/

/*
Instalamos Swagger: https://swagger.io:

- npm install swagger-jsdoc swagger-ui-express
- swagger-jsdoc: nos deja escribir la configuracion en un archivo .yaml (tambien en un json) y a partir de ahi se genera un apidoc.
- swagger-ui-express: nos permitira linkear una interfaz grafica para poder visualizar la documentacion
*/

/*
Creamos las opciones principales de swagger:

Desglosemos de que se trata cada propiedad:

- openapi: sirve para especificar las reglas especificas que seguira la openapi generada.
- title: Titulo de la API que estamos documentando.
- description: Descripcion de la API que estamos documentando.
- apis: Aqui especificamente la ruta a los archivos que contendran la documentacion. La sintaxis utilizada indica que utilizaremos una carpeta docs,
la cual contendra subcarpetas con cada modulo a documentar.
*/

/*
Conectamos Swagger a nuestro servidor de Express:

Con las opciones ya generadas, falta hacer la conexion final, tomaremos las opciones indicadas y colocaremos las siguientes lineas.

- const specs = swaggerJsdoc(swaggerOptions);
- app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

ejecutaremos el servidor y visitaremos la ruta que recien definimos.
*/

/*
Swagger reportandose al servicio:

Una vez llegando a la vista principal, podremos visualizar una interfaz grafica lista para comenzar a mostrar los elementos que queramos documentar.
El resto consiste en escribir nuestros .yaml para comenzar con las especificaciones. Una documentancion como minimo debe contar con lso siguientes elementos:

- Schemas
- Routes
- Inputs
- Responses

Con estos elementos podemos comenzar a estructurar una documentacion solida para un proyecto.
*/

/*
Crearemos una carpeta para cada respectiva entidad:

Segun los elementos que haya que documentar, cada entidad tendra una carpeta con un archivo correspondiente a dicha entidad.
Sobre este archivo escribiremos todos los elementos que enlistamos anteriormente.
*/

/*
Definiendo Rutas:

La palabra reservada paths sirve para colocar cada ruta que se encuentre en nuestro respectivo router.
Esta contendra, de manera indentada, todos los metodos que esten relacionados con esa ruta (en este proyecto solo esta relacionado con el metodo get).
Cada metodo puede tener una breve descripcion de la intencion del endpoint, asi tambien como una etiqueta para agrupar en la documentacion.
Una vez escrita, podemos visualizarlos cambios directamente en la interfaz grafica que tenemos de Swagger.
*/

/*
Respuestas:

Cadametodo puede devolver diferentes statuses al momento de procesarse, de modo que es bueno informar que representa cada uno de estos errores, para ser mas informativo.
Podemos notar como, si abrimos el endpoint generado por Swagger, vienen dichas descripciones ligadas al metodo y al status.
*/

/*
Try it out:

¿Notas el boton en la esquina superior derecha que dice "Try it out"? ¡Maravilloso!
Swagger no solo se encarga de informar sobre el endpoint, sino que tambien nos da la posibilidad de ejecutar dicha consulta al alcance de un boton.
Al presionar el boton, obtendremos mas abajo, informacion de la peticion que se realizo, ademas del resultado obtenido.
*/

/*
Generando componentes:

Seria maravilloso contar con un ejemplo de un usuario, es decir, en multiples ocasiones tenemos problemas para abstraer y proyectar un objeto, 
utilizando Swagger podemos generar un schema de usuario, para tener una idea mas clara de que es lo que realmente representa esa entidad en nustro aplicativo.
Ahora, debajo de paths en nuestro archivo users.yaml, procederemos a definir otro elemento llamado components.

Los componentes pueden contener:
- Esquemas de una entidad.
- Modelos de respuestas.
- Esquemas de Inputs para un metodo particular.
*/

/*
Referenciando esquemas en nuestro documento:

Ahora, tenemos un esquema ya definido en nuestros componentes, ¿Como hacer para indicar que el metodo get en api/users/ devuelva un array de usuarios?
Para esto, podemos indicar en nuestro respectivo status un valor content, el cual contendra el cuerpo de ejemplo de la respuesta, usaremos un $ref,
con el fin de referenciar a algun componente mas del documento. Revisa como quedo la documentacion una vez añadido el schema.
*/

/*
Parametrizando:

Notaras que, en su mayoria, los endpoints del router de usuarios tienen un :uid, haciendo referencia a la id de usuario.
¿Como se agrega esto a la documentacion? Para ello, usaremos la sintaxis { param }. Una vez indicado, Swagger habilita un campo para poder pasarlo como parametro.
*/

/*
Definiendo el req.body:

Pensemos en nuestro req.body como un input o un requestBody como gustan llamarlo en Swagger.
Al final, lo primero es tener este input inicial separado en un componente nuevo.
En nustro mismo archivo, debajo del componente "schemas", hay que crear otro componente llamado requestBodies, sobre el cual guardaremos un input "updateUser".
updateUser entonces representara el usuario que llega por req.body, para poder hacer la actualizacion.
*/

/*
Uso de req.body:

Una vez que ya esta definido el req.body, solo basta con referenciarlo en el endpoint put que amaremos en el mismo path api/users/{uid}
Recuerda que, debido a que solo es un metodo diferente al get, pero sigue siendo la misma ruta, hay que colocar el metodo put a nivel de get para que la documentacion lo reciba correctamente.
*/

/*
Prueba de req.body:

Nota algo interesante, cuando definimos un body y presionamos "try it out", nota como en el cuadro de abajo se gener automaticamente un json de ejemplo listo para enviar.
Esto permite entonces que no nos perdamos en la idea de "¿Como probar un servicio en particular?". Ya que no tenemos que buscar input de prueba que corresponde,
pues Swagger ya nos genera el objeto de prueba automaticamente, y solo necesitamos cambiar los campos del body.
*/

/*
¡Importante!

Seguramente estaras pensando: "Se hace bastante robusto ese archivo!" y querras separar la logica de documentacionen mas sub-archivos,
sin embargo, la logica de multiples archivos actualmente se encuentra inestable por parte del repositorio principal, lo que esta presentando multiples errores.
¡Se recomienda que sigas trabajando con un archivo por entidad!
*/

