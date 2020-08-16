const xss=require('xss');
const EndorsementsService={
    insertEndorsement(knex,newEndorsement){
        return knex
        .insert(newEndorsement)
        .into('endorsements')
        .returning('*')
        .then(rows=>{return rows[0];});
    },
    serializeEndorsement(endorsement){
        return{
            org_id:xss(endorsement.org_id),
            endorsement:xss(endorsement.endorsement)
        }
    }
};

module.exports=EndorsementsService;