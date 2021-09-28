;
((c) => {
    // 6. POO Protitype
    // Case 1. Anidación de objetos
       // Un objeto es una colección de variables y de funciones agrupadas de manera estructural.
            // A las variables definidas dentro de los objetos se las denomina atributos.
            // A las funciones dentro de los objetos de las denomina métodos.
            
        // Entonces un objeto puede tener propiedades y estas propiedades puenden tener en su interior más propiedades que incluso sean objetos.

        // Esto se representa en forma de árbol y podemos acceder a sus propiedades con:
            // 1) Notación de punto.
            // 2) Notación de array.
            // 3) Notación mixta.
            
        c('\n******* Anidación de objetos **********')
        const curso = {
            titulo: 'Curso JS Avanzado: Paradigmas de programación',
            docente: {
                nombre: 'José Ignacio',
                edad: 38,
                nacionalidad: 'Venezolana',
                contacto: {
                    email: 'nacho@gmail.com',
                    url: 'http://nacho.com',
                    twitter: '@nacho',
                    ubicacion: 'Granada'
                },
            },
            costo: 40,
            url: 'http://ed.team/cursos/javascript-avanzado',
            online: true,
            plataforma: {
                nombre: 'EDteam',
                url: 'http://ed.team',
                oficinas: ['Lima', 'Bogotá', 'Namekusei']
            }
        }
        c(curso.docente.nombre)
        c(curso['docente'].contacto['url'])
        c(curso['plataforma']['nombre'])
        c(curso.plataforma['url'])
        c(curso.plataforma['oficinas'][2])

       
})(console.log);

// POO con Closures
((c) => {
    // POO con Closures
    c('\n******* POO con Closures **********')
    function Carrito (articulo) {
        let _articulo = articulo,
            _carrito = {}

        function agregar (articulo, cantidad) {
            _carrito[articulo] = cantidad // videojuegos: 2, lentes: 3
        }

        function quitar (articulo) {
            delete _carrito[articulo]
        }

        function ver ( articulo = 'todos' ) {
            return ( articulo === 'todos' )
                //? _carrito
                ? _iterable()
                : ( _carrito.hasOwnProperty(articulo) )
                    ? `${_carrito[articulo]} ${articulo}` 
                    : `El artículo ${articulo} no existe en el carrito`
        }

        function _iterable () {
            let message = 'Artículos del carrito: \n'
            for ( let key in _carrito )
            message += `${_carrito[key]} ${key} \n`

            return message
        }

        return {
            agregar: agregar,
            quitar: quitar,
            ver: ver
        }
    }

    const comics = Carrito('comics')
    c(comics)
    comics.agregar('Flash point paradox', 2)
    comics.agregar('The return of the dark knight', 3)
    comics.agregar('Civil war', 3)
    comics.agregar('Final crisis', 1)
    c(comics.ver())
    c(comics.ver('Flash point paradox'))
    c(comics.ver('Civil war'))
    comics.quitar('Civil war')
    c(comics.ver('Civil war'))
})(console.log);


// POO con funciones constructoras
((c) => {
    // POO con funciones constructoras
    c('\n******* POO con funciones constructoras **********')
    function Carrito (articulo) {
        this._articulo = articulo,
        this._carrito = {}

        this.agregar = ( articulo, cantidad ) => this._carrito[articulo] = cantidad // videojuegos: 2, lentes: 3

        this.quitar = articulo => delete this._carrito[articulo]

        this.ver = ( articulo = 'todos' ) => {
            return ( articulo === 'todos' )
                //? this._carrito
                ? this._iterable()
                : ( this._carrito.hasOwnProperty(articulo) )
                    ? `${this._carrito[articulo]} ${articulo}` 
                    : `El artículo ${articulo} no existe en el carrito`
        }

        this._iterable = () => {
            let message = 'Artículos del carrito: \n'
            for ( let key in this._carrito )
            message += `${this._carrito[key]} ${key} \n`

            return message
        }

    }

    const comics = new Carrito('comics')
    c(comics)
    comics.agregar('Flash point paradox', 2)
    comics.agregar('The return of the dark knight', 3)
    comics.agregar('Civil war', 3)
    comics.agregar('Final crisis', 1)
    c(comics.ver())
    c(comics.ver('Flash point paradox'))
    c(comics.ver('Civil war'))
    comics.quitar('Civil war')
    c(comics.ver('Civil war'))

    c('\n******* Patrón de diseño: Factoria o Fábrica **********')
    /*
        Esta forma de codificar las funciones como clases se conoce como Factory Pattern o Template Functions

        Un problema para este tipo de estructuras es que cuando creamos un nuevo objeto a partir de estas funciones, se reservará espacio en memoria para todas estas funciones

        Con un objeto creado no supone mucha desventaja, pero con varios objetos sí.
     */ 

     const libros = new Carrito('Libros'),
            musica = new Carrito('Música'),
            juegos = new Carrito('Juegos'),
            peliculas = new Carrito('Películas'),
            series = new Carrito('Series')
        // Esto supone que los métodos agregar, quitar, ver e _iterar estén siendo replicados en memoria, lo que es ineficiente
        c(
            libros, '\n',
            musica, '\n',
            juegos, '\n',
            peliculas, '\n',
            series
        )

        // Para poder solucionar esto podemos hacer uso del objeto Prototype que permite que objetos de la mismo clase compartan métodos y así no sean repicadas de manera ineficiente.
        
})(console.log);

// POO con Prototype
((c) => {
    // POO con Prototype
    c('\n******* POO con Prototype **********')
    function Carrito (articulo) {
        this._articulo = articulo,
        this._carrito = {}
    }

        /*Carrito.prototype.agregar = function () {}
        Carrito.prototype.quitar = function () {}
        Carrito.prototype.ver = function () {}*/

        Carrito.prototype = {
            agregar: function ( articulo, cantidad ) {
                this._carrito[articulo] = cantidad // videojuegos: 2, lentes: 3  
            }, 
            
            quitar: function (articulo) {
                delete this._carrito[articulo]
            },

            ver: function ( articulo = 'todos' ) {
                return ( articulo === 'todos' )
                    //? this._carrito
                    ? this._iterable()
                    : ( this._carrito.hasOwnProperty(articulo) )
                        ? `${this._carrito[articulo]} ${articulo}` 
                        : `El artículo ${articulo} no existe en el carrito`
            },

            _iterable: function () {
                let message = 'Artículos del carrito: \n'
                for ( let key in this._carrito )
                message += `${this._carrito[key]} ${key} \n`

                return message
            }
        }
        

    const comics = new Carrito('comics')
    c(comics)
    comics.agregar('Flash point paradox', 2)
    comics.agregar('The return of the dark knight', 3)
    comics.agregar('Civil war', 3)
    comics.agregar('Final crisis', 1)
    c(comics.ver())
    c(comics.ver('Flash point paradox'))
    c(comics.ver('Civil war'))
    comics.quitar('Civil war')
    c(comics.ver('Civil war'))

    c('\n******* Patrón de diseño: Factoria o Fábrica **********')

     const libros = new Carrito('Libros'),
            musica = new Carrito('Música'),
            juegos = new Carrito('Juegos'),
            peliculas = new Carrito('Películas'),
            series = new Carrito('Series')

        c(
            libros, '\n',
            musica, '\n',
            juegos, '\n',
            peliculas, '\n',
            series
        )

        // De esta manera, creando nuevos objetos; su espacio en memoria es menor y no hay replicación de métodos. Internamente será más eficiente el uso de memoria por parte de JavaScript y obtendremos un mejor rendimiento en la aplicación.
})(console.log);

// POO Herencia prototípica
((c) => {
    // POO Herencia prototípica
    // Las funciones constructoras pueden heredar directamente de otros constructores gracias al prototype.
    // Este ejemplo también se explica con PHP 
    c('\n******* POO Herencia prototípica **********')
    function Telefono () {
        this.puedoLlamar = true
    }

    Telefono.prototype = {
        llamar: function () {
            c('Riiing Riiiiiing!')
        }
    }

    function Celular () {
        this.tengoCable = false
    }

    Celular.prototype = new Telefono()
    Celular.prototype.vibrar = function () {
        c('Vbrrr vbrrr!')
    }

    function Smartphone () {
        this.tengoInternet = true
    }

    Smartphone.prototype = new Celular
    Smartphone.prototype.conectar = function () {
        c('Tengo internet')
    }

    let motorola = new Smartphone()
    c(motorola)
    motorola.llamar()
    c(motorola.puedoLlamar)
    motorola.vibrar()
    c(motorola.tengoCable)
    motorola.conectar()
    c(motorola.tengoInternet)

    let nokia5120 = new Celular()
    c(nokia5120)
    nokia5120.llamar()
    c(nokia5120.puedoLlamar)
    nokia5120.vibrar()
    c(nokia5120.tengoCable)
    nokia5120.conectar()
    c(nokia5120.tengoInternet)

})(console.log);