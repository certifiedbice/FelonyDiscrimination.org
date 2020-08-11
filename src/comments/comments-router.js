const path=require('path');
const express=require('express');
const xss=require('xss');
const CommentsService=require('./comments-service');
const commentsRouter=express.Router();
const jsonParser=express.json();
const serializeEndorsement=comment=>({
    id:comment.id,
    user_id:xss(comment.user_id),
    org_id:xss(comment.org_id),
    title:xss(comment.title),
    comment:xss(comment.comment)
});
commentsRouter
    .route('/')
    .all((req,res,next)=>{
        baseUrlSplitArray=req.baseUrl.split('/');
        CommentsService.getCommentsByOrgId(
           req.app.get('db'),
           baseUrlSplitArray[3]
        )
        .then(org=>{
            if(!org){
                return res.status(404).json({
                    error:{message:`Organization doesn't exist`}
                });
            }
            res.org=org
            next();
        })
        .catch(next)
    })
    .get((req,res,next)=>{
        res.json({
            comments:res.org
        });
    })
    .post(jsonParser,(req,res,next)=>{
        const {user_id,org_id,title,content}=req.body;
        const newComment={user_id,org_id,title,content};
        for(const [key,value] of Object.entries(newComment))
        if(value==null)
            return res.status(400).json({
                error:{message:`Missing '${key}' in request body`}
            })
            CommentsService.insertComment(
                req.app.get('db'),
                newComment
            )
            .then(comment=>{
                res
                .status(201)
                .location(path.posix.join(req.originalUrl))
                .json(serializeEndorsement(comment))
            })
            .catch(next)
    });
module.exports=commentsRouter;