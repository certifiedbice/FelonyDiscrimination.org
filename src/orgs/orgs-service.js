const OrgsService={
    getAllOrgs(knex){
        return knex.select('*').from('organizations');
    },
    getByOrgId(knex,id){
        return knex.from('organizations').select('*').where('id',id).first();
    },
    insertOrg(knex,newOrg){
        return knex
        .insert(newOrg)
        .into('organizations')
        .returning('*')
        .then(rows=>{return rows[0];});
    },
    updateOrg(knex,id,newOrgFields){
        return knex('organizations')
        .where({ id })
        .update(newOrgFields);
    },
    deleteOrg(knex,id){
        return knex('organizations')
        .where({id})
        .delete();
    },
};

module.exports=OrgsService;