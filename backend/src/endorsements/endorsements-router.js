const path=require('path');
const express=require('express');
const EndorsementsService=require('./endorsements-service');
const {requireAuth}=require('../middleware/jwt-auth');
const endorsementsRouter=express.Router();
const jsonBodyParser=express.json();

endorsementsRouter
    .route('/')
    .post(requireAuth,jsonBodyParser,(req,res,next)=>{
        const {org_id,endorsement}=req.body;
        const newEndorsement={org_id,endorsement};
        for(const [key,value] of Object.entries(newEndorsement))   
        if(value==null){
            return res.status(400).json({
                error:{message:`Missing '${key}' in request body`}
            })
        }
        newEndorsement.user_id=req.user.id;
        EndorsementsService.insertEndorsement(
            req.app.get('db'),
            newEndorsement
        )
        .then(endorsement=>{
            res
                .status(201)
                .location(path.posix.join(req.originalUrl))
                .json(EndorsementsService.serializeEndorsement(endorsement))
        })
        .catch(next)
    });
module.exports=endorsementsRouter;