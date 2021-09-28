;
((c) => {
    // 1. Asignación implícita
    // Creando objeto implícitamente
    //caso 1
        // this esta siendo invocada dentro de un método
        // this, hace referencia al objeto que contiene el método donde se invoca
    c('******* Asignación de this implícita **********')
    let yo = {
        nombre: 'Nacho Rondón',
        edad: 38,
        saludar: function () {
            c(`Hola, mi nombre es ${this.nombre}`)
        }
    }
    yo.saludar();

    //caso 2
        // existe una funcion que recibe un objeto como parámetro; Dentro de ella (la función) se le asigna un método al objeto
        // this en este caso hace referencia al objeto en el que se añade el método.

    let preparandoSaludo = function (obj) {
        obj.saludar = function () {
            c(`Hola, mi nombre es ${this.nombre}`)
        }
    }

    const nienke = {
            nombre: 'Nienke',
            edad: '35'
            }, 
            nacho = {
                nombre: 'Nacho',
                edad: 38
            }
    
    preparandoSaludo(nienke)
    preparandoSaludo(nacho)
    nienke.saludar()
    nacho.saludar()

    //caso 2
        // Una function que retorna un objeto que contiene el método que invoca this; es decir, lo que vendría siendo una closure
    let Humano = function(nombre, edad, perro) {
        return {
            nombre: nombre,
            edad: edad,
            saludar: function () {
                c(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
            },
            perro: {
                nombre: perro,
                saludar: function () {
                    c(`${this.nombre} guauuu guauu!`)
                }
            }
        }
    }

    const nachoJose = Humano('Nacho José', 39, 'Firulai')
    nachoJose.saludar()
    nachoJose.perro.saludar()

    // Conclusión: this es invocado dentro de un método, implícitamente éste hace referencia al objeto que contiene el método ain importar si el método es añadido luego de haber sido creado el objeto, o si es una función que retorna un objeto
    
})(console.log);

((c) => {
    // 2. Asignación explicita
        // Desde ES5 cuando queremos explícitamentereferenciar this, contamos con 3 método. "call, apply y bind"
        c('\n******* Asignación de this explícita **********')
        const nombrar = function (f1, f2, f3) {
            c(`${this.nombre} es un lenguaje Front end de la web y tiene librerías y frameworks muy poderosos como: ${f1}, ${f2} y ${f3}`)
        }

        const lenguaje = {
            nombre: 'Java Script',
            version: 6
        }

        let frameworks = ['Angular', 'React', 'Vue.js']

        // call: Permite definir a que va a hacer referencia this en su primer parámetro, los parámetros siguientes son los que va a recibir la función
        nombrar.call(lenguaje, frameworks[0], frameworks[1], frameworks[2])

        // apply: Permite referenciar this en su primer parámetro, pero éste nos permite pasar un array como los parámetros de la función
        nombrar.apply(lenguaje, frameworks)

        // bind: Devuelve una función en donde this hace referencia al objeto que pasamos en su parámetro
        let frameworksJS = 
        nombrar.bind(lenguaje, frameworks[0], frameworks[1], frameworks[2])
        frameworksJS();

})(console.log);

((c) => {
     // 3. Asignación con new
        // Cuando invocamos this con un constructor, este hace referencia al objeto que se ha instanciado.
        c('\n*******Asignación con new **********')
        let Framework = function (nombre, url, lenguaje) {
            this.nombre = nombre
            this.url = url
            this.lenguaje = lenguaje
        }

        const react = new Framework('React', 'https://github.com/facebook/react', 'Java Script'),
            vue = Object.create(Framework)
            vue.nombre = 'Vue.js'

            c(react, vue)

})(console.log);

((c) => {
    // 4. Asignación Global
       // Uno de los grandes errores con this es que cuando no se tiene una referencia al objeto que referencia this, este hace referencia al objeto global:
        // windows en los navegadores y global en Node.js
       c('\n******* Asignación Global **********')
       const dimeUnFramework = function () {
           c(this.nombre)
       }

       dimeUnFramework()
       // variable global si no la declaramos con let, var o const
       //nombre = 'Angular'
       window.nombre = 'Angular'
       dimeUnFramework()
       
})(console.log);

((c) => {
    // 5. Arrow Functions
       // Desde ES5 cuando queremos explícitamentereferenciar this, contamos con 3 método. "call, apply y bind"
       c('\n******* Arrow Functions y el problema de this **********')

       const lenguaje = {
           name: 'Java Script',
           version: 6,
           frameworks: [
               {name: 'Angular', url: 'url de angular'},
               {name: 'React', url: 'url de react'},
               {name: 'Vue.js', url: 'url de vue.js'}
           ],
           nombrar: function () {
                // El problema de this en JavaScript, no tenía alcance en el scope donde esta definida la función
                /*this.frameworks.forEach(function (fw) {
                    c(`${fw.name} es un framework de ${this.name}`)
                })*/

                // Solución en ES3 1999
                /*let that = this
                this.frameworks.forEach(function (fw) {
                    c(`${fw.name} es un framework de ${that.name}`)
                })*/

                // Solución en ES5
                /*this.frameworks.forEach(function (fw) {
                    c(`${fw.name} es un framework de ${this.name}`)
                }.bind(this))*/

                // Solución en ES6 las Arrow Functions, porque tienen la capacidad de pasar el contexto en donde han sido definido
                this.frameworks.forEach( fw => c(`${fw.name} es un framework de ${this.name}`) )
           }
       }

       lenguaje.nombrar()


})(console.log);