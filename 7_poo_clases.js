// POO con Clases
((c) => {
    // POO con Clases
    c('\n******* POO con Clases **********')
    // Con la llegada de ES6 la definición de una función constructora ha cambiado y nos ofrece la posibilidad de crear clases.
    // ES6 aporta un "Azúcar sintáctico" para declarar una clase como en la mayoria de los POO. Pero por debajo sigue siendo una función prototipal.
    // El método especial constructor recibe los parámetros que anteriormente recibía la funcíon constructora.
    // Las clases en ES6 sustituyen a las funciones prototipales en ES5.
    // Las declaraciones de clases no siguen las reglas de hoisting como sí lo hacen las declaraciones de funciones; esto quiere decir que solo existen tras ser declaradas.
    // De forma implícita, una clase se comporta de manera constante, no siendo posible ser redeclaradas en el mismo ámbito o scope.
    // Los métodos no se declaran de forma explícita con var, let o const.
    // Al tratarse de un constructor y no una función, no hay una salida de datos explícita con return.
    // Encontramos nuevas palabras reservadas con: constructor, super, get, set, static.
    
    class Carrito {
        constructor (articulo) {
            this._articulo = articulo,
            this._carrito = {}
        }

     
        agregar ( articulo, cantidad ) {
            this._carrito[articulo] = cantidad // videojuegos: 2, lentes: 3  
        } 
            
        quitar (articulo) {
            delete this._carrito[articulo]
        }

        ver ( articulo = 'todos' ) {
            return ( articulo === 'todos' )
                //? this._carrito
                ? this._iterable()
                : ( this._carrito.hasOwnProperty(articulo) )
                    ? `${this._carrito[articulo]} ${articulo}` 
                    : `El artículo ${articulo} no existe en el carrito`
        }

        _iterable () {
            let message = 'Artículos del carrito: \n'
            for ( let key in this._carrito )
            message += `${this._carrito[key]} ${key} \n`
            return message
        }
    }       
    
    const comics = new Carrito('comics')
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

// POO Herencia, polimorfísmo
((c) => {
    // POO Herencia, polimorfísmo
    // Las funciones constructoras pueden heredar directamente de otros constructores gracias al prototype.
    // Este ejemplo también se explica con PHP 
    c('\n******* POO Herencia, polimorfísmo, método constructor, setters y getters, Modificadores de acceso: (público, estático y privado), superconstructores, superllamadas y mixins. **********')
    // Privacidad en JavaScript
    // En JS las propiedades de los objetos son públicas; En las clases es igual.
    // Para aislar ciertas propiedades para evitar que sean modificadas de forma externas, tebemos recurrir al uso de WeakMap.
    // Un WeakMap es un Map que solo acepta objetos como claves, las referencias a las claves es débil; Lo que significa que si no hay otras referencias al objeto que actua como clave, el recolector de basura podrá liberarlo.
    // Revisa el archivo de teoria-es6.md

    let privado = new WeakMap()
    class Telefono {    
        // El constructor es un método especial que se ejecuta en el momento de instanciar la clase.
        constructor (marca, modelo, numero) {
            this.marca = marca
            this.modelo = modelo
            //this._numero = numero
            //privado.set(clave, valor)
            privado.set(this, {_numero: numero})
            this.puedoLlamar = true
        }

         // Método estático: Un método estático se pueden ejecutar sin necesidad de instanciar la clase, por lo general, este tipo de métodos se reservan a clases que coleccionan utilidades y que no se espera que sean instanciadas.
        // Estámos hablando de los típicos "Helpers", habituales en la mayoria de Frameworks y Librerías.

        static queEs () {
            c('El teléfono es un dispositivo de telecomunicación diseñado para transmitir señales acústicas a distancia por medio de señales eléctricas.')
        }

        // Los Getters y Setters son métodos especiales que nos permiten establecer y obtener los valores de los atributos de nuestra clase, aunque son métodos, se accade por asignación y no por invocación; es decir, como si fueran atributos.
        set numero (numero) {
            // sin el WeakMap seria: 
                //this._numero = numero
            privado.get(this)._numero = numero // Establecemos el número pasado como parámetro   
        }

        get numero () {
            // sin el WeakMap seria: 
                return c(privado.get(this)._numero)
        }

        llamar () {
            c('Riiing Riiiiiing!')
        }

        verInfo () {
            return c(
                `${this.constructor.name}\n`, // Obtiene el nombre de la clase del objeto de referencia
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tNúmero: ${privado.get(this)._numero}\n`,
                `\tPuedo llamar: ${this.puedoLlamar}\n`,
                )
        }

    }

        Telefono.queEs() // Se puede llamar directamente desde la clase porque es un método estático.
        //Telefono.llamar() // No se puede llamar directamente desde la clase porque es un método estático. Hay que crear un objeto.
        let tel = new Telefono('Panasonic', 'KX-TS550', '5544332211')
        tel.llamar()
        c(tel._numero)
        tel.numero
        tel.numero = 998877665544
        tel.numero
        tel.verInfo()
    


    // Mixins
        // En los lenguajes POO, un mixin es una clase que ofrece cierta funcionalidad para ser heredada por una subclase. Pero no esta ideada para ser autónoma.
        // Es una especie de clase Abstracta.
        // Los conceptos de superclase y subclase no existen como tipos de objetos concretos
            // Una subclase es una clase que hereda (extiende) de otra. (clase hija)  
            // Una superclase es la clase a partir de la cual heredan (extienden) otras. (clase madre)
        // En JavaScript las clases pueden ser expresadas como expresiones.
            // Gracias a esto, es posible crear una nueva clase cada vez que dicha expresion es evaluada
            // La cláusula extends permite actuar sobre expresiones, lo cual habilita que una clase extienda de otra creada en tiempo de ejecución.

        // Los mixin podemos declararlos como constantes en forma de Arrow Function 
        // Al declarar una superclase como Arrow Function, la volvemos expresiva. Gracias a eso, la clase puede ser evaluada como una expresión.

        let Operadora = Superclass => class extends Superclass {
            asignarOperadora ( operadora ) {
                return c(`La operadora asignada es ${operadora}`)
            }
        }

        let Red = Superclass => class extends Superclass {
            asignarRed ( red ) {
                return c(`La red asignada para celular es ${red}`)
            }
        }
        
    class Celular extends Operadora (Red ( Telefono ) ) { // Celular va a heredar las características de la clase Telefono y que como mixin, como clase auxiliar, como si fuera una interface vamos a permitir el acceso a los métodos que definamos dentro del mixin Operadora y Red.

        // Con el método super() se manda a llamar a la clase constructora del padre.
        // En el constructor de una clase hija, es obligatorio llamar a super() antes de utilizar this.
        constructor(marca, modelo, numero) {
            super(marca, modelo, numero)
            this.tengoCable = false
        }

        vibrar () {
            c('Vbrrr vbrrr!')
        }

        // Polimorfismo: Diferentes clases podrían definir el mismo método o propiedad.
        verInfo () {
            //Super llamada: Con super se manda a llamar el método verInfo() de la clase padre
            //return super.verInfo()

            return c(
                `${this.constructor.name}\n`, // Obtiene el nombre de la clase del objeto de referencia
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tNúmero: ${privado.get(this)._numero}\n`,
                `\tPuedo llamar: ${this.puedoLlamar}\n`,
                `\tTengo cables: ${this.tengoCable}\n`,
                )
        }

    }

    let cel = new Celular('Nokia', '5120', '0058281665452')
    cel.verInfo()
    cel.llamar()
    cel.vibrar()
    cel.numero
    cel.numero = '00589988775566'
    cel.numero
    cel.asignarRed('4G')
    cel.asignarOperadora('Telcel')


    class Smartphone extends Celular {
        constructor(marca, modelo, numero) {
            super(marca, modelo, numero)
            this.tengoInternet = true
        }
        conectar () {
            c('Tengo internet')
        }

        // Polimorfismo: Diferentes clases podrían definir el mismo método o propiedad.
        verInfo () {
            //Super llamada: Con super se manda a llamar el método verInfo() de la clase padre
            //return super.verInfo()

            return c(
                `${this.constructor.name}\n`, // Obtiene el nombre de la clase del objeto de referencia
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tNúmero: ${privado.get(this)._numero}\n`,
                `\tPuedo llamar: ${this.puedoLlamar}\n`,
                `\tTengo cables: ${this.tengoCable}\n`,
                `\tTengo internet: ${this.tengoInternet}\n`
                )
        }

    }

    let sm = new Smartphone('Motorola', 'G4', '0057000333999')
    sm.verInfo()
    sm.llamar()
    sm.vibrar()
    sm.numero
    sm.numero = '0057123456789'
    sm.numero
    sm.asignarRed('5G')
    sm.asignarOperadora('AT&T')

   

})(console.log);