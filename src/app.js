require('dotenv').config();
const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const helmet=require('helmet');
const {NODE_ENV}=require('./config');
//const usersRouter = require('./users/users-router')
const contactRouter=require('./contact/contact-router');
const orgsRouter=require('./orgs/orgs-router');
const endorsementsRouter=require('./endorsements/endorsements-router');
const commentsRouter=require('./comments/comments-router');
const app=express();
const morganOption=(NODE_ENV==='production')
	? 'tiny'
	: 'common'
app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());
//app.use('/api/users', usersRouter)
app.use('/api/contact', contactRouter);
app.use('/api/orgs', orgsRouter);
app.use('/api/orgs/:orgId/endorsements', endorsementsRouter)
app.use('/api/orgs/:orgId/comments', commentsRouter)
app.get('/',(req,res)=>{
	res.send('FelonyDiscrimination.org');
});
module.exports=app;