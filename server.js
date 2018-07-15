var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'shadow',
  password: 'skypeclone'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
