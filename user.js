var connection = require('./config');
const express = require('express');

const router = express.Router();

//Adding new user

router.post('/addusers', function (req, res) {
    var user = {
        "name": req.body.name,
        "email": req.body.email,
        "phoneno":req.body.phoneno,
        "days":req.body.days,
        "suscribe":req.body.suscribe
       
    }

    connection.query('insert into users set ?', user, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
            console.log(error);
        } else {
            res.json({

                status: true,
                data: results,
                message: 'Users added sucessfully'
            })
        }
    });
});

//Viewing user details

router.get('/userdetails', function (req, res) {
    connection.query('select * from users ', (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
        1
    });
});

module.exports = router;