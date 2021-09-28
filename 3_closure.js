let contador = (() => {
    // Por convensión,  las variables privadas se le antepone un guión (_) bajo. 
    let _contador = 0

    function incrementar () {
        return _contador++
    }

    function decrementar () {
        return _contador--
    }

    function valor () {
        return _contador
    }
    // Fuera de este contexto las funciones declaradas no existen. Creamos un return de objeto para salarlas del contexto

    return {
        incrementar : incrementar,
        decrementar : decrementar,
        valor : valor 
    }

})();

console.log( contador.valor() )
contador.incrementar()
contador.incrementar()
console.log( contador.valor() )
contador.decrementar()
console.log( contador.valor() )