const mongoose=require('mongoose')
 mongoose.connect('mongodb://localhost:27017/cms')
 const Candidate=mongoose.model('Candidate',{
    
        id: String,
        uname: String,
        adhar: String,
        dob: String,
        email:String ,
        contact:String ,
        qfn:String ,
        texp: String,
        rexp: String
            })
      module.exports={
        Candidate
      }

 