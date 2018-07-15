var express = require('express');
var mysql = require('mysql')
var router = express.Router();

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Skype'
})

db.connect();

router.post('/',function(req,res){
  var user_email=req.body.email;
  var password=req.body.password;
  var auth=false;
  db.query('SELECT ID FROM User WHERE Email=? and Password=?',[user_email,password],function (error, results, fields,auth){
    if(error) throw error
    console.log(results)
    console.log(results.length)
    if(results.length > 0)
        return res.send({ error: false, login: true, ID:results[0].ID });
    return res.send({ error: false, login: false, ID:-1 });
  } );
});



/* GET users listing. */
router.get('/:id', function(req, res, next) {
console.log("printing req.params")
console.log(req.params);
//console.log(res);
//console.log(next);
if(req.params.id!=-1)
 db.query('SELECT * FROM User Where ID='+req.params.id+';', function(err, results) {
    if (err) throw err
    console.log(results[0].ID)
    console.log(results[0].FirstName)
    res.json([{
    firstname:results[0].FirstName,
    lastname:results[0].LastName,
    email:results[0].Email,
    birthday:results[0].Birthdate,
    UsrID:results[0].ID
    }])
  } );
else {
  return res.json({error:true});
}
});


module.exports = router;
