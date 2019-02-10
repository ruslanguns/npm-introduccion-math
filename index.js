module.exports = {
    /**
     * Suma entre números
     * @example
     * 1 + 1 = 2
     * @param { number } n1 Número para sumar
     * @param { number } n2 Número para sumar
     */
    suma: function(n1, n2) {
        // return n1 + n2;
        return (this.esNumero(n1, n2)) ? n1 + n2 : this.mensajeError();
    },
    /**
     * Resta entre números
     * @param { number } n1 Número para restar
     * @param { number } n2 Número para restar
     */
    resta: function(n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 - n2 : this.mensajeError();
    },
    /**
     * Multiplicacion entre números
     * @param { number } n1 Número para multiplicar
     * @param { number } n2 Número para multiplicar
     */
    multiplicacion: function(n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 * n2 : this.mensajeError();
    },
    /**
     * División entre números
     * @param { number } n1 Número para división
     * @param { number } n2 Número para división
     */
    division: function(n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 / n2 : this.mensajeError();
    },
    esNumero: function(n1, n2) {
        if (typeof n1 != 'number' || typeof n2 != 'number') {
            return false;
        }
        return true;
    },
    mensajeError: function() {
        console.log('Uno o más de los valores introducidos no son de tipo numérico.');

    }
}