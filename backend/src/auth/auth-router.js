const express=require('express');
const authRouter=express.Router();
const AuthService=require('./auth-service');
const {requireAuth}=require('../middleware/jwt-auth');
const jsonBodyParser=express.json();
authRouter
	.post('/login',jsonBodyParser,(req,res,next)=>{
		const {email,password}=req.body;
		const loginUser={email,password};
		// for(const [key,value] of Object.entries(loginUser)){
		// 	if(value==null){
		// 		return res.status(400).json({
		// 			error:`Missing '${key}' in request body`
		// 		});
		// 	}
		// }
		for(const [key,value] of Object.entries(loginUser)){
			if(value==null){
				return res.status(400).json({error:'Incorrect user_name or password'});
			}
		}
		AuthService.getUserWithUserName(
			req.app.get('db'),loginUser.email)
			.then(dbUser=>{
				if(!dbUser){
					return res.status(400).json({error:'Incorrect user_name or password'});
				}
				return AuthService.comparePasswords(loginUser.password,dbUser.password)
				.then(compareMatch => {
					if(!compareMatch){
						return res.status(400).json({error:'Incorrect user_name or password'});
					}
				const sub=dbUser.email;
				const payload={user_id:dbUser.id};
				res.send({authToken:AuthService.createJwt(sub,payload)});
			});
		})
		.catch(next);
	})
	.post('/refresh',requireAuth,(req,res)=>{
		const sub=req.user.email;
		const payload={user_id:req.user.id};
		res.send({authToken:AuthService.createJwt(sub,payload)});
	});
module.exports=authRouter;