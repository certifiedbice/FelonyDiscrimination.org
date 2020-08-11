const path=require('path');
const express=require('express');
//const xss=require('xss');
const nodemailer=require('nodemailer');
const cors = require('cors');
const ContactService=require('./contact-service');
const contactRouter=express.Router();
const jsonParser=express.json();
const {EMAIL_USER,EMAIL_PASS}=require('../config');

// const transport={
//     host:'gator1234.hostgator.com',
//     port:465,
//     auth:{
//         user:EMAIL_USER,
//         pass:EMAIL_PASS
//     }
// }

// const transporter=nodemailer.createTransport(transport)

// transporter.verify((error,success)=>{
//     if(error){console.log(error);}
//     else{console.log('Server is ready to take messages');}
// });

contactRouter
	//.use(cors())
	.route('/')
	.post(jsonParser,(req,res,next)=>{
		const name=req.body.name;
		const email=req.body.email;
		const message=req.body.message;
		const content=`name: ${name} \n email: ${email} \n message: ${message} `;
		
		const mail={
			from:name,
			to:'contact@felonydiscrimination.org',
			subject:'FelonyDiscrimination.org - Contact Form',
			text:content
		}
		console.log(mail);

	// transporter.sendMail(mail,(err,data)=>{
	//     if(err){
	//         res.json({
	//             status:'fail'
	//         })
	//     } else {
	//         res.json({
	//             status:'success'
	//         })
	//     }
	// })
	});
module.exports=contactRouter;