const User = require('../models/user')

const getUser = async (req,res) =>{
 try{
 const getPerson = await User.find() 
    res.status(200).json(getPerson)   
 }

 catch(error){
     console.log(error)
 }
}

const addUser = async (req, res) =>{
    try{
        const newUser = await User.create({
            name:'Uche Jumbo',
            hobbies: ['Acting', 'showbiz']
        })
        res.status(200).json(newUser)
    }
    catch(error){
        console.log(error)
    }
}

const updateUser = async (req, res) =>{
    
    try{
        const {id} = req.params
        const updateField= await User.findOneAndUpdate({id:id},req.body)
        res.status(200).json(updateField)
        
    }
    catch(error){
        console.log(error)
    }
}


const deleteUser = async (req,res) =>{
    const {id} = req.params
    console.log(id)
    try{
        const rmUser = await User.findOneAndDelete({id:id})
        res.status(200).json('Successfully removed')
    }
    catch(err){
        console.log(error)
    }
}
module.exports = {
    getUser,
    addUser,
    updateUser,
    deleteUser
}