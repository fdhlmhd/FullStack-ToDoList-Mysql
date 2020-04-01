var express = require("express")
var router = express.Router()
const Task = require("../model/Task.js")

//get all task
router.get("/tasks", (req,res) => {
    Task.findAll()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.send("error: " +err)
        })
})

//add data task
router.post("/task", (req,res) => {
    if(!req.body.task_name){
        res.status(400)
        res.json({
            error: "Data salah"
        })
    }else {
        Task.create(req.body)
        .then(() => {
            res.send("Task berhasil ditambahkan")
        })
        .catch(err => {
            res.send("Error: " + err)
        })
    }
})

//delete data task

router.delete("/task/:id", (req,res ) => {
    Task.destroy({
        where: {
            id:req.params.id
        }
    })
    .then(() => {
        res.send("Task sudah di hapus!")
    })
    .catch(err => {
        res.send("error: " +err)
    })
})


//update data task
router.put("/task/:id", (req,res) => {
    if(!req.body.task_name) {
        res.status(400)
        res.json({
            error: "Data salah brow"
        })
    } else {
        Task.update(
            { task_name : req.body.task_name},
            { where : { id: req.params.id} }
        )
        .then(() => {
            res.send("Task berhasil di update")
        })
        .error(err => res.send (err))
    }
})


module.exports = router