
const http = require('http');

http.createServer( (req, res ) => {

    //res.writeHead(200, {'Content-Type':'application/json'})
    res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    res.writeHead(200, {'Content-Type':'application/csv'})

    res.write('id, nombre\n');
    res.write('1, Fernando\n');
    res.write('2, Michelle\n');
    res.write('3, Sebas\n');
    res.end();
})
.listen( 7070);

console.log('Escuchando en el puerto', 7070);