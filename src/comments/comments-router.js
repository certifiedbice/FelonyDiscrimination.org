const path=require('path');
const express=require('express');
const CommentsService=require('./comments-service');
const {requireAuth}=require('../middleware/basic-auth');
const commentsRouter=express.Router();
const jsonBodyParser=express.json();

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
	.post(requireAuth,jsonBodyParser,(req,res,next)=>{
		const {org_id,title,comment}=req.body;
		const newComment={org_id,title,comment};
		for(const [key,value] of Object.entries(newComment))
		if(value==null){
			return res.status(400).json({
				error:{message:`Missing '${key}' in request body`}
			})
		}
		newComment.user_id=req.user.id;
		CommentsService.insertComment(
			req.app.get('db'),
			newComment
		)
		.then(comment=>{
			res
				.status(201)
				.location(path.posix.join(req.originalUrl))
				.json(CommentsService.serializeEndorsement(comment))
		})
		.catch(next);
	});
module.exports=commentsRouter;