const { response } = require('express')
const express = require('express')
const router = express.Router()
const registerTemplateCopy = require('../models/registermodel')
const signUpTemplateCopy = require('../models/SignUpModels')


router.post('/createnotes', async(request, response)=>{
    console.log(request.body)
    try{

        const signedUpUser = await new signUpTemplateCopy({
            note:request.body.note            
        })
        signedUpUser.save()
        .then(data =>{
            response.sendStatus(200)
        })
        .catch(error =>{
            response.sendStatus(404)
        })

    }catch(err){
        console.log(err);
        response.sendStatus(404)
    }

})

router.get('/get-data/:note', async(req,res)=>{

    try{

        await registerTemplateCopy.findOne({
            note:req.params.note
        }).then(data=>{
            res.json(data)
        }).catch(err=>res.json(err));
        
    }catch(err){
        console.log(err);
    }
})

router.get('/get-all-data', async(req,res)=>{

    try{

        await signUpTemplateCopy.find()
        .then(data=>{
            res.json(data)
            
        }).catch(err=>res.json(err));
        
    }catch(err){
        console.log(err);
    }
})


router.post('/update-mail/:note', async(req,res)=>{

    try{

        const data = await signUpTemplateCopy.findOneAndUpdate({
            note:req.params.note
        },{
            $set:{
                note:req.body.note
            }
        });

        if(data){
            res.sendStatus(200);
        }
        else res.sendStatus(404);
        
    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }


})


router.post('/delete-data/:note', async(req,res)=>{

    try{

        const data = await signUpTemplateCopy.findOneAndDelete({
            note:req.params.note
        });

        if(data){
            res.json(data);
        }
        else res.sendStatus(404);
        
    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }


})
// router.get('/signin')
module.exports = router