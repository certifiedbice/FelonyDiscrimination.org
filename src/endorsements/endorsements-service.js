const EndorsementsService={
    insertEndorsement(knex,newEndorsement){
        return knex
        .insert(newEndorsement)
        .into('endorsements')
        .returning('*')
        .then(rows=>{return rows[0];});
    },
    // updateEndorsement(knex,id,newEndorsementFields){
    //     return knex('endorsements')
    //     .where({ id })
    //     .update(newEndorsementFields);
    // },
};

module.exports=EndorsementsService;