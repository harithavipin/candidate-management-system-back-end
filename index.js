const express=require('express')
const cors=require("cors")
const logic=require('./services/logic')

const server=express()
server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())
server.listen(8001,()=>{
    console.log('CMS server started at port number 8001');
})
//get all contact api
server.get('/get-all-candidates',(req,res)=>{
    logic.allCandidates()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//create candidate
server.post('/add-candidate',(req,res)=>{
    logic.addCandidate(req.body.id,req.body.cName,
        req.body.cAdhar,
        req.body.cEmail,
        req.body.contact,
        req.body.cQfn,
        req.body.ctExp,
        req.body.cRExp)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//delete candidate

server.delete('/delete-candidate/:id',(req,res)=>{
    logic.deleteCan(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//particular employee details

server.get('/get-candidate/:id',(req,res)=>{
logic.getCandidate(req.params.id).then((result)=>{
    res.status(result.statusCode).json(result)
})
})
//update candidate

server.post('/update-Candidate',(req,res)=>{
    logic.updateCandidate(req.body.id,req.body.cName,
        req.body.cAdhar,
        req.body.cEmail,
        req.body.contact,
        req.body.cQfn,
        req.body.ctExp,
        req.body.cRExp)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

