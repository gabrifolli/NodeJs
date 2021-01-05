var fs = require('fs');

fs.open('mynewfile.docx', 'w', function 
(err, file) {
    if (err) throw err;
    console.log('Saved!');
});