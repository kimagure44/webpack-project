// El módulo path proporciona utilidades para trabajar con rutas de archivos y directorios
// Evitamos conflictos con node, ya que windows y linux tienen diferentes estilos de rutas
const path = require("path");
// Importamos babel para usarlo dentro de la sección de plugins
const BabelPlugin = require("babel-webpack-plugin");

// Exportamos como un módulo de commonjs
module.exports = {
    // Modo desarrollo, ya que webpack por defecto esta en modo producción
    mode: 'development',
    // Nuestro punto de entrada
    //entry: path.join(__dirname, 'index.js'),
    entry: {
        "index": path.join(__dirname, 'index.js'),
        "contacto": path.join(__dirname, 'contacto.js')
    },
    // Nuestra salida
    output: {
        // Obtenemos la ruta absoluta
        path: path.resolve(__dirname, 'dist'),
        //filename: 'bundle.js'
        filename: '[name].js'
    },
    module: {
        // Array con la lista de loaders
        rules: [{
            // test: que tipo de archivo 
            test: /\.css$/,
            // use: Array o texto con el/los loader(s) que se va encargar el archivo
            use: [
                // Estos y muchos otros loaders son necesarios descargar
                // Respetar el orden en la declaración de los loaders, porque cambiando el orden no funciona.
                // Explicación oficial: https://webpack.js.org/configuration/module/#rule-use
                // Los loaders pueden encadenarse pasando varios loaders, que se aplicarán de derecha a izquierda (de la última a la primera configuración).

                // style-loader: Permite imprimir el archivo css en pantalla insertándolos en una etiqueta style dentro del head
                { loader: 'style-loader' },
                // css-loader: Permite cargar archivos css e interpretarlos dentro de js
                // import "style.css" -> dentro de Javascript
                { loader: 'css-loader'}
            ]
          }
       ]
    },
    plugins: [
        // Array con la lista de plugins
        new BabelPlugin({
            test: /\.js$/,
            presets: ['es2015'],
            sourceMaps: false,
            compact: false
        })
    ],
    //watch: true
}