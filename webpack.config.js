const path = require('path');

module.exports = [{
    name: "Lottery",
    entry: path.join (__dirname,"scripts.js"),
    output: {
        path : path.join(__dirname, 'dist','js'),
        filename: "scripts.js"}
        
}
]