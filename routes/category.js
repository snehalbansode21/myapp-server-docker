const express = require("express")
const db = require("../db")
const utils = require("../utils")
const router = express()

router.use(express.json());
router.get("/",(request,response)=>{
    const connection = db.connect()
    const statement = ('select * from category');
    connection.query(statement,(error,result)=>{
        connection.end();
        response.send(utils.createResult(error,result));
    })
})

router.post("/",(request,response)=>{
    const {title,description,price} = request.body
    const connection = db.connect()
    const statement = (`insert into category(title,description,price) values ('${title}','${description}','${price}')`);
    connection.query(statement,(error,result)=>{
        connection.end();
        response.send(utils.createResult(error,result));
    })
})

module.exports = router