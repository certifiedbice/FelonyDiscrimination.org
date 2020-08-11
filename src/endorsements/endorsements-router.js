const path=require('path');
const express=require('express');
const xss=require('xss');
const EndorsementsService=require('./endorsements-service');
const endorsementsRouter=express.Router();
const jsonParser=express.json();
const serializeEndorsement=endorsement=>({
    user_id:xss(endorsement.user_id),
    org_id:xss(endorsement.org_id),
    endorsement:xss(endorsement.endorsement)
});
endorsementsRouter
    .route('/')
    .post(jsonParser,(req,res,next)=>{
        const {user_id,org_id,endorsement}=req.body;
        const newEndorsement={user_id,org_id,endorsement};
        for(const [key,value] of Object.entries(newEndorsement))   
        if(value==null)
            return res.status(400).json({
                error:{message:`Missing '${key}' in request body`}
            })
            EndorsementsService.insertEndorsement(
                req.app.get('db'),
                newEndorsement
            )
            .then(endorsement=>{
                res
                .status(201)
                .location(path.posix.join(req.originalUrl))
                .json(serializeEndorsement(endorsement))
            })
            .catch(next)
    });
module.exports=endorsementsRouter;