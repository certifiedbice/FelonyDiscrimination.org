const path=require('path');
const express=require('express');
const xss=require('xss');
const OrgsService=require('./orgs-service');
const orgsRouter=express.Router();
const jsonParser=express.json();

const serializeOrg=org=>({
    id:org.id,
    org_name:xss(org.org_name),
    org_phone:xss(org.org_phone),
    org_st_addr:xss(org.org_st_addr),
    org_city:xss(org.org_city),
    org_state:xss(org.org_state),
    org_zipcode:xss(org.org_zipcode),
    org_type:xss(org.org_type),
});

orgsRouter
    .route('/search')
    .get((req,res,next)=>{
        const knexInstance=req.app.get('db');
        if(req.query.str){
            const searchStr=req.query.str;
            return OrgsService.getAllOrgs(knexInstance)
            .then(orgs=>{
                // parse all object key/values to lowercase strings
                orgs.forEach((org,index)=>{
                    Object.keys(org).forEach(key=>{
                        orgs[index][key]=orgs[index][key].toString().toLowerCase();
                    });
                });
                //Filter results
                let filteredArray=[];
                orgs.forEach((org,index)=>{
                    Object.keys(org).forEach(key=>{
                        if(orgs[index][key].includes(searchStr)){
                            if(!filteredArray.find(filteredOrg=>filteredOrg.id===org.id))filteredArray.push(org);
                        }
                    });
                });

                res.json(filteredArray.map(serializeOrg));
            })
            .catch(next)
        }
    });

orgsRouter
    .route('/submit-org')
    .post(jsonParser,(req,res,next)=>{
        const {org_name,org_phone,org_st_addr,org_city,org_state,org_zipcode,org_type}=req.body;
        const newOrg={org_name,org_phone,org_st_addr,org_city,org_state,org_zipcode,org_type};

        for(const [key,value] of Object.entries(newOrg))
        
        if(value==null)
            return res.status(400).json({
                error:{message:`Missing '${key}' in request body`}
            })
        
            OrgsService.insertOrg(
                req.app.get('db'),
                newOrg
            )

            .then(org => {
                res
                .status(201)
                .location(path.posix.join(req.originalUrl, `/${org.id}`))
                .json(serializeOrg(org))
            })
            .catch(next)
    });

orgsRouter
    .route('/:org_id')
    .all((req,res,next)=>{
        OrgsService.getByOrgId(
           req.app.get('db'),
           req.params.org_id
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
            id:res.org.id,
            org_name:xss(res.org.org_name),
            org_phone:xss(res.org.org_phone),
            org_st_addr:xss(res.org.org_st_addr),
            org_city:xss(res.org.org_city),
            org_state:xss(res.org.org_state),
            org_zipcode:xss(res.org.org_zipcode),
            pos_endorsements:xss(res.org.pos_endorsements),
            neg_endorsements:xss(res.org.neg_endorsements),
            org_type:xss(res.org.org_type),
        });
    });

module.exports=orgsRouter;