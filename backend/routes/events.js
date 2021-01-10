const express = require("express");
const events = express.Router();
const Sequelize = require("sequelize");
const cores = require("cors");
const Event = require('../models/event')


events.post('/create-event',(req,res) => {
    
    const data = {
        title : req.body.title,
        description : req.body.description,
        stream:req.body.stream
    }
    Event.create(data).then(event => {
        res.json({success:"event registered"})
    }).catch(err => {
        res.send('error' + err)
    })
   
    })

events.get('/get-events',(req,res) => {
    Event.findAll().then(faq => {
            res.send(faq)
        }).catch(err => {
            res.send('error' + err)
        })
    })

events.get('/get-event/:id',(req,res) => {
    
        Event.findOne({ where: { id: req.params.id } }).then(event=>{
            res.send(event)
            }).catch(err =>{
                res.send('error'+ err)
            })
        })

module.exports = events;
