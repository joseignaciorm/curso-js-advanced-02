;
//alert('Hola')
((c, d) => {
    // Formas de crear un objeto

    // 1. Objeto literal
    c('******* Objeto Literal **********')
    // Creando objeto implícitamente
    const perro = {
        nombre: 'Kenay',
        edad: 3,
        raza: 'Mestizo',
        genero: 'Macho',
        esterilizado: true,
        ladrar () {
            c('guauu guauu')
        },
        comer (comida = 'Croqueta') {
            c(`${this.nombre} come ${comida}`)
        },
        aparecer (imagen) {
            d.write(`<img src="${imagen}"/>`)
        }
        
    }

    c(
        perro,
        perro.nombre,
        perro.edad,
        perro.raza,
        perro.genero,
        perro.esterilizado
    )
    perro.ladrar()
    perro.comer('Carne')
    perro.aparecer('https://ar.zoetis.com/_locale-assets/mcm-portal-assets/publishingimages/especie/caninos_perro_img.png')


    // 2. Prototipo Object
    c('******* Prototipo Object **********')
    // Objeto creado explícitamento. perro2 va a ser un objeto de un new object, instancia de un nuevo objeto o prototipo de JS
    const perro2 = new Object() 
        perro2,
        perro2.nombre = 'Firulais',
        perro2.edad = 3,
        perro2.raza = 'Dálmata',
        perro2.genero = 'Macho',
        perro2.esterilizado = true,
        perro2.ladrar = () => c('guaauu guauu'),
        // perro2.comer = (comida = 'Tacos') => c(`${this.nombre} come ${comida}`),
        // Arrows functions el contexto es el objeto windows
        // Arrows function permite pasar el contexto definido en ella. ej. perro2.nombre
        // perro2.comer = (comida = 'Tacos') => c(`${perro2.nombre} come ${comida}`),

        // Utilizando función convensional, podríamos aplicar el this. El this en una función a otra varía
        perro2.comer = function (comida = 'Tacos') {
            c(`${this.nombre} come ${comida}`)
        },

        perro2.aparecer = (imagen) => d.write(`<img src="${imagen}" />`)

        c(
            perro2,
            perro2.nombre,
            perro2.edad,
            perro2.raza,
            perro2.genero,
            perro2.esterilizado
        )

        perro2.ladrar()
        perro2.comer()
        perro2.aparecer('https://ar.zoetis.com/_locale-assets/mcm-portal-assets/publishingimages/especie/caninos_perro_img.png')


    // 3. Función constructora: La referencia, contexto lo tiene implícitamente en el nombre
    c('******* Función constructora **********')

    // Va a recibir los parámetro que van a servir como atributos de mi objeto
    function Perro (nombre, edad, raza, genero, esterilizado) {
        // Atributos. 
        //Asociamos los valores recibidos por parámetro al objeto This. This en este momento  vendría siendo el contexto de la funcion
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
        this.genero = genero
        this.esterilizado = esterilizado

        // Métodos
        this.ladrar = () => c('guauu guauu!')

        this.comer = (comida = 'pollo') => c(`${this.nombre} come ${comida}`)

        this.aparecer = (imagen) => d.write(`<img src="${imagen}" />`)
    }

    const perro3 = new Perro('Lazy', 10, 'Gran Danés', 'Macho', false),
          perro3_2 = new Perro('Lola', 15, 'Border Collie', 'Hembra', true)

          c(
              perro3,
              perro3.nombre,
              perro3.edad,
              perro3.raza,
              perro3.genero,
              perro3.esterilizado,
              perro3_2,
              perro3_2.nombre,
              perro3_2.edad,
              perro3_2.raza,
              perro3_2.genero,
              perro3_2.esterilizado
            )

            perro3.ladrar()
            perro3.comer('Cerdo')
            perro3.aparecer('https://upload.wikimedia.org/wikipedia/commons/e/e5/Dogge_Odin.jpg')
            perro3_2.ladrar()
            perro3_2.comer('Pienzo')
            perro3_2.aparecer('https://www.zooplus.es/magazine/wp-content/uploads/2019/07/Border-Collie-768x805.jpg')


    // 4. Clases a partir de ES6
    c('******* Clases a partir de ES6 **********')
    class Dog {
        // El constructor es un método especial que se ejecuta en el momento que se instancia la clase
        constructor (nombre, edad, raza, genero, esterilizado) {
            this.nombre = nombre
            this.edad = edad
            this.raza = raza
            this.genero = genero
            this.esterilizado = esterilizado
        }
            // Métodos
            ladrar () {
                c('guauu guauu!')  
            } 

            comer (comida = 'pollo') {
                c(`${this.nombre} come ${comida}`)
            } 

            aparecer (imagen) {
                d.write(`<img src="${imagen}" />`)  
            } 
        
    }  
        
    

    const perro4 = new Perro('Cachito', 10, 'Chihuahua', 'Macho', false),
          perro4_2 = new Perro('Boni', 15, 'Boxer', 'Hembra', true)

          c(
              perro4,
              perro4.nombre,
              perro4.edad,
              perro4.raza,
              perro4.genero,
              perro4.esterilizado,
              perro4_2,
              perro4_2.nombre,
              perro4_2.edad,
              perro4_2.raza,
              perro4_2.genero,
              perro4_2.esterilizado
            )

            perro4.ladrar()
            perro4.comer('Pistacho')
            perro4.aparecer('https://www.purina.es/perro/one/mini/sites/g/files/mcldtz316/files/2017-10/IMG_BannerMobile_02Chihuahua_2.jpg')
            perro4_2.ladrar()
            perro4_2.comer('Dulces')
            perro4_2.aparecer('https://i.ytimg.com/vi/kCTdZhloJ_Y/hqdefault.jpg')

})(console.log, document)