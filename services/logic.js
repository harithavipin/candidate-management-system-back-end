const db = require('./db')

//get all candidate details

const allCandidates = () => {
    return db.Candidate.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    candidates: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: "no data is available"
                }
            }
        }
    )
}
//create a new candidate
const addCandidate = (id, uname, adhar, email, contact, qfn, texp, rexp) => {
    return db.Candidate.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 401,
                message: "candidate id already exist"
            }
        }
        else {
            const newCandidate = new db.Candidate({
                id,
                uname,
                adhar,

                email,
                contact,
                qfn,
                texp,
                rexp
            })

            newCandidate.save()
            return {
                statusCode: 200,
                message: "data added successfully"
            }
        }

    })
}
//delete candidate
const deleteCan = (id) => {
    return db.Candidate.deleteOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 200,
                message: "data removed successfully"
            }
        }
        else {
            return {
                statusCode: 404,
                message: "no data is available"
            }
        }
    })

}
//to get particular candidate api
const getCandidate = (id) => {
    return db.Candidate.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 200,
                candidates: result
            }
        }
        else {
            return {
                statusCode: 404,
                message: "no data is available"
            }
        }
    })
}

//update candidate
const updateCandidate = (id, uname, adhar, email, contact, qfn, texp, rexp) => {
    return db.Candidate.findOne({ id }).then((result) => {
        if (result) {
            result.id = id
            result.uname = uname
            result.adhar = adhar
            result.email = email
            result.contact = contact
            result.qfn = qfn
            result.texp = texp
            result.rexp = rexp
            result.save()
            return{
                statusCode:200,
                message:"data updated successfully"

            }

        }
        else{
            return{
                statusCode:404,
                message:"no data available"

            }

        }
    })
}
module.exports = {
    allCandidates,
    deleteCan,
    getCandidate,
    addCandidate,
    updateCandidate

}