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
		// I would like to return a better error here, this is an xss error catch for a non boolean value.
		if(typeof endorsement.endorsement!==Boolean&&endorsement.endorsement.length>1){return{errormsg:'Invalid endorsement value'};}
        return{
            org_id:xss(endorsement.org_id),
            endorsement:xss(endorsement.endorsement)
        };
    }
};

module.exports=EndorsementsService;