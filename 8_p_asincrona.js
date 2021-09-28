;
/* ************ Callbacks **********') */
/*
((c) => {
    c('************ Programación Asíncrona **********')
    c('************ Callbacks **********\n')
    const cuadrado = (value, callback) => {
        setTimeout(() => {
            callback( value, (value * value) )
        }, 0 | Math.random() * 100)
    }

    cuadrado (0, (value, result) => {
        c('Inicio callback: ')
        c(`Callback: ${value}, ${result}`)
        cuadrado (1, (value, result) => {
            c(`Callback: ${value}, ${result}`)
            cuadrado (2, (value, result) => {
                c(`Callback: ${value}, ${result}`)
                cuadrado (3, (value, result) => {
                    c(`Callback: ${value}, ${result}`)
                    cuadrado (4, (value, result) => {
                        c(`Callback: ${value}, ${result}`)
                        cuadrado (5, (value, result) => {
                            c(`Callback: ${value}, ${result}`)
                            cuadrado (6, (value, result) => {
                                c(`Callback: ${value}, ${result}`)
                                cuadrado (7, (value, result) => {
                                    c(`Callback: ${value}, ${result}`)
                                    cuadrado (8, (value, result) => {
                                        c(`Callback: ${value}, ${result}`)
                                        cuadrado (9, (value, result) => {
                                            c(`Callback: ${value}, ${result}`)
                                            cuadrado (10, (value, result) => {
                                                c(`Callback: ${value}, ${result}`)
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    c('*********** Callback Hell yeiiii!! ************')
})(console.log);

    // ************ Promises ********** 
((c) => {
    c('************ Promises **********\n')
    const cuadrado = value => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve({value: value, result: value * value}) // Devuelve un objeto
            }, 0 | Math.random() * 100)
        } )
    }
    cuadrado(0) // Ejecutamos función con valor en argumento
        .then(obj => { // Entonces la promesa espera regresar un objeto
            c('Empieza el fluj de la promise')
            c(`Promise: ${obj.value}, ${obj.result}`)
            return cuadrado(1) // Para continuar con la ejecución, retornamos la función nuevamente con argumento
        })
        .then(obj => {
            c(`Promise: ${obj.value}, ${obj.result}`)
            return cuadrado(2)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, ${obj.result}`)
            return cuadrado(3)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, ${obj.result}`)
            return cuadrado(4)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, ${obj.result}`)
            return cuadrado(5)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, ${obj.result}`)
            return cuadrado(6)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, ${obj.result}`)
            return cuadrado(7)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, ${obj.result}`)
            return cuadrado(8)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, ${obj.result}`)
            return cuadrado(9)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, ${obj.result}`)
            return cuadrado(10)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, ${obj.result}`)
            c('Fín Promise')
        })
        .catch(err => c(err.message))
        c('*********** Promises Hell yeiiii!! ************')

})(console.log);
    */

/* ************ Generators ********** */
((c) => {
    c('************ Generators **********\n')
    let cuadrado = value => {
        setTimeout(() => {
            c({ value: value, result: value * value })
        })

        return {
            value: value,
            result: value * value
        }
    }

    function *generador() {
        c('Iniciando generator:')
        yield cuadrado(0) // yield es como un return parcial
        yield cuadrado(1)
        yield cuadrado(2)
        yield cuadrado(3)
        yield cuadrado(4)
        yield cuadrado(5)
        yield cuadrado(6)
        yield cuadrado(7)
        yield cuadrado(8)
        yield cuadrado(9)
        yield cuadrado(10)
        c('Fín generator:')
    }

    let gen = generador()
    c(gen.next())
    c(gen.next().value)
    c(gen.next().value)
    c(gen.next().value)
    c(gen.next().value)
    c(gen.next().value)
    c(gen.next().value)
    c(gen.next().value)
    c(gen.next().value)
    c(gen.next().value)
    c(gen.next().value)
    c(gen.next().value)
    c(gen.next().done)
    
})(console.log);