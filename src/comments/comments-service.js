const CommentsService={
    getCommentsByOrgId(knex,org_id){
        return knex.from('comments').select('*').where('org_id',org_id);
    },
    insertComment(knex,newComment){
        return knex
        .insert(newComment)
        .into('comments')
        .returning('*')
        .then(rows=>{return rows[0];});
    },
};

module.exports=CommentsService;